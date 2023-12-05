import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {services} from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'

const Services = () => {
  return (
    <section className="services">
        <div className="container services__container">
          <SectionHead icon={<FaCrown/>} title="services"/>
        <div className="services__wrapper">
          {
            services.map(({id, icon, title, info, path}) => {
              return (
                <Card className="services__service" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
                </Card>
              )
            })
          }
        </div>
        </div>
    </section>
  )
}

export default Services
