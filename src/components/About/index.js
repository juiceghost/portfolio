import React from 'react';

import Hero from '../Hero';
import Content from '../Content';

const About = ({ data }) =>
    <div>
        <Hero data={data} />
        <Content>
            <p>Hello, my name is Kristian. I am a full stack engineer with experience in Elixir, Firebase, SQL and React.</p>
            <p>I currently teach a front end class at <a href='https://kyh.se/utbildningar/front-end-developer/' target='_blank' rel="noopener noreferrer">KYH</a> where i help the next generation of front end artists realize their full potential. It is tremendously rewarding work and i take great pride in helping my students with all facets of their development, from personal to professional.</p>
            <p>I record all my lectures on Youtube but you have to enroll in the class to get access.</p>
            <p>When i don't teach i create back ends mainly in Elixir as well as various other fun projects.</p>
            <p>If you are curious about my stuff please check out my <a href='https://github.com/juiceghost' target='_blank' rel="noopener noreferrer">Github</a></p>
        </Content>
    </div>

export default About;