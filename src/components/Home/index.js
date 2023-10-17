import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'

import './index.css'

const Home = () => {
  const [data, setData] = useState([])
  const [apiStatus, setApiStatus] = useState(false)
  const [success, setSuccess] = useState()

  const getData = async () => {
    setApiStatus(true)
    const response = await fetch('https://apis.ccbp.in/te/courses')
    if (response.ok) {
      const d = await response.json()
      setData(d.courses)
      setApiStatus(false)
      setSuccess(true)
    } else {
      setSuccess(false)
      setApiStatus(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
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
      <h1>Courses</h1>
      <div className="app-container">
        <div>
          {apiStatus && (
            <div className="loader-container" data-testid="loader">
              <Loader color="#0b69ff" height="150" width="150" />
            </div>
          )}
        </div>
        {!success ? (
          <div className="loader-container">
            <div className="not-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
                className="logo"
                alt="failure view"
              />
              <h1>Oops! Something Went Wrong</h1>
              <p>We cannot seem to find the page you are looking for</p>
              <div>
                <button type="button" onClick={getData}>
                  Retry
                </button>
              </div>
            </div>
          </div>
        ) : (
          <ul className="card-items">
            {data.map(each => (
              <Link to={`/courses/${each.id}`} key={each.id}>
                <li className="item">
                  <img src={each.logo_url} className="l" alt={each.name} />
                  <p className="name">{each.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Home
