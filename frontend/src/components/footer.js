import React from 'react'
import { Container,Row,Col, Navbar } from 'react-bootstrap';
import '../App.css';

function footer() {
    return (
        <div>
           

            <footer>
               
                <div className='footer'>
                
                <Container>
                    <Row>
                        <Col className='text-center py-3'>
                        Copyright &copy;<a href="http://mehedi555552.pythonanywhere.com/"> Mehedi Hasan </a>
                        </Col>
                    </Row>
                </Container>
              
                </div>
              
               
            </footer>
            
        </div>
    )
}

export default footer
