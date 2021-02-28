import React, { useContext,useEffect } from 'react'
import {AppContext} from './context';
function Modal() {
    const {closeModel}=useContext(AppContext);
    useEffect(()=>{
     setTimeout(()=>{
closeModel();
     },3000)   
    });
    return (
    
        <div className="container">
        <div className="row">
            <div className="col ">
            <div className="alert alert-success pb-1" role="alert">
  <cite>Your email successfully send !!</cite>
</div>
            </div>
        </div>
            
        </div>
    )
}

export default Modal
