import React, { useEffect, useState } from 'react'
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { useNavigate,Link, Navigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjyVXnCIuYSFRK_aH6_PcHEh4z4MBzhZU",
  authDomain: "app1-f6315.firebaseapp.com",
  projectId: "app1-f6315",
  storageBucket: "app1-f6315.appspot.com",
  messagingSenderId: "775139999487",
  appId: "1:775139999487:web:d5a631f727d33382ded6ca",
  measurementId: "G-1L7GTMD6EN"
};

const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

const initialState = {email:'',password:'',confirmPassword:''}


const SignUp = () => {
  const navigate=useNavigate()
    const [error,setError]=useState("")
    const[input, setInput]=useState(initialState)
    
    const handleChange = ({target}) =>{setInput(
      
      {...input,[target.name]:target.value});
      setError("")
    }

    const handleSubmit =(e) =>{
      e.preventDefault();
      const db = getFirestore(app);
      const dbRef = collection(db, "users");
      const data = {
      email:input.email,
      password:input.password
     };

     addDoc(dbRef, data)
.then(() => {
    console.log("Document has been added successfully")
})
.catch(error => {
    console.log(error);
})
      if(input.password!=input.confirmPassword)
      {setError('password not match')}

    else{ 
      const {user }
      =createUserWithEmailAndPassword(auth,input.email, input.password)
     .then((res)=>{ 
      console.log(res)
      setInput(initialState)
      alert("sign up succefully")})
      .catch ((error)=>{
        console.log(error)
        setError(error.message)
      })
    }
      }
  return (
    <div className='signup'>
        <h1>signup page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
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

        <label htmlFor='confirmPassword'> confirm Password</label>
        <input
            type="confirmPassword"
            value={input.confirmPassword}
            autoComplete="off"
            onChange={handleChange}
            name="confirmPassword"/>
       <button type='submit'>Submit</button>
       <p className='form__error'>{error}</p>
<p>
  Already a user ? <Link to ="/Login">Log in </Link>
</p>
      </form>
    </div>
  )
}

export default SignUp
