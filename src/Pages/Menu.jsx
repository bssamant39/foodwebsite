import React, { useState } from "react";
import MenuAPI from "../API/MenuAPI";

const Menu = () => {
  const [menu, setMenu] = useState(MenuAPI);
  const CategoryNames=[...new Set(MenuAPI.map((curElem)=>{
    return curElem.category
  }))]
  // console.log("Category Names",CategoryNames);
  const FilterItems=(categoryitem)=>{
    const updateditem=MenuAPI.filter((curElem)=>{
        return curElem.category===categoryitem

    })
    return(
        setMenu(updateditem)
    )
  }
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Food Menu
          </h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <div
          className="tab-className text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            {CategoryNames.map((curElem, index) => {
              
              return (
                <li className="nav-item" key={index}>
                  <a
                    className="d-flex align-items-center text-start mx-3 ms-0 pb-3 "
                    data-bs-toggle="pill"
                    href="-1"
                  >
                    <i className="fa fa-coffee fa-2x text-primary"></i>
                    <div className="ps-3">
                      <small className="text-body">Popular</small>
                      <h6 className="mt-n1 mb-0" onClick={()=>FilterItems(curElem)}>{curElem}</h6>
                    </div>
                  </a>
                </li>   
              );
            })}
          </ul>

          <div className="tab-pane fade show p-0">
            <div className="row g-4">
              {menu.map((curElem, index) => {
                const { id, name, category ,img,price,description   } = curElem;
                return (
                  <div className="col-lg-6" key={id}>
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={img}
                        alt=""
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>{name}</span>
                          <span className="text-primary">{price} Rs.</span>
                        </h5>
                        <small className="fst-italic">
                          {description}
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
