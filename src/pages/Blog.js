import React from 'react'
import {Link, Outlet} from "react-router-dom"
const Blog = () => {
  return (
    <div className='blog-page'>
      <div>This is Blog Page</div>
     <nav className='blog-pag-nave'>
        <ul>
          <li>
            <Link to="/blogs/animal">Animal</Link>
          </li>
          <li>
            <Link to="/blogs/tree">Tree</Link>
          </li>
          <li>
            <Link to="/blogs/water">Water</Link>
          </li>
        </ul>
      </nav>
      <Outlet/> 
      {/* Outlet - A component that renders the next match in a set of matches */}
    </div>
  )
}

export default Blog