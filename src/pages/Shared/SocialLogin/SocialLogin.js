import React from "react";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <div className="px-3">OR</div>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      <div className="">
        <button className="w-50 btn btn-outline-secondary mx-auto d-block my-2">
          <BsGoogle /> Sign in with Google
        </button>
        <button className="w-50 btn btn-outline-secondary mx-auto d-block my-2">
          <BsFacebook /> Sign in with Facebook
        </button>
        <button className="w-50 btn btn-outline-secondary mx-auto d-block my-2">
          <GoMarkGithub /> Sign in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
