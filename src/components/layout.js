import { Outlet } from "react-router-dom";
import CustomLink from "./custom-link";
import "./layout.css";

const Layout = () => {
  return (
    <div>
      <header className="bg-primary navbar" data-bs-theme="dark">
        <CustomLink to="/" className="link">Home</CustomLink>
        <CustomLink to="/posts" className="link">Blog</CustomLink>
        <CustomLink to="/about" className="link">About</CustomLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer>2023</footer>
    </div>
  );
};

export default Layout;