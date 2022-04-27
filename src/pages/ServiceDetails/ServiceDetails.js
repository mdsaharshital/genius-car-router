import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const url = `http://localhost:5000/service/${serviceId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h2 className="text-center my-4">
        You are about to book :{" "}
        <span className="text-danger">{service.name}</span>
      </h2>
      <div className="text-center my-5">
        <Link to={"/checkout"}>
          <button className="btn btn-success">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
