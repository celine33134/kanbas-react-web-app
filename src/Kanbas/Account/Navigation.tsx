// Create a Account Navigation component to provide navigation links
// to screens Sign in, Sign up, and Profile as shown below.

import { Link } from "react-router-dom";

// export default function AccountNavigation() {
//     return (
//         <div id="wd-account-navigation">
//             <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
//             <Link to={`/Kanbas/Account/Signin`}> Signin </Link> <br/>
//             <Link to="/Kanbas/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
//             <Link to="/Kanbas/Courses" id="wd-course-link">Courses</Link><br/>
//             <Link to="/Kanbas/Calendar" id="wd-calendar-link">Calendar</Link><br/>
//             <Link to="/Kanbas/Inbox" id="wd-inbox-link">Inbox</Link><br/>
//             <Link to={`/Kanbas/Account/Signup`}> Signup </Link> <br/>
//             <Link to={`/Kanbas/Account/Profile`}> Profile </Link> <br/>
//             <Link to="/Labs" id="wd-labs-link">Back to Labs</Link><br/>
//         </div>
//     );
// }
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";


export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" style={{ width: 120 }}
             className="list-group rounded-0  position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link" target="_blank"
               href="https://www.northeastern.edu/"
               className="list-group-item bg-black border-0">
                <img src="/images/NEU.png" width="75px" alt=""/></a>

            <Link to="/Kanbas/Account" id="wd-account-link"
                  className="list-group-item text-white
                   bg-black text-center border-0">
                <FaRegCircleUser className="fs-1 text text-white" /><br />
                Account </Link>

            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
                  className="list-group-item text-center border-0
                   bg-white text-danger">
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard </Link>

            <Link to="/Kanbas/Dashboard" id="wd-course-link"
                  className="list-group-item text-white
                   bg-black text-center border-0">
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses </Link>

            <Link to="/Kanbas/Calendar" id="wd-calendar-link"
                  className="list-group-item text-white
                   bg-black text-center border-0">
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Calendar </Link>

            <Link to="/Kanbas/Inbox" id="wd-inbox-link"
                  className="list-group-item text-white
                   bg-black text-center border-0">
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Inbox </Link>

            <Link to="/Labs" id="wd-labs-link"
                  className="list-group-item text-white
                   bg-black text-center border-0">
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Labs </Link>

        </div>
    );}

