import { useEffect, useState } from "react"
import { toastError } from "../utils/toastMessage";
import { getUserDetails } from "../apis/users";


const useUserInfo = () => {

    const [details,setDetails] = useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        const fetchDetails = async() => {
            try {
                const res = await getUserDetails("mugdha");
                setDetails(res);
                setLoading(false);
            } catch(err) {
                toastError("Error fetching user details");
                setLoading(false);
            }
        }
        fetchDetails();
    },[]);

    return {details,loading};
}

export default useUserInfo
