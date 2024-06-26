import {Navbar, Nav} from 'react-bootstrap';
import {PROJECT_NAME} from "../utils/Utils.js"; // Import Bootstrap components

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top" className="topNavBar">
            <Navbar.Brand href="#home">{PROJECT_NAME}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
