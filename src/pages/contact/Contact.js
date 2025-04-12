import Header from '../../components/Header'
import HeaderImage from '../../images/logo.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        RAPH KING LIMITED
      </Header>

      <p className="text-center my-4 text-lg font-medium text-gray-700 px-4">
        PHONE: 08108705695
      </p>

      <section className="py-16 px-4">
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-md">
            <a
              href="mailto:ohihonraphel@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-[#007bff] text-white text-2xl sm:text-3xl p-6 sm:p-8 rounded-2xl border-2 border-transparent transition-all duration-500 ease-in-out hover:bg-transparent hover:border-gray-100"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/ernest_achiever"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-[#007bff] text-white text-2xl sm:text-3xl p-6 sm:p-8 rounded-2xl border-2 border-transparent transition-all duration-300 hover:bg-transparent hover:border-gray-100"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+23481369759"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-[#007bff] text-white text-2xl sm:text-3xl p-6 sm:p-8 rounded-2xl border-2 border-transparent transition-all duration-300 hover:bg-transparent hover:border-gray-100"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
