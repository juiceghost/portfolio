import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../App.css';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Footer from '../Footer';

import * as ROUTES from '../../constants/routes';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Kristian Kjeldsen',
            headerLinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' }
            ]
            ,
            home: {
                title: 'Evolve together',
                subTitle: 'Projects that matter.',
                text: 'Check them out below'
            },
            about: {
                title: 'About me',


            },
            contact: {
                title: 'Let\'s talk',


            }
        };
    }

    render() {
        const { home, about, contact } = this.state;

        return (
            <Router>
                <Container className='p-0' fluid={true} >
                    <Navbar className='border-bottom k-nav' bs='transparent' expand='lg'>

                        <Navbar.Brand >Kristian Kjeldsen</Navbar.Brand>
                        <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
                        <Navbar.Collapse if='navbar-toggle'>
                            <Nav className='ml-auto'>
                                <Link className='nav-link' to={ROUTES.HOME}>Home</Link>
                                <Link className='nav-link' to={ROUTES.ABOUT}>About</Link>
                                <Link className='nav-link' to={ROUTES.CONTACT}>Contact</Link>


                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={450} classNames='fade'>
                                <Switch location={location}>
                                    <Route path='/about'>
                                        <About data={about} />
                                    </Route>
                                    <Route path='/contact'>
                                        <Contact data={contact} />
                                    </Route>
                                    <Route path='/'>
                                        <Home data={home} />
                                    </Route>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                    <Footer />
                </Container>
            </Router>);
    }
}


export default App;
