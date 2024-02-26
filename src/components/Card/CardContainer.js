import React from 'react';
import Card from './Card';

const CardContainer = ({ cards }) => (
    <div className="cards-container">
        {cards.map((card) => (
            <Card
                key={card.id}
                title={card.title}
                job={card.job}
                content={card.content}
                imgUrl={card.imgUrl}
            />
        ))}
    </div>
);

export default CardContainer;