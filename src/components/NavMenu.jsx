import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default function NavMenu(){

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">[Name]</Navbar.Brand>
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
                                <LinkContainer to="/players/sort/ppg/">
                                    <NavDropdown.Item>Points</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/players/sort/apg/">
                                    <NavDropdown.Item >Assists</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/players/sort/rpg/">
                                    <NavDropdown.Item>Rebounds</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/players/sort/spg/">
                                    <NavDropdown.Item>Steals</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="players/sort/bpg">
                                    <NavDropdown.Item>Blocks</NavDropdown.Item>
                                </LinkContainer> 
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