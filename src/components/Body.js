
const Body = () => {

  return (
    <main className='site-wrapper'>
      <div className='scroll'>scroll &gt;</div>
    
    
{/* ----- Home page -----
      <div className='home-wrapper'>
        <div className='slide home' id='home'>
            <span id='home-header'>
              Kate <br /> O'Boyle
            </span>
            <br /><br />
            <span id='home-subheader'>Software Developer</span>
        </div>    
      </div> */}


{/* ----- Subsequent pages ----- */}
      <div className='wrapper'>

        {/* ----- Home page ----- */}
        <div className='slide home' id='home'>
              <span id='home-header'>
                Kate <br /> O'Boyle
              </span>
              <br /><br />
              <span id='home-subheader'>Software Developer</span>
          </div>    
        </div>

        {/* ----- About page ----- */}
          <div className='slide about' id='about'>about</div>

        {/* ----- Experience page ----- */}
          <div className='slide experience' id='experience'>experience</div>

        {/* ----- Skills page ----- */}
          <div className='slide skills' id=''>skills</div>

        {/* ----- Portfolio page ----- */}
          <div className='slide portfolio' id='portfolio'>
            <span>Portfolio</span>
            <div className='project container1'>
              1
            </div>
            <div className='project container2'>
              2
            </div>
            <div className='project container3'>
              3
            </div>
            <div className='project container4'>
              4
            </div>



          </div>


        {/* ----- Contact page ----- */}
          <div className='slide contact' id='contact'>contact</div>
        
        {/* </div> */}
    </main>
  )
}

export default Body


