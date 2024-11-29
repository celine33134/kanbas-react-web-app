//
//
// import React, { useState } from 'react';
// import { FaPlus, FaSearch } from 'react-icons/fa';
// import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
// import { BsGripVertical } from "react-icons/bs";
// import { Link, useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { addAssignment, editAssignment, updateAssignment, deleteAssignment } from './reducer';
// import AssignmentsControls from "./AssignmentsControls";
// import ControlButtons from "../Modules/ModuleControlButtons";
//
// export default function Assignmentscreen() {
//     const { cid } = useParams();
//     const dispatch = useDispatch();
//     const [assignmentName, setAssignmentName] = useState("");
//     const { assignments } = useSelector((state: any) => state.assignmentsReducer);
//     const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);
//
//     return (
//         <div className="assignments-container">
//             {/* Search and Add Buttons */}
//             <div className="assignments-header d-flex justify-content-between align-items-center">
//                 {/* Search Input */}
//                 <InputGroup className="search-bar">
//                     <InputGroup.Text><FaSearch /></InputGroup.Text>
//                     <FormControl
//                         placeholder="Search for Assignment"
//                         aria-label="Search for Assignment"
//                     />
//                 </InputGroup>
//
//                 {/* Add Assignment and Group Buttons */}
//                 <div className="button-group">
//                     <AssignmentsControls
//                         assignmentName={assignmentName}
//                         setAssignmentName={setAssignmentName}
//                         addAssignment={() => {
//                             dispatch(addAssignment({ name: assignmentName, course: cid }));
//                             setAssignmentName("");
//                         }}
//                     />
//
//                     <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
//                         <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                         Group
//                     </button>
//                 </div>
//             </div>
//
//             {/* Assignments List */}
//             <ul id="wd-modules" className="list-group rounded-0">
//                 <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//                     <div className="wd-title p-3 ps-2 bg-secondary">
//                         <BsGripVertical className="me-2 fs-3" />
//                         Assignments
//                     </div>
//
//                     <ul className="wd-lessons list-group rounded-0">
//                         {filteredAssignments.map((assignment: any) => (
//                             <li key={assignment._id} className="wd-lesson list-group-item p-0 mb-5 fs-5 border-gray">
//                                 <div className="wd-title p-3 ps-2 bg-secondary">
//                                     <BsGripVertical className="me-2 fs-3" />
//
//                                     {/* Assignment name with editing logic */}
//                                     {!assignment.editing ? (
//                                         <span>{assignment.name}</span>
//                                     ) : (
//                                         <input
//                                             className="form-control w-50 d-inline-block"
//                                             onChange={(e) => dispatch(
//                                                 updateAssignment({ ...assignment, name: e.target.value })
//                                             )}
//                                             onKeyDown={(e) => {
//                                                 if (e.key === "Enter") {
//                                                     dispatch(updateAssignment({ ...assignment, editing: false }));
//                                                 }
//                                             }}
//                                             value={assignment.name}
//                                         />
//                                     )}
//
//                                     {/* Assignment control buttons */}
//                                     <ControlButtons
//                                         id={assignment._id}
//                                         deleteItem={() => dispatch(deleteAssignment(assignment._id))}
//                                         editItem={() => dispatch(editAssignment(assignment._id))}
//                                     />
//                                 </div>
//
//                                 {/* Assignment details */}
//                                 <div className="d-flex align-items-center p-3 ps-1">
//                                     <Link
//                                         to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
//                                         className="fs-5 ms-2"
//                                     >
//                                         {assignment.name}
//                                     </Link>
//                                 </div>
//                                 <div className="text-muted small ms-5">
//                                     Due date and other assignment details can go here
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     );
// }
//


import React, { useState, useEffect } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { BsGripVertical } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, editAssignment, updateAssignment, deleteAssignment, setAssignments } from './reducer';
import AssignmentsControls from "./AssignmentsControls";
import ControlButtons from "../Modules/ModuleControlButtons";
import { findAssignmentsForCourse, createAssignmentForCourse, deleteAssignment as deleteAPI, updateAssignment as updateAPI } from './client';

export default function Assignmentscreen() {
    const { cid } = useParams(); // course ID
    const dispatch = useDispatch();
    const [assignmentName, setAssignmentName] = useState("");
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    // Ensure that cid is defined before making API calls
    useEffect(() => {
        if (cid) {
            const fetchAssignments = async () => {
                const fetchedAssignments = await findAssignmentsForCourse(cid);
                dispatch(setAssignments(fetchedAssignments));  // Dispatch fetched assignments to Redux store
            };

            fetchAssignments();
        }
    }, [cid, dispatch]);  // Re-fetch assignments whenever course ID changes

    const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);

    return (
        <div className="assignments-container">
            {/* Search and Add Buttons */}
            <div className="assignments-header d-flex justify-content-between align-items-center">
                {/* Search Input */}
                <InputGroup className="search-bar">
                    <InputGroup.Text><FaSearch /></InputGroup.Text>
                    <FormControl
                        placeholder="Search for Assignment"
                        aria-label="Search for Assignment"
                    />
                </InputGroup>

                {/* Add Assignment and Group Buttons */}
                <div className="button-group">
                    <AssignmentsControls
                        assignmentName={assignmentName}
                        setAssignmentName={setAssignmentName}
                        addAssignment={() => {
                            if (cid) {
                                // Dispatch addAssignment with courseId and assignment details
                                const newAssignment = { name: assignmentName, course: cid };
                                createAssignmentForCourse(cid, newAssignment).then((createdAssignment) => {
                                    dispatch(addAssignment(createdAssignment));
                                });
                                setAssignmentName("");
                            }
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
                    </div>

                    <ul className="wd-lessons list-group rounded-0">
                        {filteredAssignments.map((assignment: any) => (
                            <li key={assignment._id} className="wd-lesson list-group-item p-0 mb-5 fs-5 border-gray">
                                <div className="wd-title p-3 ps-2 bg-secondary">
                                    <BsGripVertical className="me-2 fs-3" />

                                    {/* Assignment name with editing logic */}
                                    {!assignment.editing ? (
                                        <span>{assignment.name}</span>
                                    ) : (
                                        <input
                                            className="form-control w-50 d-inline-block"
                                            onChange={(e) => dispatch(
                                                updateAssignment({ ...assignment, name: e.target.value })
                                            )}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    // Call API to update assignment and dispatch update to Redux
                                                    updateAPI({ ...assignment, name: (e.target as HTMLInputElement).value }).then(() => {
                                                        dispatch(updateAssignment({ ...assignment, name:  (e.target as HTMLInputElement).value, editing: false }));
                                                    });
                                                }
                                            }}
                                            value={assignment.name}
                                        />
                                    )}

                                    {/* Assignment control buttons */}
                                    <ControlButtons
                                        id={assignment._id}
                                        deleteItem={() => {
                                            deleteAPI(assignment._id).then(() => {
                                                dispatch(deleteAssignment(assignment._id));
                                            });
                                        }}
                                        editItem={() => dispatch(editAssignment(assignment._id))}
                                    />
                                </div>

                                {/* Assignment details */}
                                <div className="d-flex align-items-center p-3 ps-1">
                                    <Link
                                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                        className="fs-5 ms-2"
                                    >
                                        {assignment.name}
                                    </Link>
                                </div>
                                <div className="text-muted small ms-5">
                                    Due date and other assignment details can go here
                                </div>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

