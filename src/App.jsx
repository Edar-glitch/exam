import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import API from './api'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Header from './pages/Header'
import Servise from './pages/Servise'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore()


function App() {


  return (
    <>
      {/* <Provider store={store}> */}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servise" element={<Servise />} />
        </Routes>
      {/* </Provider> */}
    </>

  )
}

export default App
