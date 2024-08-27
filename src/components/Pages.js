import React from 'react'

export default function Pages({title, link, alt}) {
    return (
        <>
            <div className="pages">
                <img src={link} alt={!alt? title : alt} />
                <div className="pages-detail">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}
