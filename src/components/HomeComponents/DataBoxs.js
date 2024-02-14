import React from 'react'
import NumberCounter from './NumberCounter'

export default function DataBoxs({ icon, title, number, countNumber, suffix }) {
    return (
        <>
            <div className="dataBox">
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
