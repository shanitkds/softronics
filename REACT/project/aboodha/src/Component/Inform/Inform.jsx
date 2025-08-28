import React from 'react'
import img1 from '../../../public/Banner.png'
import img2 from '../../../public/Banner2.png'
import img3 from '../../../public/Banner3.png'

function Inform() {

    function handleSubmit(e) {
        e.preventDefault();
        // TODO: send `email` to your API / service
        console.log("Email submitted:", email);
    }
    return (
        <div className='h-320 flex'>
            <div>
                <div className='text-center w-140  mt-20 ml-40' data-aos="fade-down-right">
                    <h1 className='font-medium text-4xl'>OUR STORE</h1>
                    <p className='pt-2 pb-2'>We Don’t Just Stitch, We Create Stories</p>
                    <img src={img1} alt="" className='h-150 w-full' />
                    <div className='pb-3 bg-[#f5f5f5]'>
                        <p className='py-2'>nkknkeq oijoeqo oojfq w</p>
                        <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md font-semibold  hover:bg-black hover:text-white transition-colors duration-300">
                            Visit Showroom
                        </button>
                    </div>
                </div>
                <div className="w-140 bg-[#f5f5f5] h-[255px]  ml-40 mt-8" data-aos="fade-down-right">
                    <div className='text-center pt-17'>Enter your email to receive our latest news and daily updates</div>
                    <div className='flex items-center justify-center ml-2 mt-10'>
                        <form
                            onSubmit={(e) => { e.preventDefault(); /* handle send here */ }}
                            className="w-full max-w-xl flex items-center gap-2 px-4"
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
            </div>

            <div>
                <div className='text-center w-140  mt-20 ml-20' data-aos="fade-down-left">
                    <h1 className='font-medium text-4xl'>SOHWROOM</h1>
                    <p className='pt-2 pb-2'> Crafting Outfits, Creating Confidence</p>
                    <img src={img2} alt="" className='h-110 w-full' />
                    <div className='pb-3 bg-[#f5f5f5]'>
                        <p className='py-2'>nkknkeq oijoeqo oojfq w</p>
                        <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md font-semibold  hover:bg-black hover:text-white transition-colors duration-300">
                            Visit Showroom
                        </button>
                    </div>
                </div>
                <div className='text-center w-140  mt-5 ml-20' data-aos="fade-down-left">
                    <h1 className='font-medium text-4xl'>QUALITY</h1>
                    <p className='pt-2 pb-2'>Experience Fashion with Unmatched Quality</p>
                    <div style={{ backgroundImage: `url(${img3})` }} className='relative w-full h-[350px] bg-no-repeat bg-cover bg-top' >
                        <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md font-semibold mt-60  hover:bg-black hover:text-white transition-colors duration-300">
                            Visit Showroom
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Inform