import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile.js'
import Home from './components/Home';
import Signup from './components/Signup';

const PrivateRoute = ({ user, children }) => {
  if (!user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  const [user, setUser] = useState("");

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={!user ? (<Home user={user} setUser={setUser} />) : (<Navigate to='/login' />)}/>
        <Route path='/profile' element={
          <PrivateRoute user={user}>
            <Profile user={user} />
          </PrivateRoute>} />
        <Route path='/login' element={!user ? (<Login user={user} setUser={setUser} />) : (<Navigate to="/" />)} />
        <Route path='/signup' element={!user ? (<Signup user={user} setUser={setUser} />) : (<Navigate to="/login" />)} />
      </Routes>
    </div>
  )
}

export default App;
