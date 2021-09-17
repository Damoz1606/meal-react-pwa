import React from 'react'
import './WifiIndicator.css'

function WifiIndicator() {

    return (
        <div className="indicator bottom-right background-is-secondary ">
            <p className="is-flex is-justify-content-center is-align-content-center"><i className="material-icons-outlined mr-1 sparking">wifi_off</i>No Internet Connection</p>
        </div>
    )
}

export default WifiIndicator
