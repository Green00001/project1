
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

import  {signInWithEmailAndPassword}  from 'firebase/auth'
const initialState = {email: '',password: ''}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjyVXnCIuYSFRK_aH6_PcHEh4z4MBzhZU",
  authDomain: "app1-f6315.firebaseapp.com",
  projectId: "app1-f6315",
  storageBucket: "app1-f6315.appspot.com",
  messagingSenderId: "775139999487",
  appId: "1:775139999487:web:d5a631f727d33382ded6ca",
  measurementId: "G-1L7GTMD6EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const Login = () => {
    const navigate=useNavigate()
    const[input, setInput]=useState(initialState)
    const[error, setError]=useState('')

    const handleChange = ({target}) =>{setInput({
      ...input,[target.name]:target.value})}
    const handleSubmit = (e) =>{
      e.preventDefault();

      signInWithEmailAndPassword(auth,input.email, input.password)
  .then((userCred) => {
    setInput(initialState)
    navigate("/")
        console.log(userCred);
        
  })
  .catch((error) => {
    setError(error.message)
  });
    
    }

  return (
    <div className='login'>
      <h1>login page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>email</label>
        <input 
        type="text"
        value={input.email}
        autoComplete="off"
        onChange={handleChange}
        name="email"/>

        <label htmlFor='password'>Password</label>
        <input
        type="password"
        value={input.password}
        autoComplete="off"
        onChange={handleChange}
        name="password"/>
       <button type='submit'>Submit</button>
       
        <p className='form__error'>{error}</p>
        <p>Not a user ? <Link to="/signup"> SignUp </Link></p>

      </form>
    </div>
  )
}

export default Login
