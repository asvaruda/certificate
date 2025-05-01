import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <div>
        <div className='flex'>
            <div>
            <Link to="/" className='txt-nav'>Certificate</Link>
            </div>
            <div>
            <Link to="/hallticket" className='txt-nav'>HallTicket</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navigation