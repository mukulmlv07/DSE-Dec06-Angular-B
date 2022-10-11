import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Products() {
  return (
    <>
      <nav>
        <Link to='featuredProducts'>Featured Products</Link>
        <Link to='newProducts'>new Products</Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default Products