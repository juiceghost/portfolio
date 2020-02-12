import React from 'react';

import CardInfo from '../CardInfo';

const Card = ({ item, click }) =>

    <div className='d-inline-block k-card' onClick={(e) => click(item)}>
        <img className='k-card-img' src={item.imgSrc} alt={item.imgSrc} />
        {item.selected && <CardInfo item={item} />}
    </div>

export default Card;
