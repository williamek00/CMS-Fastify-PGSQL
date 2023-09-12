import React from 'react'
export default function User() {

    return (
        <div className='container-login' >
            <div className="login-box">
                <h1>LOGIN</h1>
                <form id='login-form' className='login-input'>
                    <p className='title-input' >Username</p>
                    <input type="text" className='spaces' />
                    <p className='title-input' >Password</p>
                    <input type="password" className='spaces' />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}
