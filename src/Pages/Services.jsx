import React, { useState } from "react";
import ServiceCard from "../Components/ServiceCard";
import ServiceAPI from "../API/ServiceAPI"

const Services = () => {
   const[service,setService]= useState(ServiceAPI)

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Our Services
          </h5>
          <h1 className="mb-5">Explore Our Services</h1>
        </div>
        <div className="row g-4">{service.map((curElem,index)=>{
            return(
                <ServiceCard service={curElem} key={index} />
            )
        })}
          
        </div>
      </div>
    </div>
  );
};

export default Services;
