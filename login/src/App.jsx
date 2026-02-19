import { useState } from 'react'

import './App.css'
import UserProvider from './context/UserContext'
import Login from './Login'
import Profile from './Profile'


function App() {
  return (
    <UserProvider>
      <Login/>
      <Profile/>
    </UserProvider>
  )
}

export default App
