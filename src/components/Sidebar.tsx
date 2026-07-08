import { useAuthenticator } from '@aws-amplify/ui-react'
import './Sidebar.css'

// Placeholder left-hand panel. Menu items will be added here later.
function Sidebar() {
  const { signOut } = useAuthenticator((context) => [context.user])

  return (
    <aside id="sidebar">
      <h2>Menu</h2>
      <p className="sidebar-placeholder">Coming soon</p>
      <button type="button" className="logout-button" onClick={signOut}>
        Log out
      </button>
    </aside>
  )
}

export default Sidebar
