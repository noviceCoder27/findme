

const CompanyInput = ({ id, data, career, setCareer }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCareer(career.map(c => c.id === id ? { ...c, [name]: value } : c));
    };

    const handleRemove = () => {
        setCareer(career.filter(c => c.id !== id));
    };

    return (
        <>
            <input type="text" name="institution" value={data.institution} onChange={handleChange} placeholder="Organization Name" className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <div className="flex items-end gap-5">
                <input type="text" name="role" value={data.role} onChange={handleChange} placeholder="Role" className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-fit" />
                <div className="w-full">
                    <label htmlFor="startDate" className="font-bold text-white">Start Date:</label>
                    <input type="date" name="startDate" id="startDate" value={data.startDate} onChange={handleChange} required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="w-full">
                    <label htmlFor="endDate" className="font-bold text-white">End Date:</label>
                    <input type="date" name="endDate" id="endDate" value={data.endDate} onChange={handleChange} required className="w-full px-3 py-2 text-sm placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
            </div>
            <button 
                className="p-2 px-10 mt-5 ml-auto font-semibold text-red-400 border-2 border-red-400 rounded-lg w-fit hover:bg-red-400 hover:text-white"
                onClick={handleRemove}
            >
                Remove
            </button>
            <hr />
        </>
    );
};

export default CompanyInput;
