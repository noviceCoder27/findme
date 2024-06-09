import { createUser } from "../apis/users";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { toastError } from "../utils/toastMessage";
import FormStep from "../components/FormStep";

const CreateUser = () => {
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
    career: [],
    qualifications: [],
  });
  
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

      try {
          await createUser(formData);
      } catch (err) {
          console.log(err);
      }
  };

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

            <FormStep show={index === 0} onNext={() => setIndex(1)} showPrev={false}>
              <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} placeholder="First Name" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} placeholder="Last Name" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              <div>
                <label htmlFor="profilePic" className="font-semibold text-white">Profile Picture:</label>
                <input type="file" name="profilePic" accept="image/*" onChange={handleFileChange} className="w-full px-3 py-2 text-sm text-white placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
            </FormStep>

            <FormStep show={index === 1} onNext={() => setIndex(2)} onPrev={() => setIndex(0)}>
              <input type="text" name="userName" value={userData.userName} onChange={handleChange} placeholder="Username" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </FormStep>

            <FormStep show={index === 2} onNext={() => setIndex(3)} onPrev={() => setIndex(1)}>
              <textarea name="bio" value={userData.bio} onChange={handleChange} placeholder="Bio" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              <textarea name="description" value={userData.description} onChange={handleChange} placeholder="Description" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              <div className="flex gap-5">
                <input type="text" name="location" value={userData.location} onChange={handleChange} placeholder="Location" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <input type="date" name="dateOfBirth" value={userData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              
            </FormStep>

            <FormStep show={index === 3} onNext={() => setIndex(4)} onPrev={() => setIndex(2)}>
              <input type="text" name="career" value={userData.career} onChange={handleChange} placeholder="Career" className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </FormStep>

            <FormStep show={index === 4} onPrev={() => setIndex(3)} showNext={false}>
              <input type="text" name="qualifications" value={userData.qualifications} onChange={handleChange} placeholder="Qualifications" className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </FormStep>
          </form>
        </main>
    </div>
  );
};

export default CreateUser;
