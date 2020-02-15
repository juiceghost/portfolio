import React from 'react';
import { useSpring, animated } from 'react-spring';
import githubSmall from '../../assets/images/github32.png';
//import githubLarge from '../../assets/images/github64.png';


const CardInfo = ({ item: { title, subTitle, srcLink, liveDemo } }) => {
    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div className='k-card-info' style={style}>
            <p className='k-card-title'>{title}</p>
            <p className='k-card-subtitle'>{subTitle}</p>
            <a className='k-card-github' href={srcLink} target='_blank' rel='noopener noreferrer'>{<img alt='github' src={githubSmall} />}</a>
            {liveDemo && <a className='k-card-livedemo' href={liveDemo} target='_blank' rel='noopener noreferrer'>Live demo</a>}
        </animated.div>
    );
}

export default CardInfo;
