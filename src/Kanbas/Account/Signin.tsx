// The following component below declares input fields where users can enter
// their username and password.


import * as client from "./client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        const user =  await client.signin(credentials);
        if (!user) return;
        // dispatch(setCurrentUser(user));
        navigate("/Kanbas/Dashboard");
    };

    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input id="wd-username" placeholder="username"
                   className="form-control mb-2"/>
            <input id="wd-password" placeholder="password" type="password"
                   className="form-control mb-2"/>
            <Link  id="wd-signin-btn"
                   to="/Kanbas/Account/Profile"
                   className="btn btn-primary w-100">
                Sign in
            </Link>
            <Link  id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
        </div>
    );}

