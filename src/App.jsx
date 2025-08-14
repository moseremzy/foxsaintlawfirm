import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Navbar2 from './components/Navbar2.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Careers from './Pages/Careers.jsx'
import Contact from './Pages/Contact.jsx'
import Insights from './Pages/Insights.jsx'
import News from './Pages/News.jsx'
import Practice from './Pages/Practice.jsx'
import Corporate from './Pages/PracticePages/CorporatePage/Corporate.jsx'
import DisputeResolution from './Pages/PracticePages/DisputePage/DisputeResolution.jsx'
import Alliance from './Pages/PracticePages/Alliance/Alliance.jsx'
import Team from './Pages/Team.jsx'
import Footer from './components/Footer'

const App = () => {

  return (
    <Router>
      <Navbar />
      <Navbar2 />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/news' element={<News />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/team' element={<Team />} />
       
        <Route path='/practice/corporate' element={<Corporate />} />
        <Route path='/PracticePages/DisputeResolution' element={<DisputeResolution />}/>
        <Route path='/PracticePages/Alliance' element={<Alliance />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
