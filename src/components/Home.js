import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Home() {
    return (
        <>
            <h1 style={styles.heading}>Welcome to the Secured Server!</h1>
            <div style={styles.homeCont}>
                <div style={styles.title}>
                    <p>Are you a registered User ?</p>
                </div>
                <div style={styles.btnCont}>
                    <Link to='/login'>
                        <button className='btnYes' type="submit" style={styles.btnYes}>Yes!</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='btnNo' type="submit" style={styles.btnNo}>No!</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;

const styles = {
    heading: {
        color: 'white',
        textShadow: '10px 5px 5px black'
    },
    homeCont: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: 'fit-content',
        margin: '6rem auto',
        backgroundColor: '#161616a3',
        color: 'white',
        padding: '2rem',
        alignItems: 'center',
        fontWeight: '900',
        fontSize: 'larger',
        borderRadius: '1rem'
    },
    btnCont: {
        display: 'flex',
        height: '2.5rem',
        width: '100%',
        margin: '1rem',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    btnYes: {border: 'none',
        borderRadius: '0.25rem',
        width: '5rem',
        height: '100%',
        fontSize: '18px',
        fontWeight: '600',
        color: 'white',
    },
    btnNo: {
        width: '5rem',
        height: '100%',
        border: 'none',
        borderRadius: '0.25rem',
        fontSize: '18px',
        fontWeight: '600',
        color: 'white',
    },
    title: {
        margin: '1rem'
    }
}