import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
    rePassword: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  return (
    <>
      <div className="wrapper">
        <div className="form">
          <div className='inner'>
            <h2 style={styles.heading}>It's time to sign up!!!</h2>
          </div>
          <form style={styles.form} action="submit">
            <h2>Please fill below to register yourself.</h2>
            <div className="username" style={styles.inputCont}>
              <label htmlFor="username" style={styles.label}>User name <span style={{ color: 'red' }}>*</span></label>
              <input type="text" name="username" value={user.username} placeholder='e.g. John Doe' required style={styles.input} onChange={handleChange} />
            </div>
            <div className="email" style={styles.inputCont}>
              <label htmlFor="email" style={styles.label}>Email ID <span style={{ color: 'red' }}>*</span></label>
              <input type="email" name="email" value={user.email} placeholder='e.g. john@abc.com' required style={styles.input} onChange={handleChange} />
            </div>
            <div className="phone" style={styles.inputCont}>
              <label htmlFor="phone" style={styles.label}>Enter Mobile Number <span style={{ color: 'red' }}>*</span></label>
              <input type="number" name="mobile" value={user.mobile} placeholder='e.g. 1234567890' required style={styles.input} onChange={handleChange} maxLength={14} />
            </div>
            <div className="password" style={styles.inputCont}>
              <label htmlFor="password" style={styles.label}>Enter Password <span style={{ color: 'red' }}>*</span></label>
              <input type="password" name="password" value={user.password} placeholder='Minumum 6 characters' required minLength={6} style={styles.input} onChange={handleChange} />
            </div>
            <div className="rePassword" style={styles.inputCont}>
              <label htmlFor="rePassword" style={styles.label}>Re-enter Password <span style={{ color: 'red' }}>*</span></label>
              <input type="Password" name="rePassword" value={user.rePassword} placeholder='Same as password' required minLength={6} style={styles.input} onChange={handleChange} />
            </div>
            <Link to="/">
              <button style={styles.btn}>Sign up</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;

const styles = {
  heading: {
    color: 'white',
    textShadow: '10px 5px 5px black',
    backgroundColor: '#09135c7a',
    margin: '1.5rem auto',
    padding: '1rem 5rem',
    width: '400px',
    borderRadius: '2rem'
  },
  form: {
    backgroundColor: '#09135c7a',
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    margin: '2rem auto',
    padding: '2rem',
    color: 'white',
    borderRadius: '2rem'
  },
  inputCont: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: '600'
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    marginBottom: '1rem',
    border: 'none',
    borderRadius: '0.5rem'
  },
  btn: {
    height: '2.25rem',
    margin: '0.8rem 0rem',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1.5rem',
    backgroundColor: '#4ae6ffb8'
  }
}