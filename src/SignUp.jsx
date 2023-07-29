import React, {useState} from "react";
import "../App.css";

const SignUp = () => {
    const [signIn, toggle] = React.useState(true);

    

    return(
        
         <div className=" rounded-lg shadow-md relative overflow-hidden w-[678px] h-[400px] ">
        <div className=" absolute top-0 transition duration-[0.6] ease-in left-0 w-1/2 opacity-0 z-1
        {{ signIn? ' -translate-x-full opacity-1 z-[5]':null}}
        " signinIn={signIn} >
            <form className=" bg-white flex items-center justify-center p-0 pl-12 pr-12 h-full text-center" >
                <h1>Create Account</h1>
                <input className=" border-none p-3 pl-4 pr-4 mt-[6px] mb-[6px] w-full"  name="name" type='text' placeholder='Name' />
                <input className=" border-none p-3 pl-4 pr-4 mt-[6px] mb-[6px] w-full"  name="email" type='email' placeholder='Email' />
                <input className=" border-none p-3 pl-4 pr-4 mt-[6px] mb-[6px] w-full"  name="password" type='password' placeholder='Password' />
                <button className=" rounded-[20px] h-4 p-3 pl-[45px] pr-[45px] transform duration-75 uppercase bg-black">Sign Up</button>
            </form>
        </div>

        <div className=" absolute top-0 h-full transition duration-500 ease-in left-0 w-1/2 z-[2]
        {{ signIn? ' -translate-x-full':null }}" signinIn={signIn}>
             <form className=" bg-white flex items-center justify-center p-0 pl-12 pr-12 h-full text-center" >
                 <h1 className=" m-0">Sign in</h1>
                 <input className=" border-none p-3 pl-4 pr-4 mt-[6px] mb-[6px] w-full"  name="email" type='email' placeholder='Email' />
                 <input className=" border-none p-3 pl-4 pr-4 mt-[6px] mb-[6px] w-full"  name="password" type='password' placeholder='Password' />
                 <a className=" text-[14px] mt-4 mb-4" href='#'>Forgot your password?</a>
                 <button className=" rounded-[20px] h-4 p-3 pl-[45px] pr-[45px] transform duration-75 uppercase bg-black">Sign In</button>
             </form>
        </div>

        <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transform duration-[0.6s] ease-in-out z-50
        {{signinIn? '-translate-x-full':null }}" signinIn={signIn}>
            <div className=" relative -left-full h-full w-full translate-x-0 transform duration-[0.6s] ease-in-out
            {{signinIn? '-translate-x-2/4' :null }}" signinIn={signIn}>

            <div className=" absolute flex items-center justify-center pl-10 pr-10 text-center top-0 h-full w-1/2 translate-x-0 transform duration-[0.6s] ease-in-out -translate-x-2/5
            {{signinIn? '-translate-x-0':null }}" signinIn={signIn}>
                <h1 className=" m-0">Welcome Back!</h1>
                <p className=" h-4 ml-[20px] mr-[30px]">
                    To keep connected with us please login with your personal info
                </p>
                <button className="rounded-[20px] h-4 p-3 pl-[45px] pr-[45px] transform duration-75 uppercase bg-transparent" onClick={() => toggle(true)}>
                    Sign In
                </button>
                </div>

                <div className="absolute flex items-center justify-center pl-10 pr-10 text-center top-0 h-full w-1/2 translate-x-0 transform duration-[0.6s] ease-in-out" signinIn={signIn}>
                  <h1 className=" m-0">Hello, Friend!</h1>
                  <p className=" h-4 ml-[20px] mr-[30px]">
                      Enter Your personal details and start journey with us
                  </p>
                      <button className="rounded-[20px] h-4 p-3 pl-[45px] pr-[45px] transform duration-75 uppercase bg-transparent" onClick={() => toggle(false)}>
                          Sign Up
                      </button> 
                </div>

            </div>
        </div>
       
        
    </div>
  
     
    )
}

export default SignUp;