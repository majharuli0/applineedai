import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import BlogViewer from "../components/BlogViewer";
import BlogTagViewer from "../components/BlogViewByTag"; // New component for tag view
import Admin from "../pages/Admin";
import AdminLogin from "../components/AdminLogin";
import CreateBlog from "../components/CreateBlog";
import BlogPreview from "../components/BlogPreview";
import BlogLayout from "../layout/blogLayout";
import AdminLayout from "../layout/adminLayout";
import Tags from "../components/Tags";
import Drafts from "../components/Drafts";
// Protected Route
const ProtectedRoute = ({ element }) => {
  // Check if the token exists in local storage
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? element : <Navigate to="/admin/login" />;
};
const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        {/* Blog Routes */}
        <Route path="/" element={<BlogLayout />}>
          <Route index element={<Home />} />
          <Route path="blog/:id" element={<BlogViewer />} />
          <Route path="blog/tag/:tagname" element={<BlogTagViewer />} />
          <Route path="blog-preview" element={<BlogPreview />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={<ProtectedRoute element={<AdminLayout />} />}
        >
          <Route index element={<Admin />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="create-blog/:id" element={<CreateBlog />} />
          <Route path="tags" element={<Tags />} />
          <Route path="drafts" element={<Drafts />} />
        </Route>

        {/* Catch-all Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
