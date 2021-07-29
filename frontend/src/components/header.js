import React from 'react'
import { Container,Row,Col,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function header() {
    return (
        <div>

            <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to='/'><Navbar.Brand >technical project</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                   <LinkContainer to='/add'><Nav.Link>Book</Nav.Link></LinkContainer> 
                   <LinkContainer to='/return'><Nav.Link>Return</Nav.Link></LinkContainer> 
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </div>
    )
}

export default header
