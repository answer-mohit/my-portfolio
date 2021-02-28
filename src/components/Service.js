import React,{useState} from 'react'
import {data} from '../data';
function Service() {
    const[service,setService]=useState(data);
    return (
        <div className="container py-5 ">
        <h2 className="text-center fw-bold py-3 text-primary">My Services</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
{
service.map((item)=>{
    const{id,title,img}=item;
    return(
        <div className="col-11 mx-auto" key={id}>
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h2 className="card-title text-center">{title}</h2>
      </div>
    </div>
  </div>
    )
})
}
        </div>
            
        </div>
    )
}

export default Service;
