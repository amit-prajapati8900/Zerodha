import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "https://zerodha-backend-1-sa4v.onrender.com/login", formData
      );

      setMessage(res.data.message || "Login successful! 🎉");

      // Success hone ke baad Dashboard pe redirect
      setTimeout(() => {
        navigate("/home");
      }, 1200);

    } catch (err) {
      if (err.response?.data?.message) {
        setMessage(err.response.data.message);
      } else if (err.response?.data) {
        setMessage(err.response.data);
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome Back</h2>
        <p style={styles.subheading}>Sign in to continue</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="you@example.com"
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>

          <button 
            type="submit" 
            style={styles.button}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {message && (
          <p style={{
            ...styles.message,
            color: message.toLowerCase().includes("successful") || 
                   message.includes("🎉") ? "#10b981" : "#ef4444"
          }}>
            {message}
          </p>
        )}

        <p style={styles.footerText}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

// Same styles as SignupForm (copy-paste)
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "white",
    padding: "40px 30px",
    borderRadius: "16px",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "420px",
  },
  heading: {
    margin: "0 0 8px 0",
    color: "#1f2937",
    fontSize: "28px",
    textAlign: "center",
    fontWeight: "700",
  },
  subheading: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "30px",
    fontSize: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    fontWeight: "600",
    color: "#374151",
    fontSize: "14px",
  },
  input: {
    padding: "14px 16px",
    border: "2px solid #e5e7eb",
    borderRadius: "10px",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.3s ease",
  },
  button: {
    marginTop: "10px",
    padding: "14px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  message: {
    marginTop: "15px",
    textAlign: "center",
    fontWeight: "500",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#f3f4f6",
  },
  footerText: {
    textAlign: "center",
    marginTop: "20px",
    color: "#6b7280",
    fontSize: "14px",
  },
  link: {
    color: "#667eea",
    fontWeight: "600",
    textDecoration: "none",
  },
};

export default LoginForm;