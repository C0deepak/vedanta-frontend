import React, { createContext, useReducer } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { initialState, reducer } from './reducer/UseReducer'
import Footer from './components/Footer'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import Auth from './pages/auth/Auth'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import ScanQr from './pages/ScanQr'

export const UserContext = createContext()
const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/logout' element={<Logout />} />
      {/* <Route path='/scanqr' element={<ScanQr />} /> */}
    </Routes>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Routing />
          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  )
}

export default App