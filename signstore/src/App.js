import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './context/PrivetRoute.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route exact path='/' element={<Home/>}/>
         
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
