import Image from '../images/img.webp'
import SectionHead from './SectionHead'
import { GiCutDiamond } from 'react-icons/gi'
import { skills } from '../data'
import Card from '../UI/Card'

const Skills = () => {
  return (
    <section className="py-16 px-4 mt-[6rem] sm:mt-[8rem] md:mt-[10rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-[12%] items-center">

        {/* Left Image */}
        <div className="w-full overflow-hidden">
          <div className="transition-all duration-300 ease-in-out hover:saturate-100 saturate-[.25]">
            <img src={Image} alt="skills" className="w-full h-auto rounded-md object-cover" />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <SectionHead icon={<GiCutDiamond />} title="skills" />
          <p className="my-6 text-gray-700 leading-relaxed text-sm sm:text-base">
            Tubaskinoni
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-8">
            {skills.map(({ id, icon, title, desc }) => (
              <Card
                key={id}
                className="pt-14 text-left relative bg-[#2a2d66] border-2 rounded-[3rem_0_3rem_0] px-6 py-8 sm:px-8 sm:py-10
                transition-all duration-500 ease-in-out hover:bg-transparent hover:border-[#5c5c78] hover:cursor-default"
              >
                <span
                  className="absolute top-0 left-0 text-3xl
                  w-12 h-12 bg-[#007bff] text-[#eceefd] 
                  text-[1.5rem] p-[0.8rem] grid place-items-center 
                  mb-6 mx-auto rounded-[1rem] 
                  transition-all duration-500 ease-in-out
                  group-hover:bg-[#ffb116] 
                  group-hover:text-[#0e0e33]"
                >
                  {icon}
                </span>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">{title}</h4>
                <small className="text-sm text-gray-300 block font-light">{desc}</small>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
