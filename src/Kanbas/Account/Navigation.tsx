// // import { AiOutlineDashboard } from "react-icons/ai";
// // import { IoCalendarOutline } from "react-icons/io5";
// // import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// // import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// // import { Link, useLocation } from "react-router-dom";
// //
// // export default function KanbasNavigation() {
// //
// //     // Instead of hardcoding the list in HTML, create a data structure that
// //     // configures the labels, paths, and icons as an array and then map
// //     // over the data structure creating the links dynamically.
// //         const { pathname } = useLocation();
// //     const links = [
// //         { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
// //         { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
// //         { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
// //         { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
// //         { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
// //     ];
// //
// //     return (
// //         <div id="wd-kanbas-navigation" style={{ width: 120 }}
// //              className="list-group rounded-0  position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
// //             <a id="wd-neu-link" target="_blank"
// //                href="https://www.northeastern.edu/"
// //                className="list-group-item bg-black border-0">
// //                 <img src="/images/NEU.png" width="75px" alt=""/></a>
// //
// //             <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
// //             ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
// //                 <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
// //                 <br />
// //                 Account
// //             </Link>
// //             {links.map((link) => (
// //                 <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
// //               ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
// //                     {link.icon({ className: "fs-1 text-danger"})}
// //                     <br />
// //                     {link.label}
// //                 </Link>
// //             ))}
// //
// //             {currentUser && currentUser.role === "ADMIN" && (
// //                 <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
// //
// //         </div>
// //     );}
//
// import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
// import { useSelector } from "react-redux";
//
// export default function AccountNavigation() {
//     // const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const { currentUser } = useSelector((state: any) => state.account); // Ensure 'account' is the key
//
//     console.log(currentUser);  // Log currentUser to check its contents
//
//     const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
//
//     const location = useLocation();  // Get the current location (pathname, search, hash, etc.)
//     const pathname = location.pathname; // Get the pathname from the location
//
//     // const active = (path: string) => (pathname.includes(path) ? "active" : "");
//
//     const active = (path: string) => (pathname === `/Kanbas/Account/${path}` ? "active" : "");
//
//     return (
//         <div id="wd-account-navigation" className="list-group">
//             {links.map((link) => (
//                 <Link key={link} to={`/Kanbas/Account/${link}`} className={`list-group-item ${active(link)}`}>
//                     {link}
//                 </Link>
//             ))}
//             {currentUser && currentUser.role === "ADMIN" && (
//                 <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}>
//                     Users
//                 </Link>
//             )}
//         </div>
//     );
// }
//


import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.account || { currentUser: null });
    const location = useLocation();

    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const active = (path: string) =>
        location.pathname === `/Kanbas/Account/${path}` ? "active" : "";

    return (
        <div id="wd-account-navigation" className="list-group">
            {links.map((link) => (
                <Link key={link} to={`/Kanbas/Account/${link}`} className={`list-group-item ${active(link)}`}>
                    {link}
                </Link>
            ))}
            {currentUser?.role === "ADMIN" && (
                <Link to="/Kanbas/Account/Users" className={`list-group-item ${active("Users")}`}>
                    Users
                </Link>
            )}
        </div>
    );
}
