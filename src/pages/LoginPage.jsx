import "./LoginPage.css";
import Header from "../Header";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:5000/api/v1/auth/login";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(API_URL, { email, password });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password");
      navigate("/log-in");
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className="login-section">
      <Header className="login-header"> ouhuihiuh</Header>
     
      <section class="section bg-gray">
        <div class="section-inner">
          <div class="login-form">
            <h2 class="section-title">Login</h2>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                disabled={isLoading}
                onClick={handleSubmit}
                href="documents"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
              <p>
                Don't have an account? <a href="/sign-up">Sign up</a>
              </p>
              <p>
                Forgot your password?{" "}
                <a href="/forgot-password">Forgot password</a>
              </p>
            </form>
          </div>
        </div>
      </section> 
      
    </div>
  );
}

export default LoginPage;
