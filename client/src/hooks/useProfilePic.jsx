import { useEffect, useState } from "react"
import { toastError } from "../utils/toastMessage";
import { getProfilePic } from "../apis/users";


const useProfilePic = (userName) => {

    const [profilePicture,setProfilePicture] = useState('');
    
    useEffect(() => {
        const fetchDetails = async() => {
            try {
                const res = await getProfilePic(userName);
                setProfilePicture(res);
            
            } catch(err) {
                toastError("Error fetching user profile picture");
            }
        }
        fetchDetails();
    },[userName]);

    return profilePicture;
}

export default useProfilePic
