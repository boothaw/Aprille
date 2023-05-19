import { useState, useRef, useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [showMenu, setShowMenu] = useState(false)
  const ref = useRef()

  const OtherClick = (ref, callback) => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
    }

    useEffect(() => {
      document.addEventListener('click', handleClick)

      return () => {
        document.removeEventListener('click', handleClick)
      }
    })
  }

  OtherClick(ref, () => {
    if (showMenu) setShowMenu(!showMenu)
  })

  function switch_menu() {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <header className="blog-header">
        <div className="blog-header__inner">
          <div className="logo-container">
            <Link to={routes.home()}>
              <img className="logo" src="/LOGO_colour.png" alt="logo" />
            </Link>
          </div>
          <div
            className={`nav-container ${
              showMenu ? 'menu_active' : 'menu_inactive'
            }`}
          >
            <nav ref={ref} className="nav">
              <ul>
                <li>
                  <a href="/#photos" onClick={switch_menu}>
                    photography
                  </a>
                </li>
                <li>
                  <a href="/#projects" onClick={switch_menu}>
                    projects
                  </a>
                </li>
                <li>
                  <a href="/#screenprints" onClick={switch_menu}>
                    screenprints
                  </a>
                </li>
                <li>
                  <a href="/#workshops" onClick={switch_menu}>
                    workshops
                  </a>
                </li>
                <li>
                  <Link to={routes.about()} onClick={switch_menu}>
                    bio & contact
                  </Link>
                </li>
                <li>
                  {isAuthenticated && (
                    <button type="button" onClick={logOut}>
                      Logout
                    </button>
                  )}
                </li>
                {/* <li className="hamburger-wave">
                <div>
                  <span>~</span>
                  <span>~</span>
                  <span>~</span>
                </div>
              </li> */}
                {/* <li>
                <Link to={routes.about()}>contact</Link>
              </li> */}
                {/* {isAuthenticated ? (
                    <div>
                      <span>Logged in as {currentUser.email}</span>{' '}
                      <button type="button" onClick={logOut}>
                        Logout
                      </button>
                    </div>
                  ) : (
                    <Link to={routes.login()}>Login</Link>
                  )} */}
              </ul>
            </nav>
            <button className="hamburger-container" onClick={switch_menu}>
              <div className="hamburger">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 18L20 18"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 6L20 6"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </header>
      <main className="blog-main">{children}</main>
      <footer id="footer" className="footer">
        <div className="footer-inner">
          <a href="/" className="aprille-name">
            <h2>Aprille Zammit ~ Studio</h2>
            <p>Screenprinting, Photography, Adventure</p>
          </a>
          <div className="social-container">
            <a
              href="https://www.instagram.com/aprillezammit/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="instagram logo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/aprillenzammit"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="facebook logo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default BlogLayout
