import { createUser } from "../apis/users";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { toastError, toastSuccess } from "../utils/toastMessage";
import FormStep from "../components/form/FormStep";
import CompanyInput from "../components/form/CompanyInput";
import QualificationInput from "../components/form/QualificationInput";
import { checkBio, checkDOB, checkDescription, checkEmail, checkFirstName, checkLastName, checkLocation, checkPassword, checkProfilePic, checkUserName } from "../utils/validation/userCreate";
import { useNavigate } from "react-router-dom";
import TextEditor from "../components/TextEditor";

const CreateUser = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        description: '',
        userName: '',
        email: '',
        password: '',
        location: '',
        dateOfBirth: '',
    });
    
    const [img, setImg] = useState(false);
    const [career, setCareer] = useState([]);
    const [qualifications, setQualifications] = useState([]);
    const [index, setIndex] = useState(0);
    const [profilePic, setProfilePic] = useState(null);
    
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const fileType = file["type"];
        const validImageTypes = ["image/gif", "image/jpeg", "image/png", "image/jpg"];
        if (validImageTypes.includes(fileType)) {
            setProfilePic(file);
            setImg(true);
        } else {
            toastError("Please upload file in png or jpg format");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in userData) {
            formData.append(key, userData[key]);
        }
        if (profilePic) {
            formData.append('profilePic', profilePic);
        }
        formData.append('qualifications', JSON.stringify(qualifications));
        formData.append('career', JSON.stringify(career));

        try {
            await createUser(formData);
            toastSuccess("User created successfully");
            navigate("/");
        } catch (err) {
            toastError(err?.response?.data?.msg || "Error creating user");
        }
    };

    const displayQualifications = qualifications.map((qualification, index) => (
        <QualificationInput
            key={index}
            id={qualification.id}
            data={qualification}
            qualifications={qualifications}
            setQualifications={setQualifications}
        />
    ));

    const displayCompanies = career.map((company, index) => (
        <CompanyInput
            key={index}
            id={company.id}
            data={company}
            career={career}
            setCareer={setCareer}
        />
    ));

    return (
        <div className="flex flex-col">
            <Navbar />
            <main className="flex justify-center p-5">
                <form onSubmit={handleSubmit} className="space-y-4 max-sm:w-[90%] max-lg:w-[80%] w-[50%] relative p-5">
                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black rounded-xl opacity-20 -z-10"></div>
                    <div>
                        <h3 className="font-bold text-center text-blue-400 text-[2rem]">Search username</h3>
                        <p className="text-center text-white">A unique username to represent all your information</p>
                    </div>
                    <FormStep
                        show={index === 0}
                        onNext={(e) => {
                            e.preventDefault();
                            if (!checkFirstName(userData.firstName)) {
                                return;
                            }
                            if (!checkLastName(userData.lastName)) {
                                return;
                            }
                            if (!checkProfilePic(img)) {
                                return;
                            }
                            setIndex(1);
                        }}
                        showPrev={false}
                    >
                        <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} placeholder="First Name" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} placeholder="Last Name" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        <div>
                            <label htmlFor="profilePic" className="font-semibold text-white">Profile Picture:</label>
                            <input type="file" name="profilePic" accept="image/*" onChange={handleFileChange} className="w-full px-3 py-2 text-sm text-white placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                    </FormStep>
                    <FormStep
                        show={index === 1}
                        onNext={(e) => {
                            e.preventDefault();
                            if (!checkUserName(userData.userName)) {
                                return;
                            }
                            if (!checkEmail(userData.email)) {
                                return;
                            }
                            if (!checkPassword(userData.password)) {
                                return;
                            }
                            setIndex(2);
                        }}
                        onPrev={() => setIndex(0)}
                    >
                        <input type="text" name="userName" value={userData.userName} onChange={handleChange} placeholder="Username" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </FormStep>
                    <FormStep
                        show={index === 2}
                        onNext={(e) => {
                            e.preventDefault();
                            if (!checkBio(userData.bio)) {
                                return;
                            }
                            if (!checkDescription(userData.description)) {
                                return;
                            }
                            if (!checkLocation(userData.location)) {
                                return;
                            }
                            if (!checkDOB(userData.dateOfBirth)) {
                                return;
                            }
                            setIndex(3);
                        }}
                        onPrev={() => setIndex(1)}
                    >
                        <div>
                          <p className="font-bold text-white">Bio:</p>
                          <TextEditor value = {userData.bio} target = "bio" userData = {userData} setUserData = {setUserData}/>
                        </div>
                        <div>
                          <p className="font-bold text-white">Description:</p>
                          <TextEditor value = {userData.description} target = "description" userData = {userData} setUserData = {setUserData}/>
                        </div>
                        
                        {/* <textarea name="bio" value={userData.bio} onChange={handleChange} placeholder="Bio" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea> */}
                        {/* <textarea name="description" value={userData.description} onChange={handleChange} placeholder="Description" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea> */}
                        <div className="flex gap-5">
                            <input type="text" name="location" value={userData.location} onChange={handleChange} placeholder="Location" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            <div className="flex items-center w-full gap-2">
                                <p className="font-bold text-white cursor-default" title="Date Of Birth">D.O.B.</p>
                                <input type="date" name="dateOfBirth" value={userData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                        </div>
                    </FormStep>
                    <FormStep show={index === 3} onNext={() => setIndex(4)} onPrev={() => setIndex(2)}>
                        <h3 className="font-semibold text-white">Qualifications</h3>
                        {displayQualifications}
                        <button
                            className="p-2 px-10 mt-5 ml-auto mr-auto font-semibold text-white border-2 border-white rounded-lg w-fit hover:bg-white hover:text-black"
                            onClick={(e) => {
                                e.preventDefault();
                                const id = qualifications.length ? qualifications[qualifications.length - 1].id + 1 : 1;
                                setQualifications(prev => [...prev, { id, institution: "", gpa: "", startDate: "", endDate: "" }]);
                            }}
                        >
                            Add New
                        </button>
                    </FormStep>
                    <FormStep show={index === 4} onPrev={() => setIndex(3)} showNext={false}>
                        <h3 className="font-semibold text-white">Career</h3>
                        {displayCompanies}
                        <button
                            className="p-2 px-10 mt-5 ml-auto mr-auto font-semibold text-white border-2 border-white rounded-lg w-fit hover:bg-white hover:text-black"
                            onClick={(e) => {
                                e.preventDefault();
                                const id = career.length ? career[career.length - 1].id + 1 : 1;
                                setCareer(prev => [...prev, { id, institution: "", role: "", startDate: "", endDate: "" }]);
                            }}
                        >
                            Add New
                        </button>
                    </FormStep>
                </form>
            </main>
        </div>
    );
};

export default CreateUser;
