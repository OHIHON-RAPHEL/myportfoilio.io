import './projects.css'
import covidImage from '../../images/covid.png';
import reflexImage from '../../images/reflex.png';
import cargoImage from '../../images/cargo.png';

const Projects = () => {
  return (
    <>
    <div className="main">
      <div>
        <p>1. E-commerce website</p>
        <div className="reflex">
          <img src={reflexImage} alt="page"  />
          <p>Reflex is an an online platform that allows businesses and individuals to buy and sell products or services over the internet. It provides a seamless shopping experience through various features such as product listings, search and filtering options, secure payment gateways, and customer support.</p>
        </div>
        <p>Tech Stack: React.js, JavaScript,</p>
        <p>Git Repository: https://github.com/OHIHON-RAPHEL/myProjectWork.io.git </p>
      </div>

      <div>
        <p>2. Covid-19-Tracker</p>
        <div className="reflex">
          <img src={covidImage} alt="page"  />
          <p>covid-19 tracker is an online platform provide the real time and information resources during the global pandemic.</p>
        </div>
        <p>Tech Stack: React.js, JavaScript, Redux</p>
        <p>Git Repository: https://github.com/OHIHON-RAPHEL/covid-19-tracker.io.git </p>
      </div>

      <div>
        <p>3. Cargo Shipment</p>
        <div className="reflex">
          <img src={cargoImage} alt="page"  />
          <p>Cargo Sfipment application that allow user to book their means of transporting goods to another country</p>
        </div>
        <p>Tech Stack: React.js, JavaScript, TypeScript</p>
        <p>Git Repository: https://github.com/OHIHON-RAPHEL/cargo-shipment.git</p>
      </div>
    </div>
    </>
    
  )
}

export default Projects
