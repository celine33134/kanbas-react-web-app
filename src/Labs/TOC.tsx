//
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLocation } from "react-router";
//
//
//
// export default function TOC() {
//     const { pathname } = useLocation();
//     return (
//         <ul className="nav nav-pills">
//
//             <li className="nav-item">
//                 <a id="wd-a" href="#/Labs" className="nav-link">
//                     Labs
//                 </a>
//             </li>
//
//             <li className="nav-item">
//                 <a id="wd-a1" href="#/Labs/Lab1"
//                    className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
//                     Lab 1
//                 </a>
//             </li>
//
//             <li className="nav-item">
//                 <a id="wd-a2" href="#/Labs/Lab2"
//                    className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
//                     Lab 2
//                 </a>
//             </li>
//
//             <li className="nav-item">
//                 <a id="wd-a3" href="#/Labs/Lab3"
//                    className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
//                     Lab 3
//                 </a>
//             </li>
//
//             <li className="nav-item">
//                 <a id="wd-a4" href="#/Labs/Lab4"
//                    className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
//                     Lab 4
//                 </a>
//             </li>
//
//             <li className="nav-item">
//                 <a id="wd-a5" href="#/Labs/Lab5"
//                    className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
//                     Lab 5
//                 </a>
//             </li>
//
//             <li className="nav-item">
//                 <a id="wd-k" href="#/Kanbas" className="nav-link">
//                     Kanbas
//                 </a>
//             </li>
//
//             <li className="nav-item">
//                 <a id="wd-k" href="https://github.com/celine33134/kanbas-react-web-app/tree/a5" className="nav-link">
//                     My GitHub kanbas-react-web-app
//                 </a>
//             </li>
//
//             <li className="nav-item">
//                 <a id="wd-k" href="https://github.com/celine33134/kanbas-node-server-app" className="nav-link">
//                     My GitHub kanbas-node-server-app
//                 </a>
//             </li>
//
//             <li className="nav-item">
//                 <a id="wd-k" href="https://kanbas-node-server-app-ti6n.onrender.com/" className="nav-link">
//                     Render Root Server
//                 </a>
//             </li>
//
//
//         </ul>
//     );
// }
//
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function TOC() {
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link id="wd-a" to="/Labs" className="nav-link">
                    Labs
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    id="wd-a1"
                    to="/Labs/Lab1"
                    className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
                >
                    Lab 1
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    id="wd-a2"
                    to="/Labs/Lab2"
                    className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
                >
                    Lab 2
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    id="wd-a3"
                    to="/Labs/Lab3"
                    className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
                >
                    Lab 3
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    id="wd-a4"
                    to="/Labs/Lab4"
                    className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}
                >
                    Lab 4
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    id="wd-a5"
                    to="/Labs/Lab5"
                    className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}
                >
                    Lab 5
                </Link>
            </li>

            <li className="nav-item">
                <Link id="wd-k" to="/Kanbas/signin" className="nav-link">
                    Kanbas
                </Link>
            </li>

            <li className="nav-item">
                <a
                    id="wd-k"
                    href="https://github.com/celine33134/kanbas-react-web-app/tree/a5"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    My GitHub kanbas-react-web-app
                </a>
            </li>

            <li className="nav-item">
                <a
                    id="wd-k"
                    href="https://github.com/celine33134/kanbas-node-server-app"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    My GitHub kanbas-node-server-app
                </a>
            </li>

            <li className="nav-item">
                <a
                    id="wd-k"
                    href="https://kanbas-node-server-app-ti6n.onrender.com/"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Render Root Server
                </a>
            </li>
        </ul>
    );
}
