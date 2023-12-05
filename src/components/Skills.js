import Image from '../images/img.webp'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {skills} from '../data'
import Card from '../UI/Card'


const Skills = () => {
  return (
    <section className='skills'>
        <div className="container skills__container">
            <div className="skills__left">
                <div className="skills__image">
                    <img src={Image} alt="skills Image" />
                </div>
            </div>
            <div className="skills__right">
                <SectionHead icon={<GiCutDiamond/>} title="skills"/>
                <p>gshjwkddwdhwdjkdwjd</p>
                <div className="skills__wrapper">
                    {
                        skills.map(({id, icon, title, desc}) => {
                            return <Card key={id} className="skills__skill">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
