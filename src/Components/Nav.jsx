import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';  // Import useNavigate
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import '../index.css';
import cloud from '../images/Cloud.png';

export default function NavBar() {
  const navigate = useNavigate();  // Create a navigate function

  // Function to navigate to home when the logo is clicked
  const handleLogoClick = () => {
    navigate('/');  // Navigate to the home page
  };

  return (
    <>
      <Nav as="h4" className="mt-0 pt-5" variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/dashboard">
            Dashboard
          </Nav.Link>
        </Nav.Item>

        {/* Add the onClick handler to the logo image */}
        <img 
          className="cloud" 
          src={cloud} 
          alt="sun and cloud icon" 
          onClick={handleLogoClick}  // Trigger navigation to home on click
        />
      </Nav>
    </>
  );
}
