import React from 'react'
import { useForm } from 'react-hook-form'

function Register() {
    const { 
        register, 
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data ,e) => { 
        // handle form submission 
        console.log(data,e) ; 

    }
    const onError = (errors,e) => { 
        console.log(errors,e)
    }
  return (

    <form className='flex flex-col justify-center items-center ' 
         onSubmit={handleSubmit(onSubmit)}
    >
        <h1 className='flex box-border justify-center items-center w-full p-4 bg-blue-500 '>
            Login
            </h1>
        
        {/* Email address */}
        <div>
            <p>Email Address : </p>
        <input className='border border-sky-500' 
            {...register("email",{
                required : true,
                placeholder : "Email"
            })}
            />
        </div>

        {/* Password  */}
        <div>
            <p>Password</p>
            <input className='border border-sky-500' 
                {...register ("password", {
                    required : true,
                    placeholder : "Password",
                    pattern : { 
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]).{8,}$/,
                    },
                   
                })}
            />
        </div>
 
    </form>
  )
}

export default Register