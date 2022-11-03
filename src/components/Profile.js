import React from 'react';
import { Link } from 'react-router-dom';

function Profile(props) {
    return (
        <>
            <div className="profile" style={styles.profile}>
                <p style={styles.title}>
                    Hey ! <strong>{props.user}</strong>
                    <br />
                    Welcome to your profile.
                </p>
                <div className="form" style={styles.form}>
                    <div className="userName" style={styles.formInput}>
                        <label htmlFor="userName" style={styles.label}>Enter Your Full Name</label>
                        <input type="text" name="name" id="name" placeholder='Ex. John Doe' style={styles.input} />
                    </div>
                    <div className="dob" style={styles.formInput}>
                        <label htmlFor="dob" style={styles.label}>Select Your Date of Birth</label>
                        <input type="date" name="dob" id="dob" placeholder='Select Your Date of Birth' style={styles.input} />
                    </div>
                    <div className="gender">
                        <span className="male" style={styles.label}> Select Your Gender
                        <br/>
                            <input type="checkbox" name="male" id="male" />
                            <label htmlFor="male" style={styles.gender}>Male</label>
                        </span>
                        <span className="female" >
                            <input type="checkbox" name="female" id="female" />
                            <label htmlFor="female" style={styles.gender}>Female</label>
                        </span>
                    </div>
                </div>
                <Link to="/" style={styles.link}>
                    <p style={styles.linkText}>Click here to go home...</p>
                </Link>
            </div>
        </>
    )
}

export default Profile;

const styles = {
    profile: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5rem auto',
        padding: '2.5rem',
        borderRadius: '25px',
        backgroundColor: '#1719219c',
        width: 'fit-content'
    },
    title: {
        textAlign: 'center',
        margin: '0px'
    },
    link: {
        textDecoration: 'none',
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#00fff378',
        padding: '0rem 1rem',
        borderRadius: '2rem',
        marginTop: '1rem'
    },
    form: {
        width: '100%',
    },
    formInput: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '1rem 0rem'
    },
    label: {
        margin: '0.3rem 0rem'
    },
    input: {
        height: '2rem',
        borderRadius: '0.5rem',
        padding: '0.25rem',
        fontSize: '16px',
        border: 'none'
    },
    gender: {
        margin: '0rem 3rem 0rem 0.5rem'
    }
}
