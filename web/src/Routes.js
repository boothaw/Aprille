// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Works" titleTo="works" buttonLabel="New Work" buttonTo="newWork">
        <Route path="/works/new" page={WorkNewWorkPage} name="newWork" />
        <Route path="/works/{id:Int}/edit" page={WorkEditWorkPage} name="editWork" />
        <Route path="/works/{id:Int}" page={WorkWorkPage} name="work" />
        <Route path="/works" page={WorkWorksPage} name="works" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Works" titleTo="works" buttonLabel="New Work" buttonTo="newWork"></Set>
      <Set wrap={ScaffoldLayout} title="ClientWorks" titleTo="clientWorks" buttonLabel="New ClientWork" buttonTo="newClientWork"></Set>
      <Set wrap={BlogLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/photo/{id:Int}" page={PhotoPage} name="photo" />
        <Route path="/workshops" page={WorkshopsPage} name="workshops" />
        <Route path="/screenprinting" page={ScreenprintingPage} name="screenprinting" />
        <Route path="/terms-and-conditions" page={TermsAndConditionsPage} name="termsAndConditions" />
        <Route notfound page={NotFoundPage} />
      </Set>

      {/* administrative */}
      <Route path="/login" page={LoginPage} name="login" />
      {/* <Route path="/signup" page={SignupPage} name="signup" /> */}
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      {/* logged in */}
      <Private unauthenticated="home">
        {/* <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set> */}
        <Route path="/admin" page={AdminPage} name="admin" />
        <Set wrap={ScaffoldLayout} title="Projects" titleTo="projects" buttonLabel="New Project" buttonTo="newProject">
          <Route path="/admin/projects/new" page={ProjectNewProjectPage} name="newProject" />
          <Route path="/admin/projects/{id:Int}/edit" page={ProjectEditProjectPage} name="editProject" />
          <Route path="/admin/projects/{id:Int}" page={ProjectProjectPage} name="project" />
          <Route path="/admin/projects" page={ProjectProjectsPage} name="projects" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Images" titleTo="images" buttonLabel="New Image" buttonTo="newImage">
          <Route path="/admin/images/new" page={ImageNewImagePage} name="newImage" />
          <Route path="/admin/images/{id:Int}/edit" page={ImageEditImagePage} name="editImage" />
          <Route path="/admin/images/{id:Int}" page={ImageImagePage} name="image" />
          <Route path="/admin/images" page={ImageImagesPage} name="images" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Screenprints" titleTo="screenprints" buttonLabel="New Screenprint" buttonTo="newScreenprint">
          <Route path="/admin/screenprints/new" page={ScreenprintNewScreenprintPage} name="newScreenprint" />
          <Route path="/admin/screenprints/{id:Int}/edit" page={ScreenprintEditScreenprintPage} name="editScreenprint" />
          <Route path="/admin/screenprints/{id:Int}" page={ScreenprintScreenprintPage} name="screenprint" />
          <Route path="/admin/screenprints" page={ScreenprintScreenprintsPage} name="screenprints" />
        </Set>
      </Private>
      <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost"></Set>
      {/* public facing */}
    </Router>
  )
}

export default Routes
