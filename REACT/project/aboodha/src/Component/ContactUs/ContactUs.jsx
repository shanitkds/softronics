import { div } from 'framer-motion/client'
import React from 'react'
import LocationPage from '../Location/LocationPage'

function ContactUs() {
  return (
    <div className='bg-[#e2e2f0]'>
      <div className='w-full h-screen bg-[#e2e2f0] flex pt-33  pl-17'>
      <div className=' w-1/2'>
        <div>
          <div className='text-5xl font-medium'>Contact Us</div>
          <div className='space-y-2 py-5 max-w-80'>
            <div>Email,call,or complit the form to learn how  Snappy can solve your message problen</div>
            <div>abc@gmail.com</div>
            <div>4399022</div>
          </div>
        </div>
        <div className='flex space-x-6  '>
          <div>
            <h3 className='pb-3 text-[20px] font-medium'>Custom Orders</h3>
            <p>Share your design ideas or measurements, and our expert tailors will craft a piece perfectly suited to you.</p>
          </div>
          <div>
            <h3 className='pb-3 text-[20px] font-medium' >Feedback and Suggestions</h3>
            <p> We love hearing from our customers! Your suggestions help us improve our tailoring services and deliver exactly what you want.</p>
          </div>
          <div>
            <h3 className=' text-[20px] font-medium'>Appointments & Inquiries</h3>
            <p>Schedule a consultation or ask about our services by contacting us at </p>
            <a href="ded">info@yourtailor.com</a>
          </div>
        </div>
      </div>
      <div className='pl-40'>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>

          <form className="space-y-4 pt">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
    <div data-aos="zoom-out-right">
      <LocationPage/>
    </div>
    </div>
  )
}

export default ContactUs