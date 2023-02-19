import React, { useEffect }from 'react'
import {auth} from '../firebase/firebase'


const Home = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        const token = user && (await user.getIdToken());
        console.log("token",token)
         console.log(user)


        const payloadHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization:token,
          },
        };
        const res = await fetch("http://localhost:3001", payloadHeader);
        await res.text();
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
}, []);
  return (
    <div className='home'>
      <h1>Home page</h1>
      <h3>welcome user</h3>
    </div>
  )
}

export default Home
