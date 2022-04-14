import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
  };
  if (user) {
    console.log(user);
  }
  if (loading || updating) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto w-50 my-4">
      <h1 className="text-center">Please Register</h1>
      <Form onSubmit={handleRegisterSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            className={agree ? "text-success" : "text-danger"}
            label="Accept Terms & condition"
          />
        </Form.Group>
        <Button
          className="w-50  mx-auto d-block my-2"
          variant="primary"
          type="submit"
          disabled={!agree}
        >
          Register
        </Button>
      </Form>
      <p>
        Already have account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-primary"
          style={{ cursor: "pointer" }}
        >
          Please Login
        </span>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
