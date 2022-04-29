import React from "react";
import useServices from "../../hooks/useServices";

const ManageService = () => {
  const [services, setServices] = useServices();
  const handleDeleteService = (id) => {
    const proceed = window.confirm("are you sure?");
    if (proceed) {
      console.log("delete id", id);
      const url = `https://powerful-forest-43309.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const rest = services.filter((service) => service._id !== id);
            setServices(rest);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-center">Manage Service</h1>
      <div className="col-10 col-md-8 col-lg-6 mx-auto">
        <ol>
          {services.map((service) => (
            <li key={service._id} className="text-center my-3">
              Service Name:{" "}
              <span className="text-success">{service.name} </span>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteService(service._id)}
              >
                -X-
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ManageService;
