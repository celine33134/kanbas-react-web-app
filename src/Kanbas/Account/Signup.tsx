// Implement a Signup screen component as shown below.
// Import the Signup screen in the Account screen and confirm that the Kanbas
// screen displays the Account screen that renders the Signin, Profile, and Signup screens.

import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <input id="wd-signup-username"
                   placeholder="username" className="form-control mb-2"/>
            <input
                placeholder="password" type="password" className="form-control mb-2"/>
            <input placeholder="verify password" type="password"
                   id="wd-signup-verify-password" className="form-control mb-2"/>
            {/*<Link to="/Kanbas/Account/Profile"> Sign up </Link><br/>*/}
            {/*<Link to="/Kanbas/Account/Signin">Sign in</Link>*/}
            <Link id="wd-signup-btn"
                  to="/Kanbas/Account/Profile"
                  className="btn btn-primary w-100">
                Sign up
            </Link>
            <Link id="wd-signin-link" to="/Kanbas/Account/Signin">Sign in</Link>
        </div>
    );
}

