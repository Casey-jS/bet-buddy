import { useContext } from 'react'
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import UserContext from '../UserContext'

export default function NavMenu(){
    const { user, setUser } = useContext(UserContext);
    console.log(user);

    const logOut = () => {
        setUser("");
    }
    

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">[Site Name TBD]</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/teams/">
                                <Nav.Link>Teams</Nav.Link>
                            </LinkContainer>
                            { user === "" ? "" : <LinkContainer to={"/favplayers/" + user + "/"}>
                                                    <Nav.Link>Favorite Players</Nav.Link>
                                                </LinkContainer>
                            }
                            

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
                            {user !== "" ?  <Nav.Link onClick={logOut}>Sign Out</Nav.Link> : <div></div>}
                            {user === "" ? <Nav.Link href="/signin/">Sign In</Nav.Link> : <div></div>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </>
    )
}