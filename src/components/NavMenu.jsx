import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default function NavMenu(){

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home/">BetBuddy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/teams/">
                                <Nav.Link>Teams</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/leagueleaders/ppg/">
                                <Nav.Link>Point Leaders</Nav.Link>
                            </LinkContainer>
                            
                            <NavDropdown title="League Leaders" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="leagueleaders/ppg/">Points</NavDropdown.Item>
                                <NavDropdown.Item href="leagueleaders/apg/">Assists</NavDropdown.Item>
                                <NavDropdown.Item href="leagueleaders/rpg/">Rebounds</NavDropdown.Item>
                                <NavDropdown.Item href="leagueleaders/spg/">Steals</NavDropdown.Item>
                                <NavDropdown.Item href="leagueleaders/bpg/">Blocks</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/signin/">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </>
    )
}