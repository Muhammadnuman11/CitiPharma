import React from 'react'
import { BeatLoader } from 'react-spinners'

export default function Loader() {
    return (
        <div className="loader">
            <img src="../images/citi-logo.png" alt="Citi pharma logo" />
            <BeatLoader color="#004b96" />
        </div>
    )
}
