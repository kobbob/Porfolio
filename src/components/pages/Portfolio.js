
// Images
import P3Moodboard from '../../assets/projects/P3Moodboard.png'
import P3Demo from '../../assets/projects/P3Demo.png'
// import P4Inspiration from '../../assets/projects/P1Inspiration.png'



const Portfolio = () => {

  return (
      <div className='slide portfolio'>
        <h1 id='portfolio-header'>portfolio</h1>
        <div className='container one'>
          <img src={P3Moodboard} alt='Project 3 Moodboard' id='p3-moodboard'></img>
          <img src={P3Demo} alt='Project 3 Demo' id='p3-demo'></img>
          <div className='p3-text'>
            <h3>Nike x Collab</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p>Link Buttons</p>
          </div>
        </div>

        <div className='container two'></div>

        <div className='container three'></div>

        <div className='container four'></div>
      
  
      </div>
  )
}

export default Portfolio