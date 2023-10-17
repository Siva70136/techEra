import {Link} from 'react-router-dom'
import Header from '../Header'

const NotFound = () => (
  <div className="home-container">
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            className="logo"
            alt="website logo"
          />
        </Link>
      </div>
    </div>

    <div className="loader-container">
      <div className="not-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          className="logo"
          alt="not found"
        />
        <h1>Page Not Found</h1>
        <p>We are sorry, the page you requested could not be found</p>
      </div>
    </div>
  </div>
)

export default NotFound
