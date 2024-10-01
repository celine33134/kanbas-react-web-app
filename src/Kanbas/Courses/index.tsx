// Clicking a course in the Dashboard navigates to the Course
// screen displaying a course's content as shown here on the right.
import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules/index";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";


export default function Courses() {
    return (
        <div id="wd-courses">
            <h2>Course 1234</h2>
            {/*Then in the Courses component, use a table to display the sidebar
            on the left and the Routes on the right as shown below.*/}
            <hr/>
            <table>
                <tr>
                    <td valign="top">
                        <CoursesNavigation/>
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home />}/>
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments/>}/>
                            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                            <Route path="People" element={<h2>People</h2>}/>
                        </Routes>
                    </td>
                </tr>
            </table>

        </div>
    );
}

