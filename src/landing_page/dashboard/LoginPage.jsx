import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");     // Better error display
  const navigate = useNavigate();

  // ==================== TOKEN EXPIRY CHECK ====================
  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      // JWT token ke payload ko decode karte hain
      const payload = JSON.parse(atob(token.split(".")[1]));
      const expiry = payload.exp * 1000; // convert to milliseconds
      return Date.now() > expiry;
    } catch (err) {
      return true; // Agar token invalid hai to expired maan lo
    }
  };

  // Check if user is already logged in + token valid hai
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && !isTokenExpired(token) && savedUser) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");   // Purana error clear karo

    try {
      const res = await axios.post("https://zerodha-backend-1-sa4v.onrender.com/login", formData);

      const { token, user } = res.data;

      // Token save karo
      localStorage.setItem("token", token);

      // User data save karo
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        // Fallback user agar backend se user nahi aa raha
        const fallbackUser = {
          id: formData.email.split("@")[0].toUpperCase(),
          name: formData.email.split("@")[0],
          email: formData.email,
        };
        localStorage.setItem("user", JSON.stringify(fallbackUser));
      }

      alert("Login successful!");
      navigate("/home", { replace: true });

    } catch (err) {
      console.error("Login Error:", err);
      const errorMsg = 
        err.response?.data?.message || 
        err.response?.data || 
        "Invalid email or password. Please try again.";
      
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;