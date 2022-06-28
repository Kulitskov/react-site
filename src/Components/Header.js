import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../Pictures/HandWithEye.gif';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import Footer from "./Footer";

class Header extends Component {
    render() {
        return (
            <div>
                {/*fixed="top"*/}
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={logo} height="30" alt="213"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsible-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home </Nav.Link>
                                {/*<Nav.Link href="/about"> About </Nav.Link>*/}
                                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                                <Nav.Link href="/blog"> Blog </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                    </Routes>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default Header;