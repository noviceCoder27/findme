import { useState } from "react";
import Navbar from "../components/Navbar"
import { CiSearch } from "react-icons/ci";
import { getUserDetails } from "../apis/users";
import { toastError } from "../utils/toastMessage";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";


const Home = () => {

    const [user,setUser] = useState(null);
    const [userName,setUserName] = useState("");
    const [loading,setLoading] = useState(false);

    const fetchUser = async() => {
        setLoading(true);
        setUser(null);
        try {
            const res = await getUserDetails(userName);
            setUser(res);
            setLoading(false);
        } catch(err) {
            toastError("Error fetching user details");
            setLoading(false);
        }
    }
  
    return (
        <div className = "flex flex-col">
            <Navbar />
            <main className="flex flex-col items-center">
                <section className="mt-5 w-[50%] relative">
                    <input 
                    type="text" className="w-full p-5 rounded-xl " 
                    placeholder= "Search Registered Username"
                    onChange = {(e) => setUserName(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") fetchUser()
                    }}/>
                    <button className="absolute right-0 h-full p-5 font-bold text-white bg-blue-500 rounded-tr-xl rounded-br-xl text-[1.5rem]" onClick = {fetchUser}>
                        <CiSearch />
                    </button>
                </section>
                <section>
                    {loading && 
                    <div className="mt-20">
                        <Loader />
                    </div>}
                    {!loading && !user && 
                    <div className="mt-20 text-center">
                        <p className="mb-5 text-white font-semibold text-[1.5rem]">Register Yourself</p>
                        <Link to = "/create" className="p-2 px-4 bg-white rounded-md hover:bg-slate-100">Create User</Link>
                    </div>}
                    {user && 
                    <div className="flex items-center gap-5 p-10 mt-20 text-white border-2 border-white rounded-md cursor-default">
                        <div className="text-[4rem]">
                            <FaUserCircle />
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <p>{user.firstName}</p>
                                <p>{user.lastName}</p>
                            </div>
                            <div className="flex">
                                <p>#</p>
                                <p>{user.userName}</p>  
                            </div>
                            <Link to = {`/users/${userName}`} className="relative px-2 py-1 bg-blue-500 rounded-md top-5 hover:bg-blue-700">View Details</Link>
                        </div>
                    </div>
                    }
                </section>
            </main>
        </div>
    )
}

export default Home
