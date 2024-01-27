import { useState } from 'react';
import Rout from './rout.js'
import { BrowserRouter } from 'react-router-dom';
import Nav from './nav.js'

function App() {
  const [userDetail,setUserDetail]=useState()
  const [auth,setAuth]=useState(false)
  return (
    <>
    <BrowserRouter>
      <Nav auth={auth} setAuth={setAuth} userDetail={userDetail}/>
      <Rout setUserDetail={setUserDetail} setAuth={setAuth} auth={auth}/>
    </BrowserRouter>
    </>
  );
}

export default App;
