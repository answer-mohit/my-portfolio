import React, { useContext } from 'react';
import emailjs from 'emailjs-com';
import {AppContext} from './context';
import Modal from './Modal';

export default function Contact() {
const {openModel,showModel}=useContext(AppContext);
console.log(openModel);
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_1jhrd1d','template_q560ol6', e.target,'user_XfZ4qO1cDD63H6TAWPLAy')
      .then((result) => {
        showModel();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (<>
      <div className="container-fluid py-5" style={{backgroundColor:"lightgreen"}}>
<div className="row">
    <div className="col-md-6 mx-auto col-11">

    <form autoComplete="off" onSubmit={sendEmail} className=" shadow p-4 mb-5 bg-body" style={{borderRadius:"1rem"}}>
  {openModel&&<Modal/>}
    <h2 className="fw-bold fst-italic py-3"> Contact me </h2>
  <div className="mb-3">
    <label htmlFor="name" className="form-label text-muted">User name</label>
    <input type="text" className="form-control" placeholder="user name" id="name" name="name" required/>
  </div>
  <div className="mb-3">
  <label htmlFor="email" className="form-label text-muted">Email</label>
  <input type="email" id="email" className="form-control" name="email" placeholder="email address" required/> 
  </div>
  
  <div className="mb-3">
    <label htmlFor="msg" className="form-label text-muted">Message</label>
    <textarea type="text" className="form-control" placeholder="message....." id="msg" rows="5" name="message" required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
</div>

      </div>

 </> );
}
// emailjs.send("service_1jhrd1d","template_q560ol6")