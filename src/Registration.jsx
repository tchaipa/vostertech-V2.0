import { Button } from "react-bootstrap";
import "./Registration.css";

function Registration() {
  return (
    <div className="registration-section">
      <h4>Ready to start your business journey ?</h4>
      <span>
        Get your company registered today - fast , affordable and fully
        compliant
      </span>
      <Button className="registration-button" href="sign-up" onclick="go('sign-up')" >Start Registration</Button>
    </div>
  );
}

export default Registration;
