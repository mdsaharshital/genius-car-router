import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrder = async () => {
      const email = user?.email;
      const url = `https://powerful-forest-43309.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrders(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrder();
  }, [user]);
  return (
    <div className="text-center">
      <h1 className="text-center">Your orders: {orders.length}</h1>
      {orders.map((order) => (
        <p key={order._id}>
          {order.service} :: {order.email}
        </p>
      ))}
    </div>
  );
};

export default Orders;
