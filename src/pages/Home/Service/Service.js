import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, img, price, description, name } = service;
  const navigate = useNavigate();
  const navigateToServiceDetails = () => {
    navigate(`/service/${_id}`);
  };
  return (
    <div className="service-card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price: ${price}</h5>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigateToServiceDetails(_id)}
        className="btn btn-dark mx-auto d-block my-3"
      >
        Book Now
      </button>
    </div>
  );
};

export default Service;
