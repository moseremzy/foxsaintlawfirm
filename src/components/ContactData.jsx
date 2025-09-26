import React from 'react'
import bannerImage from "../assets/profile-pictures/banner.png";
import { contactinfo } from '../constants';

const ContactData = () => {
  return (
    <section
            className="h-full bg-cover bg-center text-gray-900 flex flex-col py-13 px-5 md:px-20"
            style={{
              backgroundImage: `url(${bannerImage})`,
            }}
          >
           {contactinfo.map((item,index)=>(
            <section key={index} className='flex flex-col items-center md:flex-row '>
                <div className='w-full flex flex-col shadow-gray-300 shadow-lg p-3 mb-5 rounded-xl md:shadow-none md: justify-center md:items-end'>
                    <h2 className='text-[17px] text-gray-600 md:text-3xl'>{item.interest}</h2>
                    <h1 className='text-3xl text-gray-600 font-bold pb-5 md:text-3xl'>{item.team}</h1>
                    <article className='flex flex-col gap-2 pb-3 font-semibold text-gray-600 text-[16px] md:text-xl'>
                        <p className='text-end'>{item.description}</p>
                        <p className='text-end'>{item.text}</p>
                    </article>
                </div>
           <div className='w-[400px] text-gray-600 h-fit flex flex-col md:items-center p-3 gap-3 rounded-lg shadow-gray-400 shadow-2xl md:h-fit md:bg-white md:w-2/3'>
            <h2 className='w-full flex items-center justify-center mb-3 text-lg font-semibold'>{item.form}</h2>
            <form action="" className='bg-white flex flex-col gap-5 px-3 text-gray-500 md:w-[400px]' >
                <input type="text" placeholder='Name' className='font-semibold text-lg border-1 border-gray-400 py-2 px-5 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-300'/>
                <input type="email"  placeholder='Email'className='font-semibold text-lg border-1 border-gray-400 py-2 px-5 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-300'/>
                <input type="tel"  placeholder='Phone'className='font-semibold text-lg border-1 border-gray-400 py-2 px-5 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-300'/>
                <textarea placeholder="Message" class="w-full font-medium text-lg border border-gray-400 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-gray-300" rows="3"></textarea>
                <label class=" font-semibold text-gray-600 w-[100px] bg-gray-100 flex items-center justify-center border-1 border-gray-500 rounded-sm cursor-pointer hover:bg-gray-300 active:bg-gray-400">
  Choose File
  <input type="file" class="hidden" />
</label>

                <button type="submit" className='w-full border-1 p-2 bg-amber-400 active:bg-amber-500 text-white cursor-pointer md:hover:bg-amber-500'>Submit</button>
            </form>
           </div>
            </section>
           ))}
            </section>
  )
}
export default ContactData