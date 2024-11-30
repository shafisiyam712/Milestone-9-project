// export default UserProfile;
import { useContext } from "react";
import { authContext } from "../Components/AuthProvider"; // Adjust path as needed
import { Link } from "react-router-dom";

const UserProfile = () => {
    const { user } = useContext(authContext);

   
    // if (!user) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="container mx-auto mt-20">
            <h1 className="text-3xl font-bold text-center mb-5">Welcome {user.displayName}</h1>
            <div className="w-11/12 md:w-11/12  lg:w-1/2 mx-auto card p-6 shadow-lg rounded-lg bg-base-100">
                <div className="flex items-center space-x-3 gap-1 md:gap-5">
                    <img src={user.photoURL} alt="User Avatar" className="w-36 h-36 md:w-64 md:h-64 rounded-xl" />
                    <div>
                        <h2 className="text-xl font-semibold">{user.displayName || "No name provided"}</h2>
                        <p className="text-gray-600">{user.email || "No email provided"}</p>
                        <div className="mt-3">
                    <button className="btn font-bold border border-[#1E2A47] text-[#1E2A47] hover:text-white hover:bg-[#1E2A47] ml-3"><Link to='/update'>Update</Link></button>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
