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
import Privacy from './Pages/PracticePages/Privacy/Privacy.jsx'
import Energy from './Pages/PracticePages/Energy/Energy.jsx'
import Intellectual from './Pages/PracticePages/Intellectual/Intellectual.jsx'
import Banking from './Pages/PracticePages/Banking/Banking.jsx'
import Shipping from './Pages/PracticePages/Shipping/Shipping.jsx'
import Tatp from './Pages/PracticePages/Tax/Tatp.jsx'
import Insolvency from './Pages/PracticePages/Insolvency/Insolvency.jsx'
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

        {/* practice area routes - all lowercase */}
        <Route path='/practice/corporate' element={<Corporate />} />
        <Route path='/practice/dispute-resolution' element={<DisputeResolution />} />
        <Route path='/practice/alliance' element={<Alliance />} />
        <Route path='/practice/privacy' element={<Privacy />} />
        <Route path='/practice/energy-extractive' element={<Energy />} />
        <Route path='/practice/ip-media-tech' element={<Intellectual />} />
        <Route path='/practice/banking-finance' element={<Banking />} />
        <Route path='/practice/shipping-maritime' element={<Shipping />} />
        <Route path='/practice/tax-transfer' element={<Tatp />} />
        <Route path='/practice/insolvency-restructuring' element={<Insolvency />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
