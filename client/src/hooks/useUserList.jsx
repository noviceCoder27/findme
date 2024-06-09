import { useEffect, useState } from "react"
import { toastError } from "../utils/toastMessage";
import { listAllUsers } from "../apis/users";


const useUserList = () => {

    const [users,setUsers] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async() => {
            try {
                const res = await listAllUsers();
                setUsers(res);
                setLoading(false);
            } catch(err) {
                toastError("Error fetching user details");
                setLoading(false);
            }
        }
        fetchDetails();
    },[]);

    return {users,loading};
}

export default useUserList
