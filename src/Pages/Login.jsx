import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Colloquy from "../Component/Colloquy";
import toast, { Toaster } from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase.config";
import { FcGoogle } from "react-icons/fc";
import { getDatabase, ref, set } from "firebase/database";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const db = getDatabase();

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setUserInfo((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  let handlePassword = (e) => {
    setUserInfo((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userInfo.email && userInfo.password) {
      signInWithEmailAndPassword(auth, userInfo.email, userInfo.password, userInfo.photoURL)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.emailVerified) {
            navigate("/"),
              toast.success("Welcome to Colloquy");
          } else {
            toast.error("Sorry! This Account is not Verified", {
              duration: 6000,
            });
          }
          setUserInfo({
            email: "",
            password: "",
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Invalid Email & Password");
            setUserInfo({
              email: "",
              password: "",
            });
          }
        });
    } else {
      toast.error("Email & Password is required");
    }
  };

  const handleLoginGoole = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        set(ref(db, 'users/' + user.uid), {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }).then(() => {
          navigate("/");
        })
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
      });
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
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "18px",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="w-130 bg-sky-800/50 p-10 border-2 border-[#ffffff46] rounded-2xl backdrop-blur-md relative m-50 ml-80 z-10">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin}>
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
              className="text-xl text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-35px]"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="relative w-full h-12.5 border-b-2 border-[#000b13] my-8 mb-2">
            <FaRegEyeSlash className="absolute right-2 text-2xl top-4" />
            <input
              value={userInfo.password}
              onChange={handlePassword}
              className="absolute w-full text-white bg-transparent h-full text-xl outline-none peer"
              type="password"
              id="password"
            />
            <label
              className="text-xl text-black font-medium duration-400 top-3 absolute peer-focus:translate-y-[-35px] peer-valid:translate-y-[-35px]"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div className="flex justify-between mt-5">
            <label className="text-xl" htmlFor="">
              <input className="mr-1" type="checkbox" />
              Remember me
            </label>
            <a className="hover:underline text-xl" href="">
              Forgot password
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-5 my-5 bg-black rounded-md text-3xl text-white font-semibold"
          >
            Login
          </button>
          <button
            onClick={handleLoginGoole}
            type="submit"
            className="w-full py-3 mb-5 bg-black/50 border-2 border-white/40 rounded-md text-xl text-white font-semibold cursor-pointer flex items-center justify-center"
          >
            <FcGoogle className="mr-5 text-3xl" />
            Sign in with Google
          </button>
          <div>
            <p className="text-center text-xl">
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="font-semibold hover:underline ml-2"
                href=""
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Colloquy />
    </div>
  );
};

export default Login;
