import { FaCrown } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { services } from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'

const Services = () => {
  return (
    <section className="mt-16 w-full px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionHead icon={<FaCrown />} title="services" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 mt-12">
          {services.map(({ id, icon, title, info, path }) => (
            <Card
              key={id}
              className="flex flex-col h-full bg-[#2a2d66] text-white 
              px-6 py-10 rounded-[3rem_0_3rem_0] 
              transition-all duration-500 ease-in-out 
              hover:bg-transparent hover:border-2 border-[#5c5c78] hover:cursor-default"
            >
              {/* Icon */}
              <span
                className="text-3xl w-12 h-12 bg-[#007bff] text-[#eceefd] 
                text-[1.5rem] p-[0.8rem] grid place-items-center 
                mb-6 mx-auto rounded-[1rem] transition-all duration-500 ease-in-out
                group-hover:bg-[#ffb116] group-hover:text-[#0e0e33]"
              >
                {icon}
              </span>

              {/* Title */}
              <h4 className="text-lg sm:text-xl font-semibold text-center">{title}</h4>

              {/* Info */}
              <small className="text-sm text-gray-300 mt-4 text-center block font-light">
                {info}
              </small>

              {/* Link */}
              <Link
                to={path}
                className="mt-auto pt-4 text-sm text-secondary flex justify-center items-center gap-1 hover:underline transition"
              >
                Learn More <AiFillCaretRight />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
