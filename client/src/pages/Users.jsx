import Loader from "../components/Loader";
import Navbar from "../components/Navbar"
import TableItem from "../components/TableItem";
import useUserList from "../hooks/useUserList"


const Users = () => {
    const {users,loading} = useUserList();
    const displayUserItems = users?.map((user,index) => (
        <TableItem key = {index} user = {user}/>
    ))
    
    return (
        <div className = "flex flex-col">
            <Navbar />
            <main className="p-5">
                {loading && <Loader />}
                {users && 
                <div className="overflow-x-auto user-table">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100 ">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-gray-500">
                                    First Name
                                </th>

                                <th scope="col" className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 ">
                                    Last Name
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 ">
                                    Username
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 ">Email</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 ">
                            {displayUserItems}
                        </tbody>
                    </table>
                </div>}
            </main>
        </div>
    )
}

export default Users
