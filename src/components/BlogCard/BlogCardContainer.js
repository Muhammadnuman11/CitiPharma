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
                    date={card.date}
                    linkedinLink={card.linkedinLink}
                    content={card.shortDesc}
                    URL={card.URL}
                    metaTitle={card.metaTitle}
                    keywords={card.keywords}
                    id={card.id}
                />
            ))}
        </div>
    )
}
