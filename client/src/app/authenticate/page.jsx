import React from 'react'

export default function Authenticate() {
    return (
        <div className='container-auth' >
            <h1 className='title-barcode' >Please scan the Barcode below!</h1>
            <div className="login-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" />
            </div>
        </div>
    )
}
