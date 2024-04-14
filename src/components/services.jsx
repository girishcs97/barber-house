import React, { useState } from "react";

export const Services = (props) => {

  const [haircutHover, setHaricutHover] = useState(false);
  const [shavingHover, setShavingHover] = useState(false);
  const [beardHover, setBeardHover] = useState(false);
  const [facialHover, setFacialHover] = useState(false);
  const [coloringHover, setColoringHover] = useState(false);
  const [trendHover, setTrendHover] = useState(false);


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
                <>
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
