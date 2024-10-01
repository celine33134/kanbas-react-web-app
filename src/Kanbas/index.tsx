// Import the new Account screen in the Kanbas screen
// and confirm the new Signin screen renders in the Account screen.

import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard/Dashboard";
import Account from "./Account";
import Courses from "./Courses";
import KanbasNavigation from "./Account/Navigation";    

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <table>
                <tr>
                    <td valign="top">
                        <KanbasNavigation/>
                    </td>
                    <td valign="top">
                        <h1>Kanbas</h1>
                        {/*<h2>Account</h2>*/}

                        <Routes>
                            <Route path="/" element={<Navigate to="Account"/>}/>
                            <Route path="/Account/*" element={<Account/>}/>
                            <Route path="/Dashboard" element={<Dashboard/>}/>
                            <Route path="/Courses/:cid/*" element={<Courses />} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />

                        </Routes>
                    </td>
                </tr>
            </table>

        </div>
);
}

