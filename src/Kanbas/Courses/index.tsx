// Clicking a course in the Dashboard navigates to the Course
// screen displaying a course's content as shown here on the right.
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Assignments from "./Assignment/Assignmentscreen";
import AssignmentEditor from "./Assignment/AssignmentEditor";

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                Course 1234</h2>
            {/*Then in the Courses component, use a table to display the sidebar
            on the left and the Routes on the right as shown below.*/}
            <hr/>
            {/*<table>*/}
            {/*    <tr>*/}
            {/*        <td valign="top">*/}
            <div className="d-flex">
                <div className="d-none d-md-block">
            <CoursesNavigation/>
                </div>
                <div className="flex-fill">
                {/*</td>*/}
                    {/*<td valign="top">*/}
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home />}/>
                            <Route path="Modules" element={<Modules />} />
                            {/*<Route path="Assignments" element={<h2>Assignments</h2>}/>*/}
                            <Route path="Assignments" element={<Assignments />}/>
                            <Route path="Assignments/:aid" element={<AssignmentEditor/>}/>
                            {/*<Route path="People" element={<h2>People</h2>}/>*/}
                            <Route path="People" element={<PeopleTable />} />
                        </Routes>
                </div></div>

            {/*        </td>*/}
            {/*    </tr>*/}
            {/*</table>*/}

        </div>
    );
}

