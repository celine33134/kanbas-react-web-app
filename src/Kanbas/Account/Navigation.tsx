// Create a Account Navigation component to provide navigation links
// to screens Sign in, Sign up, and Profile as shown below.


    import { Link } from "react-router-dom";
export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation">
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
            <Link to={`/Kanbas/Account/Signin`}> Signin </Link> <br/>
            <Link to="/Kanbas/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
            <Link to="/Kanbas/Courses" id="wd-course-link">Courses</Link><br/>
            <Link to="/Kanbas/Calendar" id="wd-calendar-link">Calendar</Link><br/>
            <Link to="/Kanbas/Inbox" id="wd-inbox-link">Inbox</Link><br/>
            <Link to={`/Kanbas/Account/Signup`}> Signup </Link> <br/>
            <Link to={`/Kanbas/Account/Profile`}> Profile </Link> <br/>
            <Link to="/Labs" id="wd-labs-link">Back to Labs</Link><br/>
        </div>
    );
}

