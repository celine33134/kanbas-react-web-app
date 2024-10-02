// Clicking a course in the Dashboard navigates to the Course
// screen displaying a course's content as shown here on the right.
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams,useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Assignments from "./Assignment/Assignmentscreen";
import AssignmentEditor from "./Assignment/AssignmentEditor";
import { courses } from "../Database";

export default function Courses() {

    // The Route for the Courses component encodes the course's id in
    // the path attribute and is available to the Courses component
    // through the useParams() hook. Once we have the cid parameter,
    // we can look up for the course from the Database for the course
    // with the same _id.
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr/>

            <div className="d-flex">
                <div className="d-none d-md-block">
            <CoursesNavigation/>
                </div>
                <div className="flex-fill">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home />}/>
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />}/>
                            <Route path="Assignments/:aid" element={<AssignmentEditor/>}/>
                            <Route path="People" element={<PeopleTable />} />
                        </Routes>
                </div></div>

        </div>
    );
}

