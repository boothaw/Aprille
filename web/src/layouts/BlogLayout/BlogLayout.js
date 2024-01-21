import { useState, useRef, useEffect } from 'react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const BlogLayout = ({ children }) => {
  // const { isAuthenticated, currentUser, logOut } = useAuth()
  const { isAuthenticated, logOut } = useAuth()
  const [shownMenu, setshownMenu] = useState(false)
  const nav = useRef()
  const hamburger = useRef()

  // const OtherClick = (ref, callback) => {
  //   const handleClick = (e) => {
  //     if (ref.current && !ref.current.contains(e.target)) {
  //       callback()
  //     }
  //   }

  //   useEffect(() => {
  //     // document.addEventListener('click', handleClick)

  //     console.log('otherclick useeffect')

  //     return () => {
  //       document.removeEventListener('click', handleClick)
  //     }
  //   })
  // }

  // const switchMenu = () => {
  //   setshownMenu(!shownMenu)
  // }

  // OtherClick(ref, () => {
  //   if (shownMenu) setshownMenu(!shownMenu)
  // })

  const menuToggle = () => {
    setshownMenu(!shownMenu)
  }

  useEffect(() => {
    const clickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu and not the hamburger,
      // then close the menu
      if (
        shownMenu &&
        nav.current &&
        !nav.current.contains(e.target) &&
        !hamburger.current.contains(e.target)
      ) {
        menuToggle()
      }
    }

    document.addEventListener('mousedown', clickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', clickedOutside)
    }
  }, [shownMenu])

  return (
    <>
      <header className="blog-header">
        <div className="blog-header__inner">
          <div className="logo-container">
            <Link to={routes.home()} aria-label="Aprille Zammit Logo">
              <svg
                className="logo"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                style={{
                  enableBackground: 'new 0 0 576 576',
                }}
                viewBox="0 0 576 576"
              >
                <path
                  d="M282.57 86.84c28.57 48.77 57.14 97.54 85.71 146.32 24.48 41.79 48.95 83.58 73.43 125.37 2.4 4.1-2.49 8.57-6.36 5.83-9.04-6.41-18.08-12.82-26.95-19.46-12.04-9.01-23.08-19.28-34.96-28.49-16.21-12.57-35.73-24.16-56.89-24.12-20 .04-40.82 10.4-51.68 27.47-1.14 1.79-.7 4.67 2.11 4.25 16.89-2.55 33-5.86 48.25 4.55 11.55 7.89 18.93 21.71 18.61 35.69-.32 13.98-8.52 27.62-20.92 34.09-10.54 5.49-23.21 5.74-34.75 2.95-11.55-2.79-22.2-8.4-32.54-14.25-20.87-11.81-46.42-28.3-71.47-21.17-6.65 1.89-12.93 5.07-19.3 8.42-3.75 1.98-7.86-1.95-6.04-5.78 44.15-93.01 88.36-186.1 133.75-281.67"
                  style={{
                    fill: '#212558',
                  }}
                />
                <path
                  d="M303.78 447.77h8.34v6.71h-8.34z"
                  style={{
                    fill: '#fff',
                  }}
                />
              </svg>
            </Link>
          </div>
          <div
            className={`nav-container ${
              shownMenu ? 'menu_active' : 'menu_inactive'
            }`}
          >
            <nav ref={nav} className="nav">
              <ul>
                <li>
                  <Link to={routes.home()} onClick={menuToggle}>
                    portfolio
                  </Link>
                </li>
                <li>
                  <Link to={routes.photography()} onClick={menuToggle}>
                    photography
                  </Link>
                </li>
                <li>
                  <Link to={routes.screenprinting()} onClick={menuToggle}>
                    screenprinting
                  </Link>
                </li>
                <li>
                  <Link to={routes.workshops()} onClick={menuToggle}>
                    workshops
                  </Link>
                </li>
                <li>
                  <Link to={routes.about()} onClick={menuToggle}>
                    bio & contact
                  </Link>
                </li>
                <li>
                  {isAuthenticated && (
                    <button type="button" onClick={logOut}>
                      logout
                    </button>
                  )}
                </li>
              </ul>
            </nav>
            <button
              ref={hamburger}
              aria-label="mobile hamburger menu"
              className="hamburger-container"
              onClick={menuToggle}
            >
              <div className="hamburger">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 784 708"
                  preserveAspectRatio="none"
                >
                  <path d="M88.61,361.6c-25.88-19.84-51.5-39.48-78.52-60.2,10.28-10.06,19.38-20.11,29.62-28.81,48.35-41.08,104.29-62.26,167.91-62.55,33.4-.15,63.39,11.52,92.12,27.1,40.62,22.03,76.1,51.43,112.9,78.98,26.89,20.13,54.34,39.54,82.04,58.56,47.03,32.3,94.87,27.74,142.6,1.43,19.01-10.48,35.45-24.28,49.6-40.77,1.27-1.48,2.63-2.87,4.19-4.57,26.34,19.19,52.46,38.22,79,57.55-13.91,18.69-29.94,34.34-47.55,48.37-47.74,38.03-101.78,58.99-163.21,59.72-35.66,.43-67.9-11.37-98.8-27.76-40.84-21.66-76.6-50.66-113.32-78.34-27.02-20.38-54.66-39.95-82.24-59.58-42.7-30.4-86.65-26-130.96-3.92-17.19,8.57-32.15,20.23-45.39,34.79Z" />
                  <path d="M690.9,134.71c26.63,19.39,52.57,38.28,79.37,57.8-5.19,6.17-9.8,12.17-14.95,17.66-44.57,47.45-98.05,78.1-163.09,88.03-46.76,7.14-89.75-2.87-130.78-24.87-40.96-21.96-77.05-50.9-113.96-78.72-26.83-20.22-54.22-39.72-81.59-59.21-46.56-33.16-93.57-26.35-139.88,.15-13.56,7.76-25.32,18.68-38.95,28.93-24.15-18.51-49.75-38.13-76.04-58.28,1.86-2.39,3.31-4.57,5.07-6.47C70.08,41.55,136.63,12.33,216.11,14.42c30.01,.79,57.23,12.43,83.29,26.58,40.83,22.17,76.44,51.81,113.53,79.37,28.93,21.5,58.45,42.29,88.52,62.16,40.05,26.46,81.81,23.09,123.61,3.9,25.81-11.85,47.37-29.31,65.83-51.72Z" />
                  <path d="M10.88,496.47c15.29-19.07,32.78-34.22,52.07-47.32,45.56-30.92,95.97-46.03,151.02-44.51,30.86,.85,58.77,12.27,85.5,26.77,40.84,22.17,76.52,51.7,113.49,79.43,26.08,19.57,52.74,38.4,79.54,56.97,51.88,35.94,103.6,29.12,153.83-3.15,16.43-10.56,30.5-24.8,46.56-38.12,24.38,17.75,50.47,36.75,77.73,56.6-8.3,9.18-15.76,18.3-24.11,26.52-43.32,42.67-94.39,70.01-155.08,79.05-46.51,6.92-89.26-3.17-130.04-25.05-40.95-21.97-77.07-50.86-113.95-78.73-26.41-19.96-53.41-39.16-80.31-58.46-47.16-33.85-94.79-27.39-141.81-.15-13.31,7.71-24.86,18.47-38.19,28.57-24.25-18.58-49.85-38.2-76.26-58.43Z" />
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
