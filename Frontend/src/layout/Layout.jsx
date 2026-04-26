import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../styles/style.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout() {
  return (
    <>

<Header />

    <main>
        <Outlet />
    </main>

    <Footer />
    </>
  )
}

export default Layout