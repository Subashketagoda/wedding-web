import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Events from './components/Events'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <Events />
        <Gallery />
        <RSVP />
      </main>
      <Footer />
    </>
  )
}

export default App
