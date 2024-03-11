import React from 'react'

export default function Pages({title, link}) {
    return (
        <>
            <div className="pages">
                {/* <img src={link} alt="" /> */}
                <div className="pages-detail">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}
