//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import PlayersList from './components/Profile/Players/PlayersList';
  import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
 function App() {
  return (
    <React.Fragment>
    
  <Navbar bg="primary" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
</Navbar>
 <br/>
<PlayersList/>
</React.Fragment>
  );
}

export default App;
