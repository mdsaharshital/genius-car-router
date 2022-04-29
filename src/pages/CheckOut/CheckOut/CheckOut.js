import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetails from "./../../../hooks/useServiceDetails";

const CheckOut = () => {
  const [user] = useAuthState(auth);
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    axios
      .post("https://powerful-forest-43309.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Your order is booked");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <h1 className="text-center ">
        Payment Now of <span className="text-danger"> {service.name}</span>
      </h1>
      <div className="col-11 col-md-8 col-lg-6 mx-auto">
        <form onSubmit={handlePlaceOrder}>
          <input
            className="mb-2 p-2 w-100"
            type="text"
            name="name"
            value={user?.displayName}
            placeholder="name"
            readOnly
            required
            disabled
          />
          <input
            className="mb-2 p-2 w-100"
            type="email"
            name="email"
            value={user?.email}
            placeholder="email"
            readOnly
            required
            disabled
          />
          <input
            className="mb-2 p-2 w-100"
            type="text"
            name="service"
            value={service.name}
            placeholder="service"
            readOnly
            required
            disabled
          />
          <input
            className="mb-2 p-2 w-100"
            type="text"
            name="address"
            placeholder="address"
            required
          />
          <input
            className="mb-2 p-2 w-100"
            type="number"
            name="phone"
            placeholder="phone"
            required
          />
          <input
            className="btn btn-outline-primary"
            type="submit"
            value="Checkout Now"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
