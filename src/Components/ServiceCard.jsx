import React from "react";

const ServiceCard = ({service}) => {
   
  return (
    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-item rounded pt-3">
        <div className="p-4">
          <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
          <h5>{service.service}</h5>
          <p>
            {service.description.slice(0,100)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
