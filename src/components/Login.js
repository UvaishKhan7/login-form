import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    return (
        <>
            <div className="loginOuter" style={styles.loginOuter}>
                <div className="loginForm" style={styles.loginForm}>
                    <div className="title" >
                        <p style={styles.title}>Enter Details to Login</p>
                    </div>
                    <div className="email" >
                        <input style={styles.email} placeholder='Enter Your Username' required name="email" value={user.email} onChange={handleChange} type="email" />
                    </div>
                    <div className="psswd" >
                        <input style={styles.psswd} placeholder='Enter Your Password' required type="password" name="password" value={user.password} onChange={handleChange} />
                    </div>
                    <div className="btn" >
                        <Link to='/profile' className='link'>
                            <button style={styles.btn} className='signin-submit' type='submit' >LOGIN</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;

const styles = {
    loginOuter: {
        display: 'grid',
        margin: '10rem 5rem 0rem 10rem',
        width: 'fit-content',
        padding: '2.5rem',
        borderRadius: '25px',
        backgroundColor: '#1719248c',
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '18px',
        color: 'white',
        fontWeight: '500',
        height: '2.5rem',
        textAlign: 'center',
        margin: '0px'
    },
    email: {
        height: '2.5rem',
        padding: '0px 0.5rem',
        overflow: 'hidden',
        borderRadius: '5px',
        border: 'none',
        margin: '1rem 0rem',
        width: '15rem',
        fontSize: '16px'
    },
    psswd: {
        width: '15rem',
        height: '2.5rem',
        padding: '0px 0.5rem',
        overflow: 'hidden',
        borderRadius: '5px',
        border: 'none',
        margin: '1rem 0rem',
        fontSize: '16px'
    },
    btn: {
        height: '2.5rem',
        borderRadius: '5px',
        border: 'none',
        margin: '1rem 0rem',
        width: '16rem',
        fontWeight: '600',
        fontSize: '18px',
        backgroundColor: '#16beffa1',
        color: 'white',
    }
}