import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <>
      <header className="main-header">
        <Link to='/' id='nav-icon'>✹</Link>

        <div className='menu'>
          <HashLink smooth to={'/page#about'} id='nav-text'>About</HashLink>
          <HashLink smooth to={'/page#portfolio'} id='nav-text'>Portfolio</HashLink>
          <HashLink smooth to={'/page#contact'} id='nav-text'>Contact</HashLink>
        </div>

        <span id='home-text-link'>Kate ✹ O'Boyle</span>
      </header>
    </>

  )

}

export default Navigation