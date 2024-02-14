import React from 'react'

export default function ClientCard({ link }) {
    return (
        <>
            <div className="client-card">
                <img src={link} className="card-img-top" alt="" />
            </div>
        </>
    )
}
