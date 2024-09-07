// Implement a Signup screen component as shown below.
// Import the Signup screen in the Account screen and confirm that the Kanbas
// screen displays the Account screen that renders the Signin, Profile, and Signup screens.

import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <input placeholder="username" /><br/>
            <input placeholder="password" type="password" /><br/>
            <input placeholder="verify password" type="password" /><br/>
            <Link to="/Kanbas/Account/Profile" > Sign up </Link><br />
            <Link to="/Kanbas/Account/Signin" >Sign in</Link>
        </div>
    );}

