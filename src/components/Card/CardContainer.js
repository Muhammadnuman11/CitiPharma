import React from 'react'
import Card from './Card';
import { useInView } from 'react-intersection-observer';

export default function CardContainer({ cards }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <div ref={ref} className={`cards-container animate__animated ${inView ? 'animate__fadeInRight' : ''}`}>
            {cards.map((card, id) => (
                <Card
                    key={id}
                    title={card.title}
                    job={card.job}
                    content={card.content}
                    imgUrl={card.imgUrl}
                />
            ))}
        </div>
    )
}
