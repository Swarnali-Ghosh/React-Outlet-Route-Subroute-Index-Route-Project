import React from 'react'
import { Link, Outlet } from "react-router-dom"
const Tree = () => {
  return (
    <>
      <div className='tree-section'>
        <div>Tree : I am a mango tree.</div>
        <nav className='blog-pag-nave'>
          <ul>
            <li>
              <Link to='/blogs/tree/amrapali'>Amrapali</Link>
            </li>
            <li>
              <Link to='/blogs/tree/alphonso'>Alphonso</Link>
            </li>
            <li>
            {/* <Link to="/contact"><button>logout from tree page</button></Link> */}
          </li>
          </ul>
        </nav>
        <Outlet/>
      </div>
    </>
  )
}

export default Tree