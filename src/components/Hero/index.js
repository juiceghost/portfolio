import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = ({ data: { title, subTitle, text } }) =>
    <Jumbotron className='bg-transparent jumbotron-fluid'>
        <Container fluid={true}>
            <Row className='justify-content-center'>
                <Col md={8} sm={12}>
                    {title && <h1 className='display-1 font-weight-bolder'>{title}</h1>}
                    {subTitle && <h3 className='display-4 font-weight-light'>{subTitle}</h3>}
                    {text && <h3 className='lead font-weight-light'>{text}</h3>}
                </Col>
            </Row>
        </Container>
    </Jumbotron>

export default Hero;