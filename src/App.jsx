import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Overview from './Components/Overview/Overview'
import Footer from './Components/Footer/Footer'
import ContactForm from './Components/Contact/Contact'
import RegistrationForm from './Components/Registration/Registration'
import Conference from './Components/Conference/Conference'
import Explore from './Components/Explore/Explore'
import Content from './Components/Content/Content'


const App = () => {

  return (
    <div>
        <Navbar />
        <Hero/>
        
        <Conference/>
        <Explore/>
        <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
