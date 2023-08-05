import React from 'react'

const Button = () => {
  return (
    <>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" >Action</a></li>
    <li><a className="dropdown-item">Another action</a></li>
    <li><a className="dropdown-item">Something else here</a></li>
  </ul>
</div>
</>
  )
}

export default Button
