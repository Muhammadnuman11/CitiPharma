import React from 'react'
import BlogCard from './BlogCard';
import { useInView } from 'react-intersection-observer';

export default function BlogCardContainer({ cards }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <div ref={ref} className={`cards-container animate__animated ${inView ? 'animate__fadeInRight' : ''}`}>
            {cards.map((card, id) => (
                <BlogCard
                    key={id}
                    title={card.title}
                    date={new Date(card.createdAt).toLocaleString()}
                    content={card.shortDesc}
                    id={card._id}
                />
            ))}
        </div>
    )
}
