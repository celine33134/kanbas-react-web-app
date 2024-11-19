import { Link, useNavigate   } from "react-router-dom";
import * as client from "./client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const updateProfile = async () => {
        const updatedProfile = await client.updateUser(profile);
        dispatch(setCurrentUser(updatedProfile));
    };
    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };


        return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input id="wd-username" value="alice" placeholder="username"
                   className="form-control mb-2"/><br/>
            <input id="wd-password" value="123" placeholder="password"
                   type="password" className="form-control mb-2"/><br/>
            <input id="wd-firstname" value="Alice" placeholder="First Name"
                   className="form-control mb-2"/><br/>
            <input id="wd-lastname" value="Wonderland" placeholder="Last Name"
                   className="form-control mb-2"/><br/>
            <input id="wd-dob" value="2000-01-01" type="date"
                   className="form-control mb-2"/><br/>
            <input id="wd-email" value="alice@wonderland" type="email"
                   className="form-control mb-2"/><br/>
            <select id="wd-role" className="form-control mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select><br/>

            <div>
                <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update</button>
                {/*<Link to="/Kanbas/Account/Signin"*/}
                {/*      className="btn btn-primary w-100">*/}
                {/*    Sign out*/}
                {/*</Link>*/}
                <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
                    Sign out
                </button>
            </div>
        </div>
        );
}


