import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <h1>Log In Page</h1>
      <div className="input-box">
        <input type="text" required />
        <label>Username</label>
      </div>
    </div>
  );
}

export default LoginPage;
