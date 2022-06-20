import { useState } from 'react'
import globalStyles from './utils/styles/global.styles'
import Login from "./presentation/views/login/login"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './presentation/views/home/home';

function App() {
  globalStyles()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
