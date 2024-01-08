import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import AboutPage from "./pages/about-page";
import BlogPage from "./pages/blog-page";
import CreatePost from "./pages/create-post";
import EditPost, {updatePostAction} from "./pages/edit-post";
import SinglePage from "./pages/single-page";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/not-found-page";
import Layout from "./components/layout";
import LoginPage from "./pages/login-page";
import RequireAuth from "./hoc/require-auth";
import AuthProvider from "./hoc/auth-provider";
import { blogLoader } from "./pages/blog-page";
import { singleLoader } from "./pages/single-page";
import { createPostAction } from "./pages/create-post";
import ErrorPage from "./pages/error-page";

import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />}>
      <Route path="contacts" element={<p>Our contacts</p>} />
      <Route path="team" element={<p>Our team</p>} />
    </Route>
    <Route path="about-us" element={<Navigate to="/about" replace />} />
    <Route
      path="posts"
      element={<BlogPage />}
      loader={blogLoader}
      errorElement={<ErrorPage />} />
    <Route path="posts/:id" element={<SinglePage />} loader={singleLoader} />
    <Route
      path="posts/:id/edit"
      element={<EditPost />}
      loader={singleLoader}
      action={updatePostAction}/>
    <Route path="posts/new"
           element={
      <RequireAuth>
        <CreatePost />
      </RequireAuth>
    }
           action={createPostAction} />
    <Route path="login" element={<LoginPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
));

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;