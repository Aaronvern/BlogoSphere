
import { useState, useEffect} from 'react'
import {useDispatch } from 'react-redux'
import authService from '../src/appwrite/auth.js'
import {login, logout} from './features/auth/authSlice.js'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  const[loading,setLoading]=useState(true);
  const dispatch = useDispatch()  

  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      })
      .finally(setLoading(false))
  },[])
  
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>

      </div>
    </div>

  ) : (null)

}

export default App
