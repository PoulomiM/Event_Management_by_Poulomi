import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; 

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
    });
    const [error, setError] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // form validation
            if (formData.email.trim() === '') {
                setError('Please enter an email address.');
                return;
            }
          setConfirmationMessage('Account created successfully!');
        } catch (error) {
            setError(error.message); // error message if sign-up fails
        }
    };

    return (
        <div className="signup-container">
            <div className="imageLogIn">
        <img src="./Assests/yoga.jpg" alt="Background" className="background-img" />
      </div>
            <div className="signup-content">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
                    </div>
                    <button type="submit">Continue</button>
                    {error && <p className="error-message">{error}</p>}
                    {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
                <p className="or">OR</p>
                <div className="social-login">
                    <button>Continue with Google</button>
                    <button>Continue with Apple</button>
                    <button>Continue with Facebook</button>
                </div>
                <p>By clicking Continue with Google, Apple or Facebook, you agree to Eventbrite's <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.</p>
            </div>
        </div>
    );
};

export default Signup;

