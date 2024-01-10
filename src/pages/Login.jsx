import React, { useEffect } from "react";

import BannerImg from "../assets/signin.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();
  const BASE_URL = import.meta.env.BASE_URL;

  const onSubmit = (data) => {
    axios
      .post(`http://localhost:3000/auth/login`, data)
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard/home");
      })
      .catch(function (error) {
        toast.error(error?.response?.data?.message);
      });
  };

  const guestUser = (data) => {
    axios
      .post("http://localhost:4000/api/user/login", data)
      .then(function (response) {
        console.log(response);
        toast.success(response?.data?.message);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      });
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Log In
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don't have an account?
              <Link
                to="/register"
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email Address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is Required",
                        },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Input Valid Email",
                        },
                      })}
                    ></input>
                    <p className="text-red-400 ">{errors?.email?.message} </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                      })}
                    ></input>
                    <p className="text-red-400 ">
                      {errors?.password?.message}{" "}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-extrathin leading-7 text-white hover:bg-black/80">
                    Get Started
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:flex h-[1000px] w-full">
          <img
            className="mx-auto h-full w-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/1200px-Black_colour.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
