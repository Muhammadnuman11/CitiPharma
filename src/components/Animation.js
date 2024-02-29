import React from 'react'
import { useInView } from 'react-intersection-observer';


export default function Animation({ children, name }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <div
            ref={ref}
            className={`animate__animated ${inView ? name : ''}`}
        >
            {children}
        </div>
    )
}