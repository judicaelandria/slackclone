import React from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks";

const Login = () => {
  const [loginForm, setLoginForm] = React.useState({
    email: "",
    password: "",
  });
  const { login, loading } = useLogin();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ variables: { ...loginForm } });
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="min-w-min h-min p-8 rounded-lg bg-white shadow-md">
        <div className="flex flex-col mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Log in to your account
          </h1>
          <span className="text-sm">
            Doesn't have account yet?{" "}
            <Link to="/register" className="underline text-blue-600">
              Sign me up
            </Link>
          </span>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <label
            htmlFor="email"
            className="flex flex-col gap-1 text-gray-800 text-base"
          >
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={loginForm.email}
              onChange={handleFormChange}
              className="w-96 h-11 rounded-md outline-none border border-gray-600 pl-2"
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
              value={loginForm.password}
              onChange={handleFormChange}
              className="w-full h-11 rounded-md outline-none border border-gray-600 pl-2"
              placeholder="Your password"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full h-11 bg-brown rounded-md text-white"
            disabled={loading}
          >
            {loading ? "Loading" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
