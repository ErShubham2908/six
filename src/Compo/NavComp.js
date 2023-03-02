import React from 'react'
import { Link } from 'react-router-dom';

function NavComp() {
  return (
    <>
        <Link to='/' >Home</Link>
        <Link to='/student' >Student</Link>
        <Link to='/contact' >Contact</Link>
    </>
  )
}

export default NavComp;