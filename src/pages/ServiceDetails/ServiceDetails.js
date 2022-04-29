import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  return (
    <div>
      <h2 className="text-center my-4">
        You are about to book :{" "}
        <span className="text-danger">{service.name}</span>
      </h2>
      <div className="text-center my-5">
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-success">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
