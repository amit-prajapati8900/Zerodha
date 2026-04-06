import './App.css';
import './dasbrd.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Landing Page Components
import HomePage from './landing_page/home/HomePage';
import SignUpPage from "./landing_page/signup/SignUpPage";
import SigninPage from "./landing_page/signup/SigninPage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import ErrorPage from "./landing_page/ErrorPage";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

// Dashboard Components
import LoginPage from "./landing_page/dashboard/LoginPage";
import Dashboard from "./landing_page/dashboard/Home";         // ← renamed to Dashboard
import PrivateRoute from "./landing_page/dashboard/PrivateRoute";
import Summary from "./landing_page/dashboard/Summary";
import Orders from "./landing_page/dashboard/Orders";
import Holdings from "./landing_page/dashboard/Holdings";
import Positions from "./landing_page/dashboard/Positions";
import Funds from "./landing_page/dashboard/Funds";
import Apps from "./landing_page/dashboard/Apps";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <main className="content">
          <Routes>
            {/* Landing Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />

            {/* Dashboard Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route index element={<Summary />} />   {/* Default → /home */}
              <Route path="orders" element={<Orders />} />
              <Route path="holdings" element={<Holdings />} />
              <Route path="positions" element={<Positions />} />
              <Route path="funds" element={<Funds />} />
              <Route path="apps" element={<Apps />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
