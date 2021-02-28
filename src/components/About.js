import React,{useState} from 'react'
import about from "../images/man-profile-cartoon_18591-58482.jpg";
import projects from "../projects";
import "../App.css"
function About() {
const[project,setproject]=useState(projects);
return (<div>

        <div className="container py-5 my-3">
        <div className="row">
        <div className="col-md-6 col-12 py-5">
            <img src={about} alt="profile" className="img-fluid"/>
        </div>
        <div className="col-md-5 col-10 py-5 mx-auto">
        <div className="container py-5 paragraph">
        <h6><strong> My Github Account :- </strong> 
        <a href="https://github.com/answer-mohit" target="blank"
         className="btn text-primary bg-light fst-italic ms-3 px-5">Click here</a>
        </h6>
        <p className="lh-lg fst-italic p-3 font-monospace">
       My name is Mohit kumar and i am a self taught developer. I am a <span className="fs-5 fw-bold px-2" style={{color:"purple"}}> MERN STACK </span> web developer. I learned HTML, CSS, Javascript,
       Reactjs, NodeJs and Mongo DB. I have create some projects. I am also learn some libraries like Bootstrap etc. I want to grow my skills and become responsible.
       I learn A very important thing from <strong className="text-dark"> Coding </strong>, that is problem solving skills and never give up.
      
        
        </p>
        
        </div> 
                           </div>

          
        </div>
        <div className="line"></div>
        <h1 className="text-center py-5 fw-bold">My Projects </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
{project.map((item)=>{
    const{id,img,url,title}=item;
    return(
        <div className="col-11 mx-auto" key={id}>
    <div className="card h-100">
    <div className="card-header text-center bg-danger text-light fst-italic">{title}</div>

    <a href={url} target="blank"> 
      <img src={img} className="card-img-top" alt={title}/>
      </a>
    </div>
  </div>
    )
})}



        
        </div>
</div>        
          
        </div>
    )
}

export default About
