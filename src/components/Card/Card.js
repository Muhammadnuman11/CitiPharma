import React from 'react';

const Card = ({ title, content, imgUrl, alt = 'Image' }) => (
    <div className="card">
        <img src={imgUrl} alt={alt} />
        <div className="card-content">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </div>
);

export default Card;



