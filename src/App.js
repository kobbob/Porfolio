import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Body from './components/Body'
// import Home from './components/Home'
// import About from './components/About'
// import Experience from './components/Experience'
// import Skills from './components/Skills'
// import Portfolio from './components/Porfolio'
// import Contact from './components/Contact'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <main className="outer-wrapper">
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Body />} />
        {/* <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact /> */}
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
