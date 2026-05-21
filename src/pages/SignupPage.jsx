import "./SignupPage.css";
import Header from "../Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://localhost:5000/api/v1/auth/signup";   

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(API_URL, { firstName, lastName, companyName, email, password, confirmPassword });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Invalid first name, last name, company name, company registration number, company email or password");
      navigate("/sign-up");
      toast.error(error.response.data.message);
    } 
    finally {
      setIsLoading(false);
    }
  };

        const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const navigate = useNavigate();
  return (
    <div className="signup-section">
      <Header />
      <section class="section bg-gray">
        <div class="section-inner">
          <div class="signup-form">
            <h2 class="section-title">Sign Up</h2>
            <form onSubmit={handleSubmit}   > 
              <div class="form-group">  <label>Company Name</label>
                <input type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
              </div>
              <div class="form-group">  <label>Email</label>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
              </div>
              <div class="form-group">  <label>Password</label>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              </div>
              <div class="form-group">  <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
              </div>
              <button type="submit" className="btn-primary" disabled={isLoading} onClick={handleSubmit}             >{isLoading ? "Loading..." : "Sign Up"}           
                </button>
              <p>Already have an account? <a href="/log-in">Log in</a></p>
              <p>Forgot your password? <a href="/forgot-password">Forgot password</a></p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupPage;
