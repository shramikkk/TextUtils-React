import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <h4 className={`text-${props.mode === 'blue' ? 'black' : props.mode === 'light' ? 'dark' : 'light'}`}>
          {props.h4}
        </h4>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.aboutTextUtils}
              </a>
            </li>
          </ul>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            onClick={props.toggleBlueMode}
            type="checkbox"
            role="switch"
            id="switchCheckBlue"
          />
          <label
            className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}
            htmlFor="switchCheckBlue"
          >
            {props.mode === 'light' ? 'Enable blue mode' : 'Disable blue Mode'}
          </label>
        </div>

        <div className="form-check form-switch mx-3">
          <input
            className="form-check-input"
            onClick={props.toggleDarkMode}
            type="checkbox"
            role="switch"
            id="switchCheckDark"
          />
          <label
            className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`}
            htmlFor="switchCheckDark"
          >
            {props.mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
          </label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  h4: PropTypes.string.isRequired,
  aboutTextUtils: PropTypes.string.isRequired,
  toggleBlueMode: PropTypes.func.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
}

Navbar.defaultProps = {
  h4: "Set title here",
  aboutTextUtils: "About text here",
}
