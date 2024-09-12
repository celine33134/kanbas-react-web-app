// Create an Account screen and import the new Signin screen.

import Signin from "./Signin";
import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signup from "./Signup";

export default function Account() {
    return (
        <div id="wd-account-screen">
            {/*In the Account screen add a table to layout the
            AccountNavigation component on a column on the left and the routes
            on the right side column as shown below.*/}
            {/*<table>*/}
            {/*    <tr>*/}
            {/*        <td valign="top">*/}
            {/*            <AccountNavigation/>*/}
            {/*        </td>*/}
            {/*        <td valign="top">*/}

                        {/*<h2>Account</h2>*/}
                        <Routes>
                            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin"/>}/>
                            <Route path="/Signin" element={<Signin/>}/>
                            <Route path="/Profile" element={<Profile/>}/>
                            <Route path="/Signup" element={<Signup/>}/>
                        </Routes>
            {/*        </td>*/}
            {/*    </tr>*/}
            {/*</table>*/}

        </div>
);
}

