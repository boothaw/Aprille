import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminPage = () => {
  return (
    <>
      <MetaTags title="Admin" description="Admin page" />
      <div className="rw-scaffold">
        <h1>Dashboard</h1>
        <p>☀️ Hello, Aprille ☀️</p>
        <div className="dashboard-btn-ctn">
          <Link to={routes.images()}>Update Images</Link>
          <Link to={routes.projects()}>Update Projects</Link>
          <Link to={routes.screenprints()}>Update Screenprints</Link>
          <Link to={routes.works()}>Update Workshop Images</Link>
        </div>
      </div>
    </>
  )
}

export default AdminPage
