import React from 'react'
import img1 from '../../../public/Banner.png'
import img2 from '../../../public/Banner2.png'
import img3 from '../../../public/Banner3.png'

function Inform() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-10">
      
      {/* Left Side */}
      <div>
        {/* OUR STORE */}
        <div className="text-center mt-10" data-aos="fade-down-right">
          <h1 className="font-medium text-4xl">OUR STORE</h1>
          <p className="pt-2 pb-2">We Don’t Just Stitch, We Create Stories</p>
          <img src={img1} alt="Banner 1" className="w-full h-auto object-cover rounded-lg" />
          <div className="pb-3 bg-[#f5f5f5]">
            <p className="py-2">nkknkeq oijoeqo oojfq w</p>
            <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-black hover:text-white transition-colors duration-300">
              Visit Showroom
            </button>
          </div>
        </div>

        {/* EMAIL SUBSCRIBE */}
        <div className="bg-[#f5f5f5] mt-8 p-6 rounded-lg" data-aos="fade-down-right">
          <div className="text-center mb-6">
            Enter your email to receive our latest news and daily updates
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full flex items-center gap-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 h-10 px-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-black/30"
            />
            <button
              type="submit"
              className="h-10 px-5 rounded-xl bg-black text-white font-medium hover:opacity-90 active:scale-[0.99] transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div>
        {/* SHOWROOM */}
        <div className="text-center mt-10" data-aos="fade-down-left">
          <h1 className="font-medium text-4xl">SHOWROOM</h1>
          <p className="pt-2 pb-2">Crafting Outfits, Creating Confidence</p>
          <img src={img2} alt="Banner 2" className="w-full h-auto object-cover rounded-lg" />
          <div className="pb-3 bg-[#f5f5f5]">
            <p className="py-2">nkknkeq oijoeqo oojfq w</p>
            <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-black hover:text-white transition-colors duration-300">
              Visit Showroom
            </button>
          </div>
        </div>

        {/* QUALITY */}
        <div className="text-center mt-8" data-aos="fade-down-left">
          <h1 className="font-medium text-4xl">QUALITY</h1>
          <p className="pt-2 pb-2">Experience Fashion with Unmatched Quality</p>
          <div
            style={{ backgroundImage: `url(${img3})` }}
            className="relative w-full h-[350px] bg-no-repeat bg-cover bg-top rounded-lg flex items-end justify-center"
          >
            <button className="mb-6 bg-white text-black px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-black hover:text-white transition-colors duration-300">
              Visit Showroom
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Inform
