import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import NameForm from './Components/Form/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Form">Form</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/Form" element={<NameForm/>}>Form</Route>
      <Route path="/About" element={<About/>}>About</Route>
    </Routes>
    </BrowserRouter>
    <div>
    </div>
    </>
  );
}

export default App;