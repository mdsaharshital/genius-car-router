import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className=" col-sm-12 col-md-6 col-lg-4 g-4 gy-5">
      <div className="card mx-auto border-0" style={{ width: "18rem" }}>
        <img
          src={img}
          className="card-img-top rounded-circle"
          alt="..."
          width={"300px"}
        />
        <div className="card-body">
          <h5 className="card-title text-center my-3">{name}</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          <a href="#" className="btn btn-dark mx-auto w-1/2 mx-auto d-block">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Expert;
