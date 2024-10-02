import React from 'react';
import { FaPlus, FaSearch, FaCheckCircle } from 'react-icons/fa';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentButton from "./AssignmentMark";
import { Link,useParams } from 'react-router-dom';
import * as db from "../../Database";

export default function Assignmentscreen() {

    const { cid } = useParams();
    const assignments = db.assignments;
    const filteredAssignments =
        assignments.filter(assignment => assignment.course === cid);

    return (
        <div className="assignments-container">
            {/* Search and Buttons */}
            <div className="assignments-header d-flex justify-content-between align-items-center">
                {/* Search Input */}
                <InputGroup className="search-bar">
                    <InputGroup.Text><FaSearch /></InputGroup.Text>
                    <FormControl
                        placeholder="Search for Assignment"
                        aria-label="Search for Assignment"
                    />
                </InputGroup>

                {/* Add Group and Assignment Buttons */}
                <div className="button-group">
                    <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Assignment
                    </button>
                    <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group
                    </button>
                </div>
            </div>

            {/* Assignments List */}
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Assignments
                        <ModuleControlButtons />
                    </div>

                    <ul className="wd-lessons list-group rounded-0">
                        {filteredAssignments.map((assignment) => (
                            <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <AssignmentButton />
                                    <Link
                                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        className="fs-5 ms-2"
                                    >
                                        {assignment.title}
                                    </Link>
                                </div>
                                <div className="text-muted small ms-5">
                                    Due date and other assignment details can go here
                                </div>
                                <LessonControlButtons />
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

{/*<ul className="wd-lessons list-group rounded-0">*/}
{/*    /!* Assignment Item *!/*/}
{/*    <li className="wd-lesson list-group-item p-3 ps-1">*/}
{/*        <div className="d-flex align-items-center">*/}
{/*            <BsGripVertical className="me-2 fs-3"/>*/}
{/*            <AssignmentButton/>*/}
{/*            /!*<span className="fs-5 ms-2">A1</span>*!/*/}
{/*            <Link to={`/Kanbas/Courses/1234/Assignments/1`} className="fs-5 ms-2">A1</Link>*/}
{/*        </div>*/}
{/*        <div className="text-muted small ms-5">*/}
{/*            Multiple Modules | Not available until May 6 at 12:00am*/}
{/*        </div>*/}
{/*        <LessonControlButtons/>*/}
{/*        <div className="text-muted small ms-5">*/}
{/*            Due May 13 at 11:59pm | 100 pts*/}
{/*        </div>*/}

{/*    </li>*/}

{/*    <li className="wd-lesson list-group-item p-3 ps-1">*/}
{/*        <div className="d-flex align-items-center">*/}
{/*            <BsGripVertical className="me-2 fs-3"/>*/}
{/*            <AssignmentButton/>*/}
{/*            /!*<span className="fs-5 ms-2">A2</span>*!/*/}
{/*            <Link to={`/Kanbas/Courses/1234/Assignments/2`} className="fs-5 ms-2">A2</Link>*/}
{/*        </div>*/}
{/*        <div className="text-muted small ms-5">*/}
{/*            Multiple Modules | Not available until May 13 at 12:00am*/}
{/*        </div>*/}
{/*        <LessonControlButtons/>*/}
{/*        <div className="text-muted small ms-5">*/}
{/*            Due May 20 at 11:59pm | 100 pts*/}
{/*        </div>*/}
{/*    </li>*/}

{/*    <li className="wd-lesson list-group-item p-3 ps-1">*/}
{/*        <div className="d-flex align-items-center">*/}
{/*            <BsGripVertical className="me-2 fs-3"/>*/}
{/*            <AssignmentButton/>*/}
{/*            /!*<span className="fs-5 ms-2">A3</span>*!/*/}
{/*            <Link to={`/Kanbas/Courses/1234/Assignments/3`} className="fs-5 ms-2">A3</Link>*/}
{/*        </div>*/}
{/*        <div className="text-muted small ms-5">*/}
{/*            Multiple Modules | Not available until May 20 at 12:00am*/}
{/*        </div>*/}
{/*        <LessonControlButtons/>*/}
{/*        <div className="text-muted small ms-5">*/}
{/*            Due May 27 at 11:59pm | 100 pts*/}
{/*        </div>*/}
{/*    </li>*/}
{/*</ul>*/}


