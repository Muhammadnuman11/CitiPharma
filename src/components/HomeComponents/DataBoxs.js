import React from 'react'
import NumberCounter from './NumberCounter'
import { useInView } from 'react-intersection-observer';


export default function DataBoxs({ icon, title, number, countNumber, suffix }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <>
            <div ref={ref} className={`dataBox animate__animated ${inView ? 'animate__fadeInRight' : ''}`}>
                <div className="icon">
                    <img src={icon} alt="" />
                </div>
                <div className="dataBox-body">
                    <h1>{number}
                        <NumberCounter initialNumber={0} targetNumber={countNumber} />
                        <span>{suffix}</span>
                    </h1>
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}
