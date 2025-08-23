import React from 'react'
import Banner4 from '../../../public/Banner4.png'
import { useNavigate } from 'react-router-dom'
import LocationPage from '../Location/LocationPage'

function AboutUs() {
    const navigation=useNavigate()
    return (
        <div>
            <div className="bg-gray-100 py-26 px-10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                    {/* Left: Image or Illustration */}
                    <div className="flex-1">
                        <img
                            src={Banner4}
                            alt="Tailoring Shop"
                            className="rounded-2xl shadow-lg w-full"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-extrabold text-yellow-500">About Us</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Welcome to our <span className="font-semibold text-black">tailoring shop in Nellikuth</span>,
                            where tradition meets modern craftsmanship. We are proud to specialize in <span className="text-yellow-500 font-semibold">Thobe tailoring</span>,
                            offering custom designs that reflect your style, personality, and comfort. Our team of expert tailors combines years of experience
                            with attention to detail to deliver outfits that are not just clothing, but statements of elegance.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Our mission is to provide high-quality, custom-fitted garments that make our customers feel confident and stylish.
                            From fabric selection to final fitting, every step is handled with care and precision. We value our customers’ ideas and
                            work closely with them to bring their vision to life.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Beyond just Thobes, we offer a range of tailoring services including alterations, custom casual wear, and formal wear.
                            Our shop is equipped with modern tools while still embracing the art of hand-crafted tailoring, ensuring that every garment
                            is a masterpiece.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            At our shop, <span className="font-semibold text-black">customer satisfaction</span> is our top priority.
                            We believe in building long-lasting relationships through trust, professionalism, and unmatched quality.
                            Whether it’s for daily wear, special occasions, or gifting, our creations are designed to impress.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            Visit us today at <span className="font-semibold text-yellow-500">Nellikuth</span> to experience the blend of
                            tradition, style, and personalized service. Let us craft a garment that not only fits perfectly but also tells your story.
                        </p>

                        {/* Call-to-action button */}
                        <div>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors" onClick={()=>navigation('/products/0')}>
                                Book Your Fitting Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <LocationPage/>
            </div>
        </div>
    )
}

export default AboutUs