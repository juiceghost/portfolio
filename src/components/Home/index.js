import React from 'react';

import Hero from '../Hero';
import Carousel from '../Carousel';

const Home = ({ data }) =>
    <div>
        <Hero data={data}>Home works!</Hero>
        <Carousel />
    </div>

export default Home;