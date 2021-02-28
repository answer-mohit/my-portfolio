import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css";
function Home() {
    return (
        <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  
        <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
           <div className="carousel-item active"  data-bs-interval="2500">
      <img src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=940"
       className="d-block w-100" alt="first"/>
<div className="carousel-caption d-none py-5 d-md-block">
        <h1 className="text-danger fw-bolder">Portfolio</h1>
      </div>
    </div>
    <div className="carousel-item"  data-bs-interval="3500">
      <img src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=940"
       className="d-block w-100" alt="second"/>
<div className="carousel-caption d-none py-5 d-md-block">
        <h1 className="text-danger fw-bolder">Portfolio</h1>
      </div>       
    </div>
    <div className="carousel-item">

    <img src="https://images.pexels.com/photos/6168/hands-woman-laptop-notebook.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
       className="d-block w-100" alt="third"/>
<div className="carousel-caption d-none py-5 d-md-block">
        <h1 className="text-danger fw-bolder">Portfolio</h1>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
<div className="home">
    <h1 className="fw-bold">Hey ! I am a MERN Stack web developer</h1>
<div>
<NavLink exact to="/contact" className="btn btn-primary">Contact us</NavLink>
</div>   
</div>
        </div>
    )
}

export default Home
