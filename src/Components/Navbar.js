import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link style={{textDecorationLine:'none'}} to='/'>
      <h1>Buy Nothing</h1>
      </Link>
      <Link style={{textDecorationLine:'none', marginRight:"30px"}} to='/items/new'>
      <h1>Add New Item</h1>
      </Link>
      
    </nav>
  )
}

export default Navbar