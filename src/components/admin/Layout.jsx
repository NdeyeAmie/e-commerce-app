import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import Fouter from "../Footer"
import { Route } from 'react-router-dom'

import AdminNavbar from './AdminNavbar'
import { useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()  
  return (
    <>
    {
    navigate.pathname.startsWith("/dashboard") ? <AdminNavbar/> :  <HeaderAdmin/>
}
    
      <div>
        <Route/>
      </div>
      <Fouter/>
    </>
  )
}

export default Layout
