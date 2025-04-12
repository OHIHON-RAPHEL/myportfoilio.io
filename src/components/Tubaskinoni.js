import { useState } from "react"
import SectionHead from "./SectionHead"
import { ImQuotesLeft } from 'react-icons/im'
import Card from "../UI/Card"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { testimonials } from '../data'

const Tubaskinoni = () => {
  const [index, setIndex] = useState(0)
  const { name, quote, job, games } = testimonials[index]

  const prevTestimonialHandler = () => {
    setIndex(prev => (prev <= 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextTestimonialHandler = () => {
    setIndex(prev => (prev >= testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHead icon={<ImQuotesLeft />} title="TUBASKINONI" className="flex justify-center mb-10" />

        <Card
          className="relative mt-20 bg-[#2a2d66] border-2 rounded-[3rem_0_3rem_0]
          px-6 sm:px-8 py-12 text-center transition-all duration-500 ease-in-out hover:cursor-default hover:bg-transparent hover:border-[#5c5c78]"
        >
          {/* Avatar */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-transparent overflow-hidden absolute -top-10 left-1/2 transform -translate-x-1/2 shadow-xl transition-all duration-300 group-hover:rounded-full group-hover:border-gray-400">
            <img src={games} alt={name} className="w-full h-full object-cover" />
          </div>

          {/* Testimonial Content */}
          <p className="italic mt-14 mb-6 text-sm sm:text-base text-gray-300 leading-relaxed">{quote}</p>
          <h5 className="font-semibold text-lg sm:text-xl text-white">{name}</h5>
          <small className="block text-sm sm:text-base text-gray-400 font-light">{job}</small>
        </Card>

        {/* Navigation Arrows */}
        <div className="w-fit mt-10 mx-auto flex items-center justify-center gap-4">
          <button onClick={prevTestimonialHandler} className="bg-transparent cursor-pointer">
            <IoIosArrowDropleftCircle className="text-primary w-10 h-10 sm:w-12 sm:h-12" />
          </button>
          <button onClick={nextTestimonialHandler} className="bg-transparent cursor-pointer">
            <IoIosArrowDroprightCircle className="text-primary w-10 h-10 sm:w-12 sm:h-12" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Tubaskinoni
