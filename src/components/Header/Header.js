import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    const { displayName, photoURL, email } = user;

    return (
        <div>
            <Navbar style={{ backgroundColor: '#343A40' }} expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} className="text-white" to="/home">
                        <img width="100px" src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><FontAwesomeIcon className="text-white" icon={faBars} /></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home" className="text-white">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/tour-packages" className="text-white">
                                Our Packages
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/about" className="text-white">
                                About
                            </Nav.Link>

                            <Nav.Link as={NavLink} to="/contact" className="text-white">
                                Contact
                            </Nav.Link>

                            {!displayName ? (
                                <>
                                    <Nav.Link className="text-white" as={NavLink} to="/login">
                                        Log in
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <NavDropdown
                                        menuVariant='dark'
                                        align="end"
                                        title={
                                            <span className="text-white">Dashboard</span>
                                        }
                                    >
                                        <NavDropdown.Item
                                            as={NavLink}
                                            to="/my-orders"
                                        >
                                            My Orders
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            as={NavLink}
                                            to="/manage-all-orders"
                                        >
                                            Manage All Orders
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            as={NavLink}
                                            to="/add-package"
                                        >
                                            Add Tour Package
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown
                                        menuVariant='dark'
                                        align="end"
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
                                        <div className="text-center py-4 px-3">
                                            <h6>{displayName}</h6>
                                            <p className="my-2">{email}</p>
                                            <button onClick={logOut} className="btn-regular">
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