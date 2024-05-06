import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={LoginPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
