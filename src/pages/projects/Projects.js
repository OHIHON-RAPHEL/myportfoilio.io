import covidImage from '../../images/covid.png'
import reflexImage from '../../images/reflex.png'
import cargoImage from '../../images/cargo.png'

const Projects = () => {
  return (
    <div className="w-[90%] max-w-[1920px] mx-auto pt-20 flex flex-col md:flex-row gap-10">
      {/* Project Card */}
      {[{
        id: 1,
        title: 'E-commerce website',
        image: reflexImage,
        description: 'Reflex is an online platform that allows businesses and individuals to buy and sell products or services over the internet. It provides a seamless shopping experience through various features such as product listings, search and filtering options, secure payment gateways, and customer support.',
        tech: 'React.js, JavaScript',
        repo: 'https://github.com/OHIHON-RAPHEL/myProjectWork.io.git',
        repoText: 'myProjectWork.io'
      }, {
        id: 2,
        title: 'Covid-19 Tracker',
        image: covidImage,
        description: 'Covid-19 tracker is an online platform providing real-time updates and information resources during the global pandemic.',
        tech: 'React.js, JavaScript, Redux',
        repo: 'https://github.com/OHIHON-RAPHEL/covid-19-tracker.io.git',
        repoText: 'covid-19-tracker.io'
      }, {
        id: 3,
        title: 'Cargo Shipment',
        image: cargoImage,
        description: 'Cargo shipment application that allows users to book their means of transporting goods to another country.',
        tech: 'React.js, JavaScript, TypeScript',
        repo: 'https://github.com/OHIHON-RAPHEL/cargo-shipment.git',
        repoText: 'cargo-shipment'
      }].map(project => (
        <div key={project.id} className="max-w-md w-full">
          <p className="text-xl font-semibold mb-2">{project.id}. {project.title}</p>
          <div className="mb-5">
            <img src={project.image} alt={project.title} className="w-full max-w-xs rounded shadow-md" />
            <p className="mt-3 text-gray-700 text-sm">{project.description}</p>
          </div>
          <p className="text-sm text-gray-800">Tech Stack: {project.tech}</p>
          <p className="text-sm text-blue-600 break-words">
            Git Repository:{' '}
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="underline">
              {project.repoText}
            </a>
          </p>
        </div>
      ))}
    </div>
  )
}

export default Projects
