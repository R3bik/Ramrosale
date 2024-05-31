// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivationPage from "./pages/ActivationPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import {
  BestSellingPage,
  EventsPage,
  FAQPage,
  HomePage,
  LoginPage,
  ProductDetailsPage,
  ProductsPage,
  ProfilePage,
  SignupPage,
} from "./routes/Routes";
import { AuthProvider } from "./context/AuthContext.js";
import ProtectedRoute from "./routes/ProtectedRoute"; // Import from context

function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:name" element={<ProductDetailsPage />} />
          <Route path="/best-selling" element={<BestSellingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
