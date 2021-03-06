import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () =>
    <footer className='mt-5 fixed-bottom k-footer'>
        <Container fluid={true}>
            <Row className='border-top justify-content-between p-3'>
                <Col className='p-0' md={3} sm={12} >
                    <span role='img' aria-label='Copyright'>©️</span> 2020 Kristian Kjeldsen
                </Col>
                <Col className='p-0 d-flex justify-content-end' md={3}>
                    Made with love
                </Col>
            </Row>
        </Container>

    </footer>


export default Footer;