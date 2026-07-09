import { Navbar, Nav, Container } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#hero">
                    <strong>Khalifa Nikzad</strong>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#tech-stack">Tech Stack</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#featured-project">Featured Project</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;