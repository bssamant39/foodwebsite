import React, { useEffect, useState } from "react";
const API = "https://api.github.com/users";
const Team = () => {
    const [user,setUser]=useState([])
  const getTeam = async (API) => {
    try {
      const res = await fetch(API);
      const resData = await res.json();
    //   console.log(resData);
      setUser(resData)
    } catch (error) {}
  };
  useEffect(() => {
    getTeam(API);
  }, []);
  return (
    <div className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Team Members
          </h5>
          <h1 className="mb-5">Our Master Chefs</h1>
        </div>
        <div className="row g-4">
          {user.map((curElem,index)=>{
            const {login,id,avatar_url,type,html_url}=curElem
            return(
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={id}>
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src={avatar_url} alt="" />
              </div>
              <h5 className="mb-0">{login}</h5>
              <small>{type}</small>
              <div className="d-flex justify-content-center mt-3">
                <a className="btn btn-square btn-primary mx-1" href={html_url}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-primary mx-1" href={html_url}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square btn-primary mx-1" href={html_url}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
            )
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Team;
