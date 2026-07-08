import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  signIn,
  signUp,
  confirmSignUp,
  resendSignUpCode,
  resetPassword,
  confirmResetPassword,
  AuthError,
} from "aws-amplify/auth";
import { useAuth } from "../auth/useAuth";
import heroImg from "../assets/hero.png";
import "./Login.css";

type View = "signIn" | "signUp" | "confirmSignUp" | "forgotPassword" | "resetPassword";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="5" y="11" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.2 4.2M6.6 6.7C3.9 8.4 1.5 12 1.5 12s3.5 7 10.5 7c2 0 3.7-.5 5.1-1.3M9.9 5.2A10.9 10.9 0 0 1 12 5c7 0 10.5 7 10.5 7-.5 1-1.4 2.4-2.6 3.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function getErrorMessage(err: unknown): string {
  if (err instanceof AuthError) {
    return err.message;
  }
  if (err instanceof Error) {
    return err.message;
  }
  return "Something went wrong. Please try again.";
}

// Custom sign-in / registration page, built to match the "Nimbus Modern"
// reference design from Stitch: a top nav bar, a centered card with
// underline tabs, per-tab headline + subtitle, icon-prefixed inputs, a
// password visibility toggle, and a global footer. Unlike the previous
// version (which reskinned Amplify UI's <Authenticator/>), this talks
// directly to the Amplify/Cognito auth APIs (signIn/signUp/confirmSignUp/
// resetPassword/etc.) via useAuth's headless AuthProvider, so it fully
// controls its own markup instead of being constrained by Amplify UI's
// default components and CSS custom-property theming.
function Login() {
  const { authStatus, refresh } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [view, setView] = useState<View>("signIn");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (authStatus === "authenticated") {
      const from = (location.state as { from?: Location })?.from?.pathname ?? "/";
      navigate(from, { replace: true });
    }
  }, [authStatus, location.state, navigate]);

  function switchView(nextView: View) {
    setView(nextView);
    setError(null);
    setInfo(null);
    setPassword("");
    setConfirmPassword("");
    setCode("");
    setNewPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  }

  async function handleSignIn(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsPending(true);
    try {
      const { nextStep } = await signIn({ username: email, password });
      if (nextStep.signInStep === "DONE") {
        await refresh();
      } else if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
        setInfo("Please confirm your account before signing in.");
        setView("confirmSignUp");
      } else {
        setError("This account requires an additional step that isn't supported yet.");
      }
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsPending(false);
    }
  }

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setIsPending(true);
    try {
      const { nextStep } = await signUp({
        username: email,
        password,
        options: { userAttributes: { email } },
      });
      if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
        setInfo(`We sent a confirmation code to ${email}.`);
        setView("confirmSignUp");
      } else {
        setInfo("Account created. You can now sign in.");
        switchView("signIn");
      }
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsPending(false);
    }
  }

  async function handleConfirmSignUp(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsPending(true);
    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      setInfo("Account confirmed. Please sign in.");
      switchView("signIn");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsPending(false);
    }
  }

  async function handleResendCode() {
    setError(null);
    setInfo(null);
    try {
      await resendSignUpCode({ username: email });
      setInfo(`We sent a new confirmation code to ${email}.`);
    } catch (err) {
      setError(getErrorMessage(err));
    }
  }

  async function handleForgotPassword(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsPending(true);
    try {
      await resetPassword({ username: email });
      setInfo(`We sent a password reset code to ${email}.`);
      setView("resetPassword");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsPending(false);
    }
  }

  async function handleResetPassword(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsPending(true);
    try {
      await confirmResetPassword({ username: email, confirmationCode: code, newPassword });
      setInfo("Password updated. Please sign in.");
      switchView("signIn");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsPending(false);
    }
  }

  const isAuthTab = view === "signIn" || view === "signUp";

  return (
    <div id="auth-layout">
      <header className="auth-topbar">
        <div className="auth-topbar-brand">
          <img src={heroImg} className="auth-topbar-logo" alt="" />
          <span>Stay Fit</span>
        </div>
      </header>

      <main className="auth-panel">
        <div className="auth-card">
          {isAuthTab && (
            <div className="auth-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={view === "signIn"}
                className={`auth-tab ${view === "signIn" ? "auth-tab--active" : ""}`}
                onClick={() => switchView("signIn")}
              >
                Sign In
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={view === "signUp"}
                className={`auth-tab ${view === "signUp" ? "auth-tab--active" : ""}`}
                onClick={() => switchView("signUp")}
              >
                Create Account
              </button>
            </div>
          )}

          <div className="auth-card-body">
            {view === "signIn" && (
              <>
                <div className="auth-card-header">
                  <h1>Welcome back</h1>
                  <p>Sign in to keep tracking your health and activity data.</p>
                </div>
                {error && <p className="auth-message auth-message--error">{error}</p>}
                {info && <p className="auth-message auth-message--info">{info}</p>}
                <form className="auth-form" onSubmit={handleSignIn}>
                  <div className="auth-field">
                    <label htmlFor="email">Email</label>
                    <div className="auth-input-wrap">
                      <span className="auth-input-icon"><MailIcon /></span>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="auth-field">
                    <div className="auth-field-label-row">
                      <label htmlFor="password">Password</label>
                      <button type="button" className="auth-link" onClick={() => switchView("forgotPassword")}>
                        Forgot password?
                      </button>
                    </div>
                    <div className="auth-input-wrap">
                      <span className="auth-input-icon"><LockIcon /></span>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="auth-input-toggle"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword((v) => !v)}
                      >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    </div>
                  </div>
                  <button type="submit" className="auth-submit" disabled={isPending}>
                    {isPending ? "Signing in…" : "Sign in"}
                    <ArrowIcon />
                  </button>
                </form>
              </>
            )}

            {view === "signUp" && (
              <>
                <div className="auth-card-header">
                  <h1>Join Stay Fit</h1>
                  <p>Create an account to start tracking your Samsung Health data.</p>
                </div>
                {error && <p className="auth-message auth-message--error">{error}</p>}
                {info && <p className="auth-message auth-message--info">{info}</p>}
                <form className="auth-form" onSubmit={handleSignUp}>
                  <div className="auth-field">
                    <label htmlFor="signup-email">Email</label>
                    <div className="auth-input-wrap">
                      <span className="auth-input-icon"><MailIcon /></span>
                      <input
                        id="signup-email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="auth-field">
                    <label htmlFor="signup-password">Password</label>
                    <div className="auth-input-wrap">
                      <span className="auth-input-icon"><LockIcon /></span>
                      <input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="auth-input-toggle"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword((v) => !v)}
                      >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    </div>
                    <p className="auth-hint">
                      Must be at least 8 characters, with an uppercase letter, a number, and a symbol.
                    </p>
                  </div>
                  <div className="auth-field">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <div className="auth-input-wrap">
                      <span className="auth-input-icon"><LockIcon /></span>
                      <input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="auth-input-toggle"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowConfirmPassword((v) => !v)}
                      >
                        {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    </div>
                  </div>
                  <button type="submit" className="auth-submit" disabled={isPending}>
                    {isPending ? "Creating account…" : "Create Account"}
                    <ArrowIcon />
                  </button>
                </form>
              </>
            )}

            {view === "confirmSignUp" && (
              <>
                <div className="auth-card-header">
                  <h1>Confirm your email</h1>
                  <p>Enter the confirmation code we sent to {email || "your email"}.</p>
                </div>
                {error && <p className="auth-message auth-message--error">{error}</p>}
                {info && <p className="auth-message auth-message--info">{info}</p>}
                <form className="auth-form" onSubmit={handleConfirmSignUp}>
                  <div className="auth-field">
                    <label htmlFor="confirm-code">Confirmation code</label>
                    <div className="auth-input-wrap">
                      <input
                        id="confirm-code"
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="auth-submit" disabled={isPending}>
                    {isPending ? "Confirming…" : "Confirm account"}
                    <ArrowIcon />
                  </button>
                  <button type="button" className="auth-link auth-link--center" onClick={handleResendCode}>
                    Resend code
                  </button>
                </form>
              </>
            )}

            {view === "forgotPassword" && (
              <>
                <div className="auth-card-header">
                  <h1>Reset your password</h1>
                  <p>Enter your email and we'll send you a reset code.</p>
                </div>
                {error && <p className="auth-message auth-message--error">{error}</p>}
                {info && <p className="auth-message auth-message--info">{info}</p>}
                <form className="auth-form" onSubmit={handleForgotPassword}>
                  <div className="auth-field">
                    <label htmlFor="forgot-email">Email</label>
                    <div className="auth-input-wrap">
                      <span className="auth-input-icon"><MailIcon /></span>
                      <input
                        id="forgot-email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="auth-submit" disabled={isPending}>
                    {isPending ? "Sending…" : "Send reset code"}
                    <ArrowIcon />
                  </button>
                  <button type="button" className="auth-link auth-link--center" onClick={() => switchView("signIn")}>
                    Back to sign in
                  </button>
                </form>
              </>
            )}

            {view === "resetPassword" && (
              <>
                <div className="auth-card-header">
                  <h1>Enter new password</h1>
                  <p>Use the code we sent to {email || "your email"} to set a new password.</p>
                </div>
                {error && <p className="auth-message auth-message--error">{error}</p>}
                {info && <p className="auth-message auth-message--info">{info}</p>}
                <form className="auth-form" onSubmit={handleResetPassword}>
                  <div className="auth-field">
                    <label htmlFor="reset-code">Reset code</label>
                    <div className="auth-input-wrap">
                      <input
                        id="reset-code"
                        type="text"
                        inputMode="numeric"
                        placeholder="Enter code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="auth-field">
                    <label htmlFor="new-password">New password</label>
                    <div className="auth-input-wrap">
                      <span className="auth-input-icon"><LockIcon /></span>
                      <input
                        id="new-password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="auth-input-toggle"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword((v) => !v)}
                      >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    </div>
                  </div>
                  <button type="submit" className="auth-submit" disabled={isPending}>
                    {isPending ? "Updating…" : "Update password"}
                    <ArrowIcon />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="auth-footer">
        <p>&copy; {new Date().getFullYear()} Stay Fit. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
