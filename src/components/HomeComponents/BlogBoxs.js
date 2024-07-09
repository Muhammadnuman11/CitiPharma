import React from 'react'
import { useInView } from 'react-intersection-observer';


export default function BlogBoxs({ icon, title}) {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <>
            <div ref={ref} className={`dataBox animate__animated ${inView ? 'animate__fadeInRight' : ''}`}>
                <div className="icon">
                    <img src={icon} alt={title} />
                </div>
                <div className="dataBox-body">
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}
