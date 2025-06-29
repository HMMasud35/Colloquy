import React, { useState } from "react";
import { FaRegEyeSlash, FaUserTie } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import Colloquy from "../Component/Colloquy";
import toast, { Toaster } from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { app, auth } from "../firebase.config";
import { useDispatch } from 'react-redux'
import { userLoginInfo } from '../Slices/userSlice';
import { getDatabase, ref, set } from "firebase/database";

const Sign_up = () => {
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const db = getDatabase();

  const navigate = useNavigate();

  const handleUser = (e) => {
    setUserInfo((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  let handleEmail = (e) => {
    setUserInfo((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  let handlePassword = (e) => {
    setUserInfo((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      toast.error("All fields are required");
    } else if (!/^\S+@\S+\.\S+$/.test(userInfo.email)) {
      toast.error("Invalid Email address");
    } else if (
      // (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(userInfo.password))
      ""
    ) {
      toast.error("Tips for a good password");
    } else {
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            updateProfile(auth.currentUser, {
              displayName: userInfo.name,
              photoURL: "/assets/image/pic.jpg",
            })
              .then(() => {
                const user = userCredential.user;
                dispatch(userLoginInfo(user))
                setUserInfo({
                  name: "",
                  email: "",
                  password: "",
                });

                toast.success(
                  " Success! \n Please check Email \n & Verify your Account",
                  {
                    duration: 6000,
                  }
                );
                set(ref(db, 'users/' + user.uid), {
                  name: user.displayName,
                  email: user.email,
                  photo: user.photoURL,
                }).then(() => {
                  navigate("/login");
                })
              })
              .catch((error) => { });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.includes("auth/email-already-in-use")) {
            toast.error("Email already in use");
            setUserInfo({
              name: "",
              email: "",
              password: "",
            });
          }
        });
    }
  };

  return (
    <div className="flex">
      <Toaster
        position="top-left"
        reverseOrder={false}
        gutter={10}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          removeDelay: 1000,
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "18px",
          },

          // Default options for specific types
          success: {
            duration: 5000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="w-130 bg-sky-800/50 p-10 border-2 border-[#ffffff46] rounded-2xl backdrop-blur-md relative m-50 ml-80">
        <h1 className="text-4xl font-bold text-center">Sign up</h1>
        <form onSubmit={handleSignup}>
          <div className="relative w-full h-12.5 border-b-2 border-[#000b13] my-10">
            <FaUserTie className="absolute right-2 text-2xl top-4" />
            <input
              value={userInfo.name}
              onChange={handleUser}
              className="absolute w-full text-white/80 bg-transparent h-full text-2xl outline-none peer"
              type="text"
              id="text"
              name="text"
            />
            <label
              className="text-xl text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-35px] peer-valid:translate-y-[-35px]"
              htmlFor="text"
            >
              User
            </label>
          </div>
          <div className="relative w-full h-12.5 border-b-2 border-[#000b13] my-8">
            <MdEmail className="absolute right-2 text-2xl top-4" />
            <input
              value={userInfo.email}
              onChange={handleEmail}
              className="absolute w-full text-white/80 bg-transparent h-full text-2xl outline-none peer"
              type="email"
              id="email"
            />
            <label
              className="text-xl text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-35px] peer-valid:translate-y-[-35px]"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="relative w-full h-12.5 border-b-2 border-[#000b13] mt-8.5 mb-2">
            <FaRegEyeSlash className="absolute right-2 text-2xl top-4" />
            <input
              value={userInfo.password}
              onChange={handlePassword}
              className="absolute w-full text-white/80 bg-transparent h-full text-2xl outline-none peer"
              type="password"
              id="password"
            />
            <label
              className="text-xl text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-35px] peer-valid:translate-y-[-35px]"
              htmlFor="password"
            >
              Create Password
            </label>
          </div>
          <div className="flex justify-between mt-5">
            <label className="text-xl" htmlFor="">
              <input className="mr-1" type="checkbox" />I agree to the terms &
              conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-5 my-5 bg-black rounded-md text-3xl text-white font-semibold cursor-pointer"
          >
            Sign up
          </button>
          <div>
            <p className="text-center text-xl">
              Already have an account{" "}
              <Link
                to={"/login"}
                className="font-semibold hover:underline ml-2"
                href=""
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Colloquy />
    </div>
  );
};

export default Sign_up;
