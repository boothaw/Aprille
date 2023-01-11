// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Projects" titleTo="projects" buttonLabel="New Project" buttonTo="newProject">
        <Route path="/projects/new" page={ProjectNewProjectPage} name="newProject" />
        <Route path="/projects/{id:Int}/edit" page={ProjectEditProjectPage} name="editProject" />
        <Route path="/projects/{id:Int}" page={ProjectProjectPage} name="project" />
        <Route path="/projects" page={ProjectProjectsPage} name="projects" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost"></Set>
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
