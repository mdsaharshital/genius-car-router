import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>This is service details of : {serviceId}</h2>
      <div className="text-center">
        <Link to={"/checkout"}>
          <button className="btn btn-success">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
