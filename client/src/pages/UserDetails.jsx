import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import useProfilePic from "../hooks/useProfilePic";
import useUserInfo from "../hooks/useUserInfo"
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { formatDate } from './../utils/timeFormat';
import Loader from "../components/Loader";
import InfoCard from "../components/InfoCard";
import parse from 'html-react-parser';


const UserDetails = () => {
    const {userName} = useParams();
    const {details,loading} = useUserInfo(userName);
    const profilePicture = useProfilePic(userName);  
    const displayQualifications = details?.qualifications?.length ? details?.qualifications.map((qualification,index) => (
        <InfoCard 
        key = {index} 
        isCareer={false}
        grade = {qualification.gpa} 
        institution = {qualification.institution}
        startDate = {qualification.startDate}
        endDate = {qualification.endDate}
        />
    )): <p>Nothing to display...</p>

    const displayCareer = details?.career?.length ? details.career.map((company,index) => (
        <InfoCard 
        key = {index} 
        isCareer={true}
        role = {company.role} 
        institution = {company.institution}
        startDate = {company.startDate}
        endDate = {company.endDate}
        />
    )): <p>Nothing to display...</p>

    return (
        <div className = "flex flex-col">
            <Navbar />
            <main className = "p-5 text-white">
                {loading && <Loader />}
                {details && 
                <>
                    <section className = "flex gap-5 max-md:flex-col">
                        <img src = {profilePicture || ""} alt = "Profile Picture" loading = "lazy" className = "w-[30%] max-h-[350px] min-w-[200px] min-h-[200px]"/>
                        <div>
                            <div className="flex gap-2 font-bold text-[2rem]">
                                <p>{details?.firstName}</p>
                                <p>{details?.lastName}</p>
                            </div>
                            <div className="flex" title = "Username">
                                <p>#</p>
                                <p>{details?.userName}</p>
                            </div>
                            <div title = "email">
                                <p>{details?.email}</p>
                            </div>
                            <div className="flex items-end gap-10 mt-5 font-bold max-md:mt-1">
                                <div className="flex items-center gap-2 cursor-default" title = "Location">
                                    <IoLocationSharp />
                                    <p className="mt-1">{details?.location}</p>
                                </div>
                                <div className="flex gap-2 cursor-default" title = "Date Of Birth">
                                    <FaCalendar className="mt-[2px]"/>
                                    <p>{formatDate(details?.dateOfBirth)}</p>
                                </div>
                            </div>
                            <div className="mt-10 max-md:mt-2">
                                <p className = "font-semibold">Bio:</p>
                                <p>{parse(details?.bio)}</p>
                            </div>
                            <div className="mt-2">
                                <p className = "font-semibold">Description:</p>
                                <p>{parse(details?.description)}</p>
                            </div>
                        </div>
                    </section>
                    <section className="mt-5">
                        <div>
                            <p className = "text-[1.5rem]">Qualifications</p>
                            <hr />
                            <div className="flex flex-col gap-5 p-2">
                                {displayQualifications}
                            </div>
                        </div>
                        <div>
                            <p className = "text-[1.5rem] mt-5">Career</p>
                            <hr />
                            <div className="flex flex-col gap-5 p-2">
                                {displayCareer}
                            </div>
                        </div>
                    </section>
                </>}  
            </main>
        </div>
    )
}

export default UserDetails
