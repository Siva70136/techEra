import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Item = props => {
  const [data, setData] = useState([])
  const [apiStatus, setApiStatus] = useState(false)
  const {match} = props
  const {id} = match.params
  const [success, setSuccess] = useState(true)

  const getData = async () => {
    setApiStatus(true)
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)

    if (response.ok) {
      const d = await response.json()

      setData(d.course_details)
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
          <ul className="card">
            <li className="item1" key={data.id}>
              <img src={data.image_url} className="image" alt={data.name} />
              <div className="data-container">
                <h1 className="name">{data.name}</h1>
                <p className="desc">{data.description}</p>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Item
