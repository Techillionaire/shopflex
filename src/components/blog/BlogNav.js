import React from 'react'
import { Link } from 'react-router-dom'
import './blog.css'

const BlogNav = () => {
    return (
        <div>
             <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container nav">
        <div className="row">
        <div className="col-sm-4">
          <Link to='/blog' className="navbar-brand" ><h2>Conclase Blog</h2></Link>
          </div>
          <div className="col-sm-8">
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to='/' className="nav-link" ><h4>Home</h4></Link>
              </li> 
              <li className="nav-item">
                <Link to='/shop' className="nav-link"><h4>Shop</h4></Link>
              </li>
              <li className="nav-item">
                <Link to='/chat' className="nav-link"><h4>Chat</h4></Link>
              </li>
            </ul>
          </div>
          </div>
          </div>
        </div>
      </nav>
    </header>
             
<p></p>
        </div>
    )
}

export default BlogNav
