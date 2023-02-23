// import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  // const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header className="blog-header">
        <div className="blog-header__inner">
          <div className="logos">
            <Link to={routes.home()}>
              <img className="logo" src="/LOGO_colour.png" alt="logo" />
            </Link>
            <Link className="aprille-name" to={routes.home()}>
              <h1>Aprille Zammit ~ Studio</h1>
              <p>Screenprinter, Photographer, Nature Junkie</p>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#photos">photography</a>
              </li>
              <li>
                <a href="#projects">projects</a>
              </li>
              <li>
                <a href="#workshops">workshops</a>
              </li>
              <li>
                <Link to={routes.about()}>about</Link>
              </li>
              <li>
                <Link to={routes.contact()}>contact</Link>
              </li>
            </ul>
          </nav>
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
