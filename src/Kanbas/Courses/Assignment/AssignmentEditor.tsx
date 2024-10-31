

// import React, { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import * as db from '../../Database';
//
// import { useSelector, useDispatch } from 'react-redux';
// import { addAssignment, editAssignment, updateAssignment, deleteAssignment } from './reducer';
//
// export default function AssignmentEditor() {
//     const { cid, aid } = useParams();
//     const [assignment, setAssignment] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
//
//     // Fetch assignment data from the Redux store based on the aid
//     useEffect(() => {
//         const foundAssignment = assignments.find((assign: any) => assign._id === aid);
//         setAssignment(foundAssignment);
//     }, [aid, assignments]);
//
//     // Handle input change
//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         const { name, value } = event.target;
//         setAssignment({ ...assignment, [name]: value });
//     };
//
//     // Handle form submission (Save)
//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         dispatch(updateAssignment(assignment)); // Dispatch action to update assignment
//         navigate(`/Kanbas/Courses/${cid}/Assignments`); // Navigate back to the Assignments screen
//     };
//
//     // Handle cancel action (Cancel)
//     const handleCancel = () => {
//         navigate(`/Kanbas/Courses/${cid}/Assignments`); // Navigate back without saving changes
//     };
//
//     if (!assignment) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <div className="assignment-editor-container p-4">
//             <h2 className="text-danger">Edit Assignment: {assignment.name}</h2>
//             <hr />
//
//             <Form onSubmit={handleSubmit}>
//                 {/* Assignment Name */}
//                 <Form.Group className="mb-3" controlId="assignmentName">
//                     <Form.Label>Assignment Name</Form.Label>
//                     <Form.Control
//                         type="text"
//                         name="name"
//                         value={assignment.name}
//                         onChange={handleInputChange}
//                         placeholder="Enter assignment name"
//                         required
//                     />
//                 </Form.Group>
//
//                 {/* Description */}
//                 <Form.Group className="mb-3" controlId="assignmentDescription">
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control
//                         as="textarea"
//                         rows={3}
//                         name="description"
//                         value={assignment.description}
//                         onChange={handleInputChange}
//                         placeholder="Enter assignment description"
//                         required
//                     />
//                 </Form.Group>
//
//                 {/* Points */}
//                 <Form.Group className="mb-3" controlId="assignmentPoints">
//                     <Form.Label>Points</Form.Label>
//                     <Form.Control
//                         type="number"
//                         name="points"
//                         value={assignment.points}
//                         onChange={handleInputChange}
//                         placeholder="Enter points"
//                         required
//                     />
//                 </Form.Group>
//
//                 {/* Due Date */}
//                 <Form.Group className="mb-3" controlId="assignmentDueDate">
//                     <Form.Label>Due Date</Form.Label>
//                     <Form.Control
//                         type="date"
//                         name="dueDate"
//                         value={assignment.dueDate}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </Form.Group>
//
//                 {/* Available From Date */}
//                 <Form.Group className="mb-3" controlId="assignmentAvailableFromDate">
//                     <Form.Label>Available From Date</Form.Label>
//                     <Form.Control
//                         type="date"
//                         name="availableFromDate"
//                         value={assignment.availableFromDate}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </Form.Group>
//
//                 {/* Available Until Date */}
//                 <Form.Group className="mb-3" controlId="assignmentAvailableUntilDate">
//                     <Form.Label>Available Until Date</Form.Label>
//                     <Form.Control
//                         type="date"
//                         name="availableUntilDate"
//                         value={assignment.availableUntilDate}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </Form.Group>
//
//                 {/* Button Group */}
//                 <div className="text-end">
//                     <Button variant="danger" className="me-2" onClick={handleCancel}>
//                         Cancel
//                     </Button>
//                     <Button type="submit" variant="success">
//                         Save Changes
//                     </Button>
//                 </div>
//             </Form>
//         </div>
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateAssignment } from './reducer';

interface AssignmentEditorProps {
    dialogTitle: string;
    assignmentId: string | null;
}

