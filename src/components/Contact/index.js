import React from 'react';

import Content from '../Content';
import Hero from '../Hero';

const Contact = ({ data }) =>
    <div className='page'>
        <Hero data={data} />
        <Content>
            <p>Drop me an <a href='mailto:kristian.kjeldsen@kyh.se'>email.</a></p>
        </Content>
    </div>

export default Contact;