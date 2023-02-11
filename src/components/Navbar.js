import {useGlobalContext} from '../Context.js'
import {NavLink, Link} from 'react-router-dom'
const Navbar = () => {
  const {fetchRandomMeal} =  useGlobalContext();
  const handleRandomMeal = () => {
    fetchRandomMeal();
  }
  const active = {
    color: "red"
  }
    return (
      
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link to="" class="navbar-brand">Meals App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to="" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
         Home
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="about" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
         About
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="contact" className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
         Contact
          </NavLink>
        </li>
        

        
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success me-2" type="submit">Search</button>
      </form>
        <button className="btn btn-outline-dark" onClick={handleRandomMeal} type="button">suprise me!</button>
    </div>
  </div>
</nav>
    )
}

export default Navbar