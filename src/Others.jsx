import React from 'react';
import { Card } from './Card';
import {Sdata} from './Sdata';


const Others = () => {
  return(
    <>
    <div className="others">
    <div className="my-0 ">
      <h1 className="text-center hp"><u> Hobbies and Passions</u></h1>
    </div>
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
          {
            Sdata.map((val, ind) => {
              return  <Card key={ind} imgsrc = {val.imgsrc} title = {val.title} explanation={val.explanation}/>

            })
          }
          </div>
        </div>
      </div>
    </div>
    </div>


 
    </>
  );
};

export {Others};