import React from 'react';
import { useSpring, animated } from 'react-spring';

const CardInfo = ({ item: { title, subTitle, link } }) => {
    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div className='k-card-info' style={style}>
            <p className='k-card-title'>{title}</p>
            <p className='k-card-subtitle'>{subTitle}</p>
            <a href={link} target='_blank' rel='noopener noreferrer'>{link}</a>
        </animated.div>
    );
}

export default CardInfo;
