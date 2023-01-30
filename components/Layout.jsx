import React from 'react'
import {Footer, Navbar} from './'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout