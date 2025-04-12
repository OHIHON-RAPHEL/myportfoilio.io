import Header from '../../components/Header'
import HeaderImage from '../../images/house.jpg'
import StoryImage from '../../images/field.jpg'

const About = () => {
  return (
    <>
      <Header title="About Me" image={HeaderImage}>
        I love the way tubaskinoni does his things properly
      </Header>

      {/* About Me Section */}
      <section className="py-16">
        <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-[40%_50%] gap-[10%] items-start">
          <div className="overflow-hidden rounded-full transform skew-x-[15deg] transition-all duration-300 hover:skew-x-0">
            <img src={StoryImage} alt="my" className="w-full h-auto object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-8">About Me</h1>
            <p className="mb-4 text-gray-700">
              I am a skilled web designer and a frontend developer. Expertise to create website Design, Frontend Design, and many more..
              My passion lies in creating captivating website designs and implementing them through frontend development.
              I take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites.
            </p>
            <p className="mb-4 text-gray-700">
              Throughout my career, I have developed a deep understanding of user experience (UX) and user interface (UI) principles.
              By putting myself in the shoes of the end-user, I strive to create intuitive and seamless browsing experiences.
              I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjoyable interaction for visitors.
            </p>
            <p className="text-gray-700">
              When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements.
              This enables me to tailor my designs to meet their expectations and deliver a unique online presence that aligns with their brand identity.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-[50%_40%] gap-[10%] items-start">
          <div>
            <h1 className="text-3xl font-bold mb-8">My Vision</h1>
            <p className="mb-4 text-gray-700">To improve more professionally</p>
            <p className="text-gray-700">To be able to satisfy users with a better interface</p>
          </div>
          <div className="overflow-hidden rounded-full transform skew-x-[-15deg] transition-all duration-300 hover:skew-x-0">
            <img src={StoryImage} alt="my Vision" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
