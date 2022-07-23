
const Body = () => {

  return (
    <main className='site-wrapper'>
      <div className='scroll'>scroll &gt;</div>
      
      <div className='wrapper'>
        {/* <div className='scroll'>scroll</div> */}
        <div className='slide body' id='home'>home</div>
        <div className='slide about' id='about'>about</div>
        <div className='slide experience'>experience</div>
        <div className='slide skills'>skills</div>
        <div className='slide portfolio'id='portfolio'>portfolio</div>
        <div className='slide contact' id='contact'>contact</div>
      </div>
    </main>
  )
}

export default Body


