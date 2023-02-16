import React, { useContext } from 'react'
import { AuthContext } from './Auth.js'
import {Route,Navigate} from 'react-router-dom'
const PrivateRoute=({component:RouteComponent, ...rest})=>{
const {user}=useContext(AuthContext)
return (
    <Route {...rest}  render ={(routeProps)=>!user ? <Navigate to ={"/login"} /> : <RouteComponent {...routeProps}/>}/>
)
}
export default PrivateRoute;