const AssignmentEditor: React.FC<AssignmentEditorProps> = ({ dialogTitle, assignmentId }) => {
    const { cid } = useParams();
    const [assignment, setAssignment] = useState<any>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);

    // Fetch assignment data based on assignmentId
    // useEffect(() => {
    //     const foundAssignment = assignments.find((assign: any) => assign._id === assignmentId);
    //     setAssignment(foundAssignment);
    // }, [assignmentId, assignments]);
    useEffect(() => {
        if (assignmentId) { // 仅在 assignmentId 存在时查找
            const foundAssignment = assignments.find((assign: any) => assign._id === assignmentId);
            setAssignment(foundAssignment);
        }
    }, [assignmentId, assignments]);

    // Handle input change
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = event.target;
    //     setAssignment((prevAssignment: any) => ({ ...prevAssignment, [name]: value }));
    // };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setAssignment((prevAssignment: any) => ({ ...prevAssignment, [name]: value }));
    };

    // Handle form submission (Save)
    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     dispatch(updateAssignment(assignment)); // Dispatch action to update assignment
    //     closeModal(); // Close the modal after saving changes
    //     navigate(`/Kanbas/Courses/${cid}/Assignments`); // Navigate back to the Assignments screen
    // };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(updateAssignment(assignment)); // 派发更新作业的动作
        navigate(`/Kanbas/Courses/${cid}/Assignments`); // 返回作业列表
    };

    if (!assignment) {
        return <div>Loading...</div>;
    }

    return (
        <div id="wd-edit-assignment-dialog" className="modal fade show d-block" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">{dialogTitle}</h1>
                        <button type="button" className="btn-close" ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            {/* Assignment Name */}
                            <div className="mb-3">
                                <label className="form-label">Assignment Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={assignment.name}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder="Enter assignment name"
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    name="description"
                                    value={assignment.description}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    rows={3}
                                    placeholder="Enter assignment description"
                                    required
                                />
                            </div>

                            {/* Points */}
                            <div className="mb-3">
                                <label className="form-label">Points</label>
                                <input
                                    type="number"
                                    name="points"
                                    value={assignment.points}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    placeholder="Enter points"
                                    required
                                />
                            </div>

                            {/* Due Date */}
                            <div className="mb-3">
                                <label className="form-label">Due Date</label>
                                <input
                                    type="date"
                                    name="dueDate"
                                    value={assignment.dueDate}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            {/* Button Group */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <Button type="submit" variant="success">
                                    Save Changes
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentEditor;


    // Fetch assignment data from the database based on aid
    // useEffect(() => {
    //     const fetchAssignment = () => {
    //         const assignments = db.getAssignments();
    //         const foundAssignment = assignments.find((assign: any) => assign._id === aid);
    //         setAssignment(foundAssignment);
    //     };
    //     fetchAssignment();
    // }, [aid]);
    //
    // // Handle input change
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    //     const { name, value } = event.target;
    //     setAssignment({ ...assignment, [name]: value });
    // };
    //
    // // Handle form submission
    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     // Process the updated assignment (e.g., send to backend)
    //     console.log('Updated Assignment:', assignment);
    // };
    //
    // if (!assignment) {
    //     return <div>Loading...</div>;
    // }
    //
    // return (
    //     <div className="assignment-editor-container p-4">
    //         <h2 className="text-danger">Edit Assignment: {assignment.title}</h2>
    //         <hr />
    //
    //         <Form onSubmit={handleSubmit}>
    //             {/* Assignment Title */}
    //             <Form.Group className="mb-3" controlId="assignmentTitle">
    //                 <Form.Label>Assignment Title</Form.Label>
    //                 <Form.Control
    //                     type="text"
    //                     name="title"
    //                     value={assignment.title}
    //                     onChange={handleInputChange}
    //                     placeholder="Enter assignment title"
    //                     required
    //                 />
    //             </Form.Group>
    //
    //             {/* Description */}
    //             <Form.Group className="mb-3" controlId="assignmentDescription">
    //                 <Form.Label>Description</Form.Label>
    //                 <Form.Control
    //                     as="textarea"
    //                     rows={3}
    //                     name="description"
    //                     value={assignment.description}
    //                     onChange={handleInputChange}
    //                     placeholder="Enter assignment description"
    //                     required
    //                 />
    //             </Form.Group>
    //
    //             {/* Points */}
    //             <Form.Group className="mb-3" controlId="assignmentPoints">
    //                 <Form.Label>Points</Form.Label>
    //                 <Form.Control
    //                     type="number"
    //                     name="points"
    //                     value={assignment.points}
    //                     onChange={handleInputChange}
    //                     placeholder="Enter points"
    //                     required
    //                 />
    //             </Form.Group>
    //
    //             {/* Due Date */}
    //             <Form.Group className="mb-3" controlId="assignmentDueDate">
    //                 <Form.Label>Due Date</Form.Label>
    //                 <Form.Control
    //                     type="date"
    //                     name="dueDate"
    //                     value={assignment.dueDate}
    //                     onChange={handleInputChange}
    //                     required
    //                 />
    //             </Form.Group>
    //
    //             {/* Available Date */}
    //             <Form.Group className="mb-3" controlId="assignmentAvailableDate">
    //                 <Form.Label>Available Date</Form.Label>
    //                 <Form.Control
    //                     type="date"
    //                     name="availableDate"
    //                     value={assignment.availableDate}
    //                     onChange={handleInputChange}
    //                     required
    //                 />
    //             </Form.Group>
    //
    //             {/* Submission Type */}
    //             <Form.Group className="mb-3" controlId="assignmentSubmissionType">
    //                 <Form.Label>Submission Type</Form.Label>
    //                 <Form.Select
    //                     name="submissionType"
    //                     value={assignment.submissionType}
    //                     onChange={handleInputChange}
    //                 >
    //                     <option value="Online">Online</option>
    //                     <option value="On Paper">On Paper</option>
    //                 </Form.Select>
    //             </Form.Group>
    //
    //             {/* Button Group */}
    //             <div className="text-end">
    //                 <Link to={`/assignments/${cid}`} className="btn btn-danger me-2">
    //                     Cancel
    //                 </Link>
    //                 <Button type="submit" variant="success" className="float-end">
    //                     Save Changes
    //                 </Button>
    //             </div>
    //         </Form>
    //     </div>
//     );
// }
