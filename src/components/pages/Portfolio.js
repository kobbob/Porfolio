
// Images
import P1Demo from '../../assets/projects/P1Demo.png'
import P2Demo from '../../assets/projects/P2Demo.png'
import P3Demo from '../../assets/projects/P3Demo.png'
import P4Demo from '../../assets/projects/P4Demo.png'


const Portfolio = () => {

  return (
      <div className='slide portfolio'>portfolio
        {/* <h1 id='portfolio-header'>portfolio</h1> */}
        <div className='container one'>
          <img src={P3Demo} alt='Project 3 Demo' id='p3-demo'></img>
          <div className='p-text'>
            <h3>Nike x Collab</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p>Link Buttons</p>
          </div>
        </div>

        <div className='container two'>
          <img src={P4Demo} alt='Project 4 Demo' id='p4-demo'></img>
          <div className='p-text'>
            <h3>Architecture in an Age of Waste</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p>Link Buttons</p>
          </div>
        </div>

        <div className='container three'>
          <img src={P2Demo} alt='Project 2 Demo' id='p2-demo'></img>
          <div className='p-text'>
            <h3>Owen Wowsen Bible</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p>Link Buttons</p>
          </div>
        </div>

        <div className='container four'>
          <img src={P1Demo} alt='Project 1 Demo' id='p1-demo'></img>
            <div className='p-text'>
              <h3>Owen Wowsen Bible</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <p>Link Buttons</p>
            </div>
        </div>
      
  
      </div>
  )
}

export default Portfolio