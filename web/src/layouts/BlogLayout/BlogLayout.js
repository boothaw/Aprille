// import { useAuth } from '@redwoodjs/auth'
import { useState, useEffect, useRef } from 'react'

import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  // const { isAuthenticated, currentUser, logOut } = useAuth()
  const [showMenu, setShowMenu] = useState(false)
  const ref = useRef()

  function switch_menu() {
    setShowMenu(!showMenu)
  }

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
              </ul>
            </nav>
            <Link className="hamburger-container" onClick={switch_menu}>
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
            </Link>
          </div>
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
        </div>
      </header>
      <main className="blog-main">{children}</main>
    </>
  )
}

export default BlogLayout
