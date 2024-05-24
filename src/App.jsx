import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Login from './pages/Login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CoinPage from './pages/CoinPage'
import CoinCart from './pages/CoinCart'
import PrivateRoutes from './pages/PrivateRoutes'

const App = () => {
  return (
    <Router>
    <Navbar />
    <Container sx={{padding : "30px 0px"}} >
    <Routes>
      
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/' element={<PrivateRoutes/>}>
      <Route path='/' element={<Home/>} />
      <Route path='coin/:id' element={<CoinPage/>} />
      <Route path='cart' element={<CoinCart/>} />
      </Route>
    </Routes>
    <ToastContainer/>
    </Container>
    </Router>
  )
}

export default App