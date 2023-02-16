import React, { useState } from 'react'

const initialState = {email: '',password: '',confirmPassword: ''}

const SignUp = () => {

    const[input, setInput]=useState(initialState)

    const handleChange = (e) =>{setInput(e.target.value)}

    const handleSubmit = () =>{}
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
      </form>
    </div>
  )
}

export default SignUp
