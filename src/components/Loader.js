import React from 'react'
import { BeatLoader } from 'react-spinners'

export default function Loader() {
    return (
        <div className="loader">
            <img src="../images/logo.png" alt="" />
            <BeatLoader color="#15a0c7" />
        </div>
    )
}
