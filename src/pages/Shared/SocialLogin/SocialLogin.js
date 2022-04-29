import React from "react";
import { BsGoogle } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import useToken from "../../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, GoogleLoading, GoogleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  let location = useLocation();
  const [token] = useToken(googleUser || githubUser);

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  if (GoogleError || githubError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {GoogleError?.message}
          {githubError?.message}
        </p>
      </div>
    );
  }
  if (token) {
    navigate(from, { replace: true });
  }
  if (GoogleLoading || githubLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <div className="px-3">OR</div>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElement}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="w-75   btn btn-outline-secondary mx-auto d-block my-2"
        >
          <BsGoogle /> Sign in with Google
        </button>
        {/* <button className="w-100  btn btn-outline-secondary mx-auto d-block my-2">
          <BsFacebook /> Sign in with Facebook
        </button> */}
        <button
          onClick={() => signInWithGithub()}
          className="w-75  btn btn-outline-secondary mx-auto d-block my-2"
        >
          <GoMarkGithub /> Sign in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
