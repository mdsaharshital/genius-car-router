import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      <h1 className="text-center my-3">Add Service here</h1>
      <div className="col-10 col-md-8 col-lg-6 mx-auto">
        <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-2"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input
            className="mb-2"
            placeholder="Price"
            type="number"
            {...register("price")}
          />
          <input
            className="mb-2"
            placeholder="Image URL"
            type="text"
            {...register("img")}
          />
          <textarea
            className="mb-2"
            placeholder="Description"
            {...register("description")}
          />
          <input
            className="mb-2 btn btn-success"
            placeholder=""
            type="submit"
            value="Add service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
