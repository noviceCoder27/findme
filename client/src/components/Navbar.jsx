import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"


const Navbar = () => {
    const [role,setRole] = useState(localStorage.getItem("role"));
    const navigate = useNavigate();
    const {pathname} = useLocation();
    return (
        <nav className="flex flex-wrap items-center justify-between gap-5 p-5 px-10">
            <div>
                <Link to = "/">
                    <p className="text-blue-400 text-[2rem] font-bold">find.me</p>
                    <p className="font-semibold text-white">Your Brand Identity</p>
                </Link>
            </div>
            <div className="flex gap-5 font-bold text-white">
                <div className="border-b-2 border-b-transparent hover:border-b-white">
                    <Link to = "/create">Create Account</Link>
                </div>
                {role === "admin" && <div className="border-b-2 border-b-transparent hover:border-b-white">
                    <Link to = "/users">List Users</Link>
                </div>}
                {role ? 
                <div className="border-b-2 cursor-pointer border-b-transparent hover:border-b-white">
                    <span onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("role");
                        setRole(null);
                        if(pathname === "/users") navigate("/");
                    }}>Sign Out</span>
                </div>
                : <div className="border-b-2 border-b-transparent hover:border-b-white">
                    <Link to = "/login">Sign in</Link>
                </div>}
                
            </div>
            
        </nav>
    )
}

export default Navbar
