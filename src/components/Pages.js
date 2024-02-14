import React from 'react'

export default function Pages({title}) {
    return (
        <>
            <div className="pages">
                <img src="images/page.jpg" alt="" />
                <div className="pages-detail">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}
