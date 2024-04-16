import React from "react";

export const Services = (props) => {

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Discover our comprehensive range of grooming services tailored to meet your needs and exceed your expectations
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {" "}
                <div className="services-data">
                  <div className="service-item">
                    <div className="service-text">
                      <p>{d.title1}</p>
                      <p>{d.title2}</p>
                      <p>{d.title3}</p>
                    </div>
                    <div className="service-desc">
                    <i className={d.icon}></i>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
