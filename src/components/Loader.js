import React from 'react'
import { BeatLoader } from 'react-spinners'

export default function Loader() {
    return (
        <div className="loader">
            <img src="../images/logo.png" alt="" />
            <BeatLoader color="#004b96" />
        </div>
    )
}
