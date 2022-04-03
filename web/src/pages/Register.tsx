import React from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../hooks";

const Register = () => {
  const [registerForm, setRegisterForm] = React.useState({
    email: "",
    password: "",
    fullname: "",
  });
  const { register, loading, error } = useRegister();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register({ variables: { ...registerForm } });
  };

  return (
    <div className="w-full min-h-screen bg-gray-300 flex justify-center items-center">
      <div className="min-w-min h-min p-4 rounded-lg bg-white shadow-md">
        <div className="flex flex-col mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Register to your account
          </h1>
          <span className="text-sm">
            Already a member?{" "}
            <Link to="/login" className="underline text-blue-600">
              Log in
            </Link>
          </span>
        </div>
        <span className="text-sm text-red-500">{error?.message}</span>
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <label
            htmlFor="fullname"
            className="flex flex-col gap-1 text-gray-800 text-base"
          >
            Full name:
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={registerForm.fullname}
              onChange={handleFormChange}
              className="w-96 h-11 rounded-md outline-none border border-gray-600 pl-2"
              placeholder="Your full name"
              required
            />
          </label>
          <label
            htmlFor="email"
            className="flex flex-col gap-1 text-gray-800 text-base"
          >
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={registerForm.email}
              onChange={handleFormChange}
              className="w-full h-11 rounded-md outline-none border border-gray-600 pl-2"
              placeholder="Your email"
              required
            />
          </label>
          <label
            htmlFor="password"
            className="flex flex-col gap-1 text-gray-800 text-base"
          >
            Password:
            <input
              type="password"
              id="password"
              name="password"
              value={registerForm.password}
              onChange={handleFormChange}
              className="w-full h-11 rounded-md outline-none border border-gray-600 pl-2"
              placeholder="Your password"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full h-11 bg-brown rounded-md text-white"
          >
            {loading ? "Loading" : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
