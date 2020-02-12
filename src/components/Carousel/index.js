import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import portfolio from '../../assets/images/placeholder.jpg';
import mp from '../../assets/images/placeholder.jpg';
import fbauth from '../../assets/images/placeholder.jpg';

import Card from '../Card';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Portfolio',
                    subTitle: 'My personal home page',
                    imgSrc: portfolio,
                    link: 'https://portfolio.kjeld.io',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Morphed Profit',
                    subTitle: 'Console-based programming editor',
                    imgSrc: mp,
                    link: 'https://mp.kjeld.io',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Firebase Auth',
                    subTitle: 'Demo of Firebase',
                    imgSrc: fbauth,
                    link: 'https://fbauth.kjeld.io',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = !items[id].selected;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => (
            <Card key={item.id} item={item} click={(e) => this.handleCardClick(item.id, e)} />
        ))
    }

    render() {
        return (
            <Container fluid={true} >
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>)
    }
}

export default Carousel;