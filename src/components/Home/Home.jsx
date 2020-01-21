import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Nav from '../Nav/Nav.jsx'
import Axios from 'axios'

function Home() {
  return(
    <div >
      <Header/>
      <Nav/>
      <Footer/>
      <button onClick={() => Axios.get('/api/test')}>test</button>
    </div>
  )
}

export default Home