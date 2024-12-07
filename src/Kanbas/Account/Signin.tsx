
import * as client from "./client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer"; // Import setCurrentUser action

export default function Signin() {

    console.log("Signin Component Rendered");

    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signin = async () => {
        try {
            const user = await client.signin(credentials);
            if (!user) {
                console.error("Invalid credentials");
                return;
            }
            dispatch(setCurrentUser(user)); // Dispatch the action to set the current user
            navigate("/Kanbas/Dashboard"); // Navigate to the dashboard on successful login
        } catch (error) {
            console.error("Signin failed", error);
        }
    };

    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input
                id="wd-username"
                placeholder="username"
                className="form-control mb-2"
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
            <input
                id="wd-password"
                placeholder="password"
                type="password"
                className="form-control mb-2"
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button
                id="wd-signin-btn"
                onClick={signin}
                className="btn btn-primary w-100"
            >
                Sign in
            </button>
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
                Sign up
            </Link>
        </div>
    );
}
