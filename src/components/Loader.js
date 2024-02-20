import React from 'react'
import { BeatLoader } from 'react-spinners'

export default function Loader() {
    return (
        <div className="loader">
            <img src="https://citipharma.com.pk/images/logo-img.png" alt="" />
            <BeatLoader color="#15a0c7" />
        </div>
    )
}
