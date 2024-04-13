import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 hook for authentication
import './Login.css'; // Import CSS for styling

const Login = () => {
  // Define state variables for form data and error
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Define handleChange function to update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Define handleSubmit function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add login logic here
    try {
      // Perform form validation and login process
    } catch (error) {
      setError(error.message); // Set error message if login fails
    }
  };

  // Get all the necessary methods from the useAuth0 Hook 
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="login-container">
      <div className="imageLogIn">
        <img src="./Assests/yoga.jpg" alt="Background" className="background-img" />
      </div>
      <div className="login-content">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit">Continue</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        <p className="or">OR</p>
        <div className="social-login">
          <button onClick={() => loginWithRedirect()} className="google-btn">Continue with Google</button> {/* Use loginWithRedirect function */}
          <button className="google-btn">Continue with Apple</button>
          <button className="google-btn">Continue with Facebook</button>
        </div>
        <p>By clicking Continue with Google, Apple, or Facebook, you agree to Eventbrite's <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.</p>
        <button className="one-time-password">Send a one-time password</button>
      </div>
    </div>
  );
};

export default Login;





