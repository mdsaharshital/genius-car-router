import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import auth from "./../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, ForgetError] =
    useSendPasswordResetEmail(auth);
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading />;
  }
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("email Sent");
    } else {
      toast("Please enter your email adress");
    }
  };
  return (
    <div className="container mx-auto w-50 my-4">
      <h1 className="text-center">Please Login</h1>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          className="w-50 mx-auto d-block my-2"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      {error && <p className="text-danger">{error.message}</p>}
      {loading && <p className="text-success">Loading. Please wait....</p>}
      {
        <p>
          New to Genius Car?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-primary"
            style={{ cursor: "pointer" }}
          >
            Please Register
          </span>
        </p>
      }
      {
        <p>
          Forget Password?{" "}
          <span
            onClick={handleForgetPassword}
            className="text-primary"
            style={{ cursor: "pointer" }}
          >
            Reset Now
          </span>
        </p>
      }
      <ToastContainer />
      <SocialLogin />
    </div>
  );
};

export default Login;
