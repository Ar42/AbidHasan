import React from 'react';

const Education = () =>{
    return(
        <> 
        <div className="container-fluid educationBody">
<table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Exam Name</th>
      <th scope="col">Result</th>
      <th scope="col">Year</th>
      <th scope="col">Board</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>PSC</td>
      <td>First Division</td>
      <td>2009</td>
      <td>Dhaka</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>JSC</td>
      <td>GPA-5.00</td>
      <td>2012</td>
      <td>Dhaka</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>SSC</td>
      <td>GPA-5.00</td>
      <td>2015</td>
      <td>Dhaka</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>HSC</td>
      <td>GPA-5.00</td>
      <td>2017</td>
      <td>Dhaka</td>
    </tr>
    
  </tbody>
</table>

<div className="eduNow">
    <p className="text-center eduNow">University</p>
</div>

<table className="table table-dark table-striped">
<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Subject</th>
      <th scope="col">University</th>
      <th scope="col">Session</th>
    </tr>
  </thead>
    <tbody>
    <tr>
      <th scope="row">5</th>
      <td>BSC</td>
      <td>Software Engineering</td>
      <td>(2018-2021)</td>
    </tr>
    </tbody>
</table>
        </div>
        </>
    )
}
export {Education};