import { getDatabase } from "firebase/database";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// import { database } from "../../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../config/fireBaseConfig";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [passwordError, setPasswordError] = useState("");
  const auth = getAuth(app) ;
    // creating the user -password 
    // async function onhandleSubmit(event ,email, password) {
    //     event.preventDefault();
    //     try {
    //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //       // User creation successful
    //       const user = userCredential.user;
    //       alert("User created successfully");
    //       // Additional logic if needed...
    //     } catch (error) {
    //       // User creation failed, handle error
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.error("Error creating user:", errorMessage);
    //       // Additional error handling logic if needed...
    //     }
    //   }
    async function onhandleSubmit(e,email,password) {
        //console.log(data)
        e.preventDefault() ; 
           try {
           await createUserWithEmailAndPassword(
          auth, email,password)
           history.push("/");
           alert ("User Created Successfully")
           } catch (error) {
           console.log(error)
           alert ("User created failed")
           alert(error);
         }
       }
   

  
  return (
    <form
      className="flex flex-col justify-center items-center "
      onSubmit={(e) => handleSubmit(e, email, password)}
    >
      <h1 className="flex box-border justify-center items-center w-full p-4 bg-blue-500 ">
        Register
      </h1>
      <div className="mt-20">
        {/* Name */}
        <p>Name: </p>
        <input
          className="border border-sky-500"
          {...register("firstName", {
            required: "Name is required",
            placeholder: "Name",
          })}
        />
      </div>
      {/* Email address */}
      <div>
        <p>Email Address : </p>
        <input
          className="border border-sky-500"
          {...register("email", {
            required: true,
            placeholder: "Email",
            pattern: { 
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
            }
          })}
          
        />
        {errors.email && (
            <small className="text-red"> {errors.email.message}</small>
        )}
      </div>

      {/* Password  */}
      <div>
        <p>Password</p>
        <input
          className="border border-sky-500"
          placeholder="password"
          id = 'password'
        required = {true}
          {...register("password", {
            required: "You must specify the password ",

            pattern: {
              value:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]).{8,}$/,
              message:
                "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
            },
            minLength: {
                value : 5 , 
                message : "Password must be more than 8 characters",
            },
            maxLength : { 
                value: 20,
          message: "Password must be less than 20 characters"
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      {/* Confirm Password */}
      <div>
        <p>Confirm Password</p>
        <input
        id = "confirmPassword"
          className="border border-sky-500"
          {...register("confirmPassword", {
            required: true,
            validate:  value => value === watch("password" , "")|| "the password do not match" ,
          })}
          autoComplete="off"

          type="password"
          placeholder="Confirm Password "
           required={true}
        />
        {passwordError && <p>{passwordError}</p>}
      </div>
      <button
  
        className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Register
      </button>
      <p>
        Already have an account? <a>Login here</a>
      </p>
    </form>
  );
}

export default Register;
