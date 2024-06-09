import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useState } from "react"
import { checkPassword, checkUserName } from "../utils/validation/login";
import { toastError, toastSuccess } from "../utils/toastMessage";
import { login } from "../apis/users";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate("/");
  const [credentials,setCredentials] = useState({userName: "", password: ""});
  const userLogin = async() => {
    if(!checkUserName(credentials.userName)) {
     return; 
    }
    if(!checkPassword(credentials.password)) {
      return;
    }
    try {
      const data = await login(credentials);
      toastSuccess("Successfully logged in");
        localStorage.setItem("token",data.token);
        localStorage.setItem("role",data.role);
        setTimeout(() => {
            navigate("/");
        },1000);
    } catch(err) {
      toastError(err?.response?.data?.msg || "Error logging in");
    }
  }
 
  return (
    <div className = "flex flex-col">
        <Navbar />
        <main className="flex justify-center">
          <div className="mt-10 max-sm:w-[90%] max-lg:w-[70%] w-[40%] p-5 rounded-xl flex flex-col relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black rounded-xl opacity-20 -z-10"></div>
            <h3 className="text-[3rem] font-bold text-blue-400 text-center">Sign in</h3>
            <div className="flex flex-col gap-2">
              <label htmlFor = "username" className="font-semibold text-white">Enter Username:</label>
              <input value = {credentials.userName} onChange = {(e) => setCredentials(prev => ({...prev,userName:e.target.value}))} id = "username" className="p-2 rounded-lg"/>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor = "password" className="font-semibold text-white">Enter Password:</label>
              <input value = {credentials.password} onChange = {(e) => setCredentials(prev => ({...prev,password:e.target.value}))} id = "password" className="p-2 rounded-lg" type = "password" />
            </div>
            <button 
            className="p-2 px-10 mt-5 ml-auto mr-auto font-semibold text-white bg-red-500 rounded-lg w-fit" 
            onClick = {userLogin}>
              Sign in
            </button>
            <p className="mt-5 text-white">Don't have an account? <span className="text-blue-400"><Link to = "/create">Create Account</Link></span></p>
          </div>
        </main>
    </div>
  )
}

export default Login
