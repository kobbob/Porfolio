import { BrowserRouter } from 'react-router-dom'

// Components
// import Body from './components/Body'
import Navigation from './components/Navigation'
import Scroll from './components/Scroll'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Experience from './components/pages/Experience'
import Skills from './components/pages/Skills'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'

const App = () => {
  return (
      <BrowserRouter>
      {/* <main className='site-wrapper'> */}
      <Navigation />
      <Scroll />
          <div className='outer-wrapper'>
            <div className='wrapper'>
              <Home />
              <About />
              <Skills />
              <Experience />
              <Portfolio />
              <Contact />
            </div>
          </div>
        {/* </main> */}
      </BrowserRouter>
  )
}

export default App
