import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = (props) => {
    const count = props.data.length;
    let sum=0;
    props.data.map( each => sum+= each.price);

    const review = () => {
        alert("Reviewing courses.......\n Total item : "+count+" \n Total Price : "+sum);
        window.location.reload();
    } 
    return (
        <div>
            <Navbar sticky="top"  className="header" bg="" expand="lg">
                <Navbar.Brand href="#home" style={{color:'white'}}>Top-Courses</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto text-color">
                        <Nav.Link href="#home" style={{color:'white'}}>Explore</Nav.Link>
                        <Nav.Link href="#link" style={{color:'white'}}>Blog</Nav.Link>
                    </Nav>
                    <Form inline>
                        <div>
                            <FontAwesomeIcon icon={faCartPlus} /> <span>{count}</span><b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${sum}</b>
                        </div>
                        <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button onClick={review} className="btn bg-light text-dark">Review Course</Button>
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;