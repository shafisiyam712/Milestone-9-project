/* eslint-disable no-undef */
import { useContext, useState } from "react";
import { useLocation} from "react-router-dom";
import { authContext } from "../Components/AuthProvider";

const ForgetPass = () => {
    const { user, manageProfile } = useContext(authContext);
    const location = useLocation();
   

    const [email, setEmail] = useState(location.state?.email || ""); // Get email from state or default to empty
    
    const handleUpdate = (e) => {
        e.preventDefault();

        const inputEmail = e.target.email.value;

        if (inputEmail) {
            window.open("https://mail.google.com", "_blank"); // Redirect to Gmail
        }
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Reset Password</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn border-[#1E2A47] bg-white text-[#1E2A47] hover:bg-[#1E2A47] hover:text-white">
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;
