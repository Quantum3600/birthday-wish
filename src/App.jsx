import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BirthdayCard from './Components/1stCard.jsx'
import Envelope from './Components/2ndCard.jsx'
import './App.css'
import LastPage from "./Pages/LastPage.jsx";

function App() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={
                  <div
                      className={`App ${isAnimationComplete ? 'overflow-auto' : 'overflow-hidden'}`}
                      style={{
                          height: isAnimationComplete ? 'auto' : '100vh',
                          transition: 'height 0.3s ease-in-out'
                      }}
                  >
                      <BirthdayCard onAnimationComplete={() => setIsAnimationComplete(true)} />
                      <Envelope />
                  </div>
              } />
              <Route path="/last-page" element={
                  <LastPage/>
              } />
          </Routes>
      </BrowserRouter>

  )
}

export default App
