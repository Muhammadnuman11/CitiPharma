import React from 'react';

const Card = ({ title, content, imgUrl, alt = 'Image', job }) => (
    <div className="card">
        <img src={imgUrl} alt={alt} />
        <div className="card-content">
            <h2>{title}</h2>
            <p className='fw-bold p-0 m-1'>{job}</p>
            <p className='p-0 m-1'>{content}</p>
        </div>
    </div>
);

export default Card;




