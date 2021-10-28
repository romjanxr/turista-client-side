import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    const { displayName, photoURL, email } = user;

    return (
        <div>
            <Navbar style={{ backgroundColor: '#262626' }} expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} className="text-white" to="/home">
                        <img width="110px" src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home" className="text-white">
                                Home
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/about" className="text-white">
                                About
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/contact" className="text-white">
                                Contact
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/courses" className="text-white">
                                Courses
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/home#feature" className="text-white">
                                Feature Courses
                            </Nav.Link>

                            {!displayName ? (
                                <>
                                    <Nav.Link className="text-white" as={NavLink} to="/login">
                                        Log in
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link
                                        as={NavLink}
                                        to="/dashboard"
                                        className="text-white"
                                    >
                                        Dashboard
                                    </Nav.Link>

                                    <NavDropdown
                                        menuVariant='dark'
                                        title={
                                            <img
                                                style={{
                                                    width: "40px",
                                                    borderRadius: "50%",
                                                }}
                                                src={photoURL}
                                                alt=""
                                            />
                                        }
                                    >
                                        <div className="text-center p-2">
                                            <h6>{displayName}</h6>
                                            <p className="m-0 mb-2">{email}</p>
                                            <button onClick={logOut} className="btn logout-btn">
                                                Sign Out
                                            </button>
                                        </div>
                                    </NavDropdown>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;