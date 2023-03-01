import React from 'react'
import { useNavigate } from 'react-router-dom'


function Error() {
  const navigate = useNavigate()
  const gotoback = () => {
    navigate('/')
  }
  return (
    <>
        <div className='container mt-4 text-uppercase text-center'>
            <p>Oops ! Page Not Found</p>
            <h1 className='m-0 text-danger' style={{fontSize:'12rem',fontWeight:'Bold'}}>404</h1>
            <h4 style={{fontWeight:'normal'}}>We are sorry, but the page you requested was not found</h4>
            <button className='btn btn-danger btn-lg mt-4' onClick={() => gotoback()}>Go Back</button>
        </div>
    </>
  )
}

export default Error