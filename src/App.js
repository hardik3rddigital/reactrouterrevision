import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={App}/>
                <Route path='home' element={<>Home</>}/>
                <Route path='about' element={<>About</>}/>
            </Routes>
        </BrowserRouter>
        
        <h1>Hello I am app components</h1>
    </>
  )
}

export default App