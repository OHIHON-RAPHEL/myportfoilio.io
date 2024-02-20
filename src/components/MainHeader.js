
import Image from '../images/field.jpg'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main_-header-left">
          <h4>#Hello It Me</h4>
          <h1>OHIHON RAPHEL</h1>
          <p>i am Frontend developer. Expertise to create website design,frontend design, and many more....</p>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader