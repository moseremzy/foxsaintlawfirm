import {Menu, X, Instagram,Linkedin,Facebook} from 'lucide-react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import React from 'react';
import logo from '../assets/logo.png';
import {navItems} from '../constants'
import {locations} from '../constants'
import {contacts} from '../constants'




const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    
    const toggleNavbar = ()=>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
    // navigation bar
    <nav className=" bg-[#16163F] sticky top-0 z-50 backdrop-blur-lg border-b border-indigo-950/80">

        {/* nav content container 1  */}
        <div className="container1 mx-auto relative text-sm px-6">
            <div className='md:hidden flex flex-row justify-between items-center'>

                <div className='socialHandles text-sm bg-indigo-950 flex flex-row py-2 space-x-2.5'>
                    <a href="#" className='hover:text-orange-300'><Instagram /></a>
                    <a href="#"className='hover:text-orange-300'><Linkedin /></a>
                    <a href="#"className='hover:text-orange-300'><Facebook /></a>
                </div>

                <ul className='locations flex flex-row space-x-1.5'>
                    {locations.map((item,index)=>(
                        <li key={index}>
                            <a href={item.href} className='hover:text-orange-300'>{item.label}</a>
                            {index < locations.length - 1 && <span className="px-1">|</span>}
                        </li>
                    ))}
                </ul>

            </div>


            {/* mid level switch  */}

            <div className='hidden md:flex flex-row justify-between items-center'>

            <ul className="flex flex-row space-x-4">
                {contacts.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2 hover:text-orange-300">
                        <span>{item.icon}</span>
                        <span><a href={item.href}>{item.contact}</a></span>
                    </li>
                 ))}
            </ul>

                <div className='socialHandles text-sm bg-indigo-950 flex flex-row py-2 space-x-2.5'>
                    <a href="#" className='hover:text-orange-300'><Instagram /></a>
                    <a href="#" className='hover:text-orange-300' ><Linkedin /></a>
                    <a href="#" className='hover:text-orange-300' ><Facebook /></a>
                </div>

            </div>







        </div>

        {/* nav content container 2 */}
        <div className="container2 bg-amber-50 text-indigo-950 px-6 mx-auto relative text-sm">

            {/* content items container  */}
            <div className=" flex justify-between gap-20 items-center">
                {/* name-logo  */}
                <div className=" flex items-center flex-shrink-0  ">
                    <img className='h-16 w-10 mr-2' src={logo} alt="logo" />
                    <span className='text-lg tracking-tight font-sans font-semibold'>ALLIANCE LAW FIRM</span>
                </div>

                {/* nav-list  */}
                <ul className='hidden md:text-md lg:flex mx-auto space-x-12 text-md font-semibold'>
                    {navItems.map((item,index)=>(
                        <li key={index} className='hover:text-orange-500'>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>

                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X className='text-orange-500'/> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                    <div className="fixed right-0 my-1 z-20 bg-amber-100 text-black font-semibold text-[15px] w-full px-12 py-3 flex flex-col items-center lg:hidden animate-slideDown">
                        
                        <ul className='flex flex-col items-center'>
                            {navItems.map((item,index)=>(
                                <li key={index} className={`py-4 ${index === 0 ? 'text-orange-500': 'text-black'}`}>
                                    <Link className='hover:text-orange-300' to={item.path}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                )}
        </div>
    </nav>
  )
}

export default Navbar
