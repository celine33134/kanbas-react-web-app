// // When navigating to the Courses screen, a second column displays
// // a Course Navigation sidebar to navigate to various screens related to that course.
//
// import { Link, useLocation, useParams } from "react-router-dom";
//
// export default function CoursesNavigation() {
//     const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
//     const { cid } = useParams();
//     const location = useLocation();
//
//
//     return (
//         <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//             {links.map((link) => {
//                 const linkPath = `/Kanbas/Courses/${cid}/${link}`;
//                 const isActive = location.pathname.includes(link);
//
//                 return (
//                     <Link
//                         key={link}
//                         to={linkPath}
//                         className={`list-group-item ${isActive ? 'active' : 'text-danger'} border border-0`}
//                     >
//                         {link}
//                     </Link>
//                 );
//             })}
//         </div>
//     );
// }
//


import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const { cid } = useParams();
    const location = useLocation();

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => {
                const linkPath = `/Kanbas/Courses/${cid}/${link}`;
                const isActive = location.pathname.includes(link);

                return (
                    <Link
                        key={link}
                        to={linkPath}
                        className={`list-group-item ${isActive ? "active" : "text-danger"} border border-0`}
                    >
                        {link}
                    </Link>
                );
            })}
        </div>
    );
}

