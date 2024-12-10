import React from 'react';
import './App.css';
import RouterApp from './Components/RouterApp';
import Container from 'react-bootstrap/Container';
import NavBar from './Components/Nav';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
      <NavBar />
      <Container fluid as="div" className="mt-4 m-auto landing">
        <RouterApp />
      </Container>
      <Footer/>
    </>
  );
}
