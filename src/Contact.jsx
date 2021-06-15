import React, { useState } from 'react';

const Contact = () => {
  const [data,setData] = useState({
    fullname: "" ,
    mobile: "", 
    email: "", 
    message: ""
  });
  
  const inputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return{
        ...preVal, 
        [name] : value,
      }
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${data.fullname} for your feedback.`)
  };

  return(
    <>
    <div className="my-5">
    <h1 className="text-center">Welcome to Contact Page </h1>
    </div>
    <div className="container contact_div">
      <div className="row">
      <div className="col-md-6 col-10 mx-auto">

      <form onSubmit={formSubmit}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Fullname
        </label>
        <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        name="fullname"
        value={data.fullname}
        onChange={inputEvent}
        placeholder="Enter your fullname"
        required
        />
      </div>


      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Mobile No.
        </label>
        <input
        type="number"
        class="form-control"
        id="exampleFormControlInput1"
        name="mobile"
        value={data.mobile}
        onChange={inputEvent}
        placeholder="Enter you mobile no."
        required
        />
      </div>


      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
        Email address
        </label>
        <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        name="email"
        value={data.email}
        onChange={inputEvent}
        placeholder="name@example.com" 
        required
        />
      </div>






      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea 
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        name="message"
        value={data.message}
        onChange={inputEvent}
        required>
        </textarea>
      </div>

      <div class="col-12">
        <button class="btn btn-outline-success" type="submit">Submit form</button>
      </div>
      
      </form>


      </div>
      </div>
    </div>
    </>
  );
};

export {Contact};