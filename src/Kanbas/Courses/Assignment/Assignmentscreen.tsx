import React,{ useState } from 'react';
import { FaPlus, FaSearch, FaCheckCircle } from 'react-icons/fa';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentButton from "./AssignmentMark";
import { Link,useParams,useNavigate } from 'react-router-dom';
import * as db from "../../Database";
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, editAssignment, updateAssignment, deleteAssignment } from './reducer';
import {modules} from "../../Database";
import ControlButtons from "../Modules/ModuleControlButtons";
import {deleteModule, editModule} from "../Modules/reducer";
import AssignmentsControls from "./AssignmentsControls";

export default function Assignmentscreen() {

    const { cid } = useParams();
    const dispatch = useDispatch();
    const [assignmentName, setAssignmentName] = useState("");
    const {assignments} = useSelector((state: any) => state.assignmentsReducer);
    const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);
    // const assignments = db.assignments;
    // const filteredAssignments =
    //     assignments.filter(assignment => assignment.course === cid);



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
                    {/*<button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">*/}
                    {/*    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />*/}
                    {/*    Assignment*/}
                    {/*</button>*/}
                    <AssignmentsControls
                        assignmentName={assignmentName}
                        setAssignmentName={setAssignmentName}
                        addAssignment={() => {
                            dispatch(addAssignment({ name: assignmentName, course: cid }));  // Assuming cid is from useParams
                            setAssignmentName("");
                        }}
                    />

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
                        <ControlButtons
                        id={assignments._id}
                        deleteItem={(assignmentId) => {dispatch(deleteAssignment(assignmentId));}}
                        editItem={(assignmentId) => dispatch(editAssignment(assignmentId))}/>
                        {/*<ModuleControlButtons/>*/}
                    </div>

                    <ul className="wd-lessons list-group rounded-0">
                        {filteredAssignments.map((assignment: any) => (
                            <li key={assignment._id} className="wd-lesson list-group-item p-0 mb-5 fs-5 border-gray">
                                <div className="wd-title p-3 ps-2 bg-secondary">
                                    <BsGripVertical className="me-2 fs-3" />

                                    {/* Assignment name and editing logic */}
                                    {!assignment.editing && assignment.title}
                                    {assignment.editing && (
                                        <input
                                            className="form-control w-50 d-inline-block"
                                            onChange={(e) => dispatch(
                                                updateAssignment({ ...assignment, title: e.target.value })
                                            )}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    dispatch(updateAssignment({ ...assignment, editing: false }));
                                                }
                                            }}
                                            value={assignment.title}
                                        />
                                    )}

                                    {/* Assignment control buttons */}
                                    <ControlButtons
                                        id={assignment._id}
                                        deleteItem={(assignmentId) => {dispatch(deleteAssignment(assignmentId));}}
                                        editItem={(assignmentId) => dispatch(editAssignment(assignmentId))}
                                    />
                                </div>

                                {/* Assignment details */}
                                <div className="d-flex align-items-center p-3 ps-1">
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
                            </li>
                        ))}
                    </ul>
                    {/*<ul className="wd-lessons list-group rounded-0">*/}
                    {/*    {filteredAssignments.map((assignment:any) => (*/}
                    {/*        <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">*/}
                    {/*            <div className="d-flex align-items-center">*/}
                    {/*                <BsGripVertical className="me-2 fs-3" />*/}
                    {/*                <AssignmentButton />*/}
                    {/*                <Link*/}
                    {/*                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}*/}
                    {/*                    className="fs-5 ms-2"*/}
                    {/*                >*/}
                    {/*                    {assignment.title}*/}
                    {/*                </Link>*/}
                    {/*            </div>*/}
                    {/*            <div className="text-muted small ms-5">*/}
                    {/*                Due date and other assignment details can go here*/}
                    {/*            </div>*/}
                    {/*            <LessonControlButtons />*/}
                    {/*        </li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}
                </li>
            </ul>
        </div>

        // <div className="assignments-container">
        //     {/* Search and Buttons */}
        //     <div className="assignments-header d-flex justify-content-between align-items-center">
        //         {/* Search Input */}
        //         <InputGroup className="search-bar">
        //             <InputGroup.Text><FaSearch /></InputGroup.Text>
        //             <FormControl
        //                 placeholder="Search for Assignment"
        //                 aria-label="Search for Assignment"
        //             />
        //         </InputGroup>
        //
        //         {/* Add Group and Assignment Buttons */}
        //         <div className="button-group">
        //             <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        //                 <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        //                 Assignment
        //             </button>
        //             <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
        //                 <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        //                 Group
        //             </button>
        //         </div>
        //     </div>
        //
        //     {/* Assignments List */}
        //     <ul id="wd-modules" className="list-group rounded-0">
        //         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        //             <div className="wd-title p-3 ps-2 bg-secondary">
        //                 <BsGripVertical className="me-2 fs-3" />
        //                 Assignments
        //                 <ModuleControlButtons moduleId={module._id}
        //                                       deleteModule={deleteModule}
        //                                       editModule={editModule}/>
        //             </div>
        //
        //             <ul className="wd-lessons list-group rounded-0">
        //                 {filteredAssignments.map((assignment) => (
        //                     <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
        //                         <div className="d-flex align-items-center">
        //                             <BsGripVertical className="me-2 fs-3" />
        //                             <AssignmentButton />
        //                             <Link
        //                                 to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
        //                                 className="fs-5 ms-2"
        //                             >
        //                                 {assignment.title}
        //                             </Link>
        //                         </div>
        //                         <div className="text-muted small ms-5">
        //                             Due date and other assignment details can go here
        //                         </div>
        //                         <LessonControlButtons />
        //                     </li>
        //                 ))}
        //             </ul>
        //         </li>
        //     </ul>
        // </div>

    );
}



