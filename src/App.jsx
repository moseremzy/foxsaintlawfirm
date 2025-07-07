import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Careers from './Pages/Careers.jsx'
import Contact from './Pages/Contact.jsx'
import Insights from './Pages/Insights.jsx'
import News from './Pages/News.jsx'
import Practice from './Pages/Practice.jsx'
import Team from './Pages/Team.jsx'
import Footer from './components/Footer'

const App = () => {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/news' element={<News />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
