import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, signUp, logOut } = useAuth()

  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main login-page">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Login</h2>
            </header>

            <div className="rw-segment-main">
              {isAuthenticated ? (
                <div>
                  <p>You are already logged in!</p>
                  <div className="back-to-dash">
                    {' '}
                    <Link to={routes.admin()}>Go To Admin Dashboard</Link>
                    {isAuthenticated && (
                      <button type="button" onClick={logOut}>
                        Log Out
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <p>Sign In</p>
                  <button className="rw-button rw-button-blue" onClick={signUp}>
                    sign in
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
