import React from 'react'
import LocationPage from '../Location/LocationPage'

function ContactUs() {
  return (
    <div className='bg-[#e2e2f0]'>
      <div className='w-full min-h-screen bg-[#e2e2f0] flex flex-col lg:flex-row pt-10 px-6 lg:px-16 gap-10'>
        
        
        <div className='w-full lg:w-1/2 space-y-6 pt-20'>
          <div>
            <div className='text-4xl sm:text-5xl font-medium'>Contact Us</div>
            <div className='space-y-2 py-5 max-w-md'>
              <div>Email, call, or complete the form to learn how Snappy can solve your message problem.</div>
              <div className="font-semibold">abc@gmail.com</div>
              <div className="font-semibold">4399022</div>
            </div>
          </div>

          
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div>
              <h3 className='pb-3 text-[20px] font-medium'>Custom Orders</h3>
              <p>Share your design ideas or measurements, and our expert tailors will craft a piece perfectly suited to you.</p>
            </div>
            <div>
              <h3 className='pb-3 text-[20px] font-medium'>Feedback & Suggestions</h3>
              <p>We love hearing from our customers! Your suggestions help us improve our tailoring services and deliver exactly what you want.</p>
            </div>
            <div className='sm:col-span-2'>
              <h3 className='pb-3 text-[20px] font-medium'>Appointments & Inquiries</h3>
              <p>Schedule a consultation or ask about our services by contacting us at </p>
              <a href="mailto:info@yourtailor.com" className="text-blue-600 underline">info@yourtailor.com</a>
            </div>
          </div>
        </div>

       
        <div className='w-full lg:w-1/2 flex justify-center'>
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>

            <form className="space-y-4">
              
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              
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

      
      <div data-aos="zoom-out-right" className="mt-10">
        <LocationPage />
      </div>
    </div>
  )
}

export default ContactUs
