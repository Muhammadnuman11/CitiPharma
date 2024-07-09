import React from 'react'
import { useInView } from 'react-intersection-observer';
import NumberCounter from './NumberCounter';


export default function NumberBoxs({ icon, title, countNumber}) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <>
            <div ref={ref} className={`numberBox animate__animated ${inView ? 'animate__fadeInRight' : ''}`}>
                <div className="icon">
                    <img src={icon} alt={title} />
                </div>
                <div className="dataBox-number">
                    <NumberCounter initialNumber={0} targetNumber={countNumber} /> +
                </div>
                <div className="dataBox-body">
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}
