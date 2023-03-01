import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
        
        <h1>Hello I am app components</h1>
    </>
  )
}

export default App