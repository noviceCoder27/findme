import { createUser } from "../apis/users";
import Navbar from "../components/Navbar"
import { useState } from "react";

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
    career: '',
    qualifications: '',
  });
  const [profilePic, setProfilePic] = useState(null);

  const handleChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
      setProfilePic(e.target.files[0]);
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
          await createUser(formData)
      } catch (err) {
          console.log(err)
      }
  };
  return (
    <div className = "flex flex-col">
        <Navbar />
        <main className="flex justify-center p-5">
          <form onSubmit={handleSubmit} className="space-y-4 w-[50%]">
            <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} placeholder="First Name" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} placeholder="Last Name" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <textarea name="bio" value={userData.bio} onChange={handleChange} placeholder="Bio" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            <textarea name="description" value={userData.description} onChange={handleChange} placeholder="Description" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            <input type="text" name="userName" value={userData.userName} onChange={handleChange} placeholder="Username" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <input type="text" name="location" value={userData.location} onChange={handleChange} placeholder="Location" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <input type="date" name="dateOfBirth" value={userData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <input type="text" name="career" value={userData.career} onChange={handleChange} placeholder="Career" className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <input type="text" name="qualifications" value={userData.qualifications} onChange={handleChange} placeholder="Qualifications" className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <input type="file" name="profilePic" onChange={handleFileChange} className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create User</button>
          </form>

        </main>
    </div>
  )
}

export default CreateUser
