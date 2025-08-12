
import Image from '../images/field.jpg'

const MainHeader = () => {
  return (
    <header className="w-full min-h-[calc(100vh-3rem)] flex items-center py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-4">

        {/* Left Content */}
        <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <h4 className="mb-2 text-secondary font-normal text-base md:text-lg">#Hello It Me</h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            OHIHON RAPHEL
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-10 max-w-md">
            I am a Frontend Developer. Expertise in website design, frontend design, and many more...
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-secondary text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            Let's Connect
          </a>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          <div
            className="w-60 h-60 sm:w-80 sm:h-80 rounded-full absolute transition-all duration-500 ease-in-out hover:blur-[15px]"
            style={{ background: 'linear-gradient(75deg, #ffb116, transparent)' }}
          ></div>
          <div className="relative z-10">
            <img
              src={Image}
              alt="Main"
              className="rounded-xl shadow-lg max-w-full object-cover w-48 sm:w-72 md:w-96"
            />
          </div>
        </div>

      </div>
    </header>
  )
}

export default MainHeader;
