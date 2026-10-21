import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Login.css";
import { useForm } from "react-hook-form"
import { signin, signup } from "../../firebase";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";


const Login = () => {

  const [signState, setSignState] = useState("Sign In")
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset} = useForm()


  const onSubmit = async(data) => {

    const {name, email, password} = data

    if(signState === "Sign In") {
      await signin(email, password)
      reset({password : ""});
      
    } else {
      await signup(name, email, password)
      reset();
      
    }
  }



  return (

    <div className="login">
      {/* Netflix logo */}
      <img src={logo} alt="Netflix-logo" />

      {/* Signup Form */}
      <div className="login-form">
        <h1>{signState}</h1>
        
        {/* form submit */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Input fields with condition */}
         {signState === "Sign In" ? <></> : (
          <>
             <input type='text' placeholder='Enter your name'disabled={isSubmitting} {...register("name", { required: { value: true, message: "name is required" }, minLength: { value: 2, message: "Min Length is 2" }, maxLength: { value: 30, message: "Max Length is 30" }})}/>
             {errors.name && <span style={{color : "red"}}>{errors.name.message}</span>}
             </>
           )}
          
           <>
            <input type='email' placeholder='example@gmail.com' disabled={isSubmitting} {...register("email", { required: { value: true, message: "email is required" }, minLength: { value: 8, message: "Min Length is 8" }, maxLength: { value: 30, message: "Max Length is 30" }})}/>
           {errors.email && <span style={{color : "red"}}>{errors.email.message}</span>}
           </>

           <div className="password-wrapper">
            <input type={showPassword ? "text" : "password"} placeholder='********' disabled={isSubmitting} {...register("password", { required: { value: true, message: "password is required" }, minLength: { value: 6, message: "Min Length is 6" }, maxLength: { value: 30, message: "Max Length is 30" }})}/>
            <span onClick={()=>setShowPassword(!showPassword)} className="eye-icon">{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}</span>
           {errors.password && <span style={{color : "red"}}>{errors.password.message}</span>}
           </div>
           
          {/* Submit button */}
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Processing..." : signState === "Sign In" ? "Sign In" : "Sign Up"}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        {/* switch signup to signin link */}
        <div className="form-switch">
          {signState === "Sign In" ? 
          <p>New to Netflix ? <span onClick={()=>setSignState("Sign Up")}>Sign Up Now</span></p> :
          <p>Already have Account ? <span onClick={()=>setSignState("Sign In")}>Log In Now</span></p>}
        </div>
      </div>

    </div>
  );
};

export default Login;
