import Header from '../../components/Header'
import HeaderImage from '../../images/house.jpg'
import StoryImage from '../../images/field.jpg'

import './about.css'
const About = () => {
  return (
    <>
    <Header title="About Me" image={HeaderImage}>
      i love the way tubaskinoni do his things properly
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="my Story Image" />  
        </div>
        <div className="about__section-content">
          <h1>About Me</h1>
          <p>
            I am a skilled web designer and a frontend developer over 2 years of experience in the industry.
            Expertise to create website Design, Frontend Design, and many more..
            My passion lies in creating captivating website designs and implementing them through frontend development.
            I take pride in staying up-to date with current design trnds and leveraging my creativity to produce visually apealing and user-frendly website.
            through out my career, i have develop a deep understanding of user experience (UX) and user interface (UI) principles.
            By putting my self in the shoes of the end-user, i strive to create intuitive and seamless browsing experiences.
            i believe that a well designed website should not only look visually appeling but also provide a smooth and enjoyable interaction for vistors.
            When starting a new project, i throughly research and analize the target audience and the client specific requirements.
            This enable me to trailor my designs to meet their expectation and deliver a unique online presence that align with their brand identity. 
          </p>
        </div>
      </div>
    </section>

    <section cassName="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>My Vision</h1>
          <p>
            ddkl;lkenmcmewklkcwlkcwkwcm
          </p>
          <p>
            dmcwlwlejwllcnwejlkwlkwq/qkc
          </p>
          <p>
            wwqkjewjeqeeqmoemcncpqnqp;qnnqn
          </p>
        </div>
        <div className="about__section-image">
          <img src={StoryImage} alt="my Vision Image" />  
        </div>
      </div>
    </section>
    </>
  )
}

export default About
