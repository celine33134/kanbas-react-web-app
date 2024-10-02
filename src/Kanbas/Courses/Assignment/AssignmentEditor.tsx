

import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import * as db from '../../Database';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const [assignment, setAssignment] = useState<any>(null);

    // Fetch assignment data from the database based on aid
    useEffect(() => {
        const fetchAssignment = () => {
            const assignments = db.getAssignments();
            const foundAssignment = assignments.find((assign: any) => assign._id === aid);
            setAssignment(foundAssignment);
        };
        fetchAssignment();
    }, [aid]);

    // Handle input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setAssignment({ ...assignment, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Process the updated assignment (e.g., send to backend)
        console.log('Updated Assignment:', assignment);
    };

    if (!assignment) {
        return <div>Loading...</div>;
    }

    return (
        <div className="assignment-editor-container p-4">
            <h2 className="text-danger">Edit Assignment: {assignment.title}</h2>
            <hr />

            <Form onSubmit={handleSubmit}>
                {/* Assignment Title */}
                <Form.Group className="mb-3" controlId="assignmentTitle">
                    <Form.Label>Assignment Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={assignment.title}
                        onChange={handleInputChange}
                        placeholder="Enter assignment title"
                        required
                    />
                </Form.Group>

                {/* Description */}
                <Form.Group className="mb-3" controlId="assignmentDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={assignment.description}
                        onChange={handleInputChange}
                        placeholder="Enter assignment description"
                        required
                    />
                </Form.Group>

                {/* Points */}
                <Form.Group className="mb-3" controlId="assignmentPoints">
                    <Form.Label>Points</Form.Label>
                    <Form.Control
                        type="number"
                        name="points"
                        value={assignment.points}
                        onChange={handleInputChange}
                        placeholder="Enter points"
                        required
                    />
                </Form.Group>

                {/* Due Date */}
                <Form.Group className="mb-3" controlId="assignmentDueDate">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="dueDate"
                        value={assignment.dueDate}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                {/* Available Date */}
                <Form.Group className="mb-3" controlId="assignmentAvailableDate">
                    <Form.Label>Available Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="availableDate"
                        value={assignment.availableDate}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                {/* Submission Type */}
                <Form.Group className="mb-3" controlId="assignmentSubmissionType">
                    <Form.Label>Submission Type</Form.Label>
                    <Form.Select
                        name="submissionType"
                        value={assignment.submissionType}
                        onChange={handleInputChange}
                    >
                        <option value="Online">Online</option>
                        <option value="On Paper">On Paper</option>
                    </Form.Select>
                </Form.Group>

                {/* Button Group */}
                <div className="text-end">
                    <Link to={`/assignments/${cid}`} className="btn btn-danger me-2">
                        Cancel
                    </Link>
                    <Button type="submit" variant="success" className="float-end">
                        Save Changes
                    </Button>
                </div>
            </Form>
        </div>
    );
}
