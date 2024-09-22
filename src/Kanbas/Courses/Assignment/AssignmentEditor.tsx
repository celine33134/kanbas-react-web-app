import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function AssignmentEditor() {
    const { aid } = useParams();
    const [assignment, setAssignment] = useState({
        name: 'Assignment ' + aid,
        description: 'Enter a description for this assignment...',
        points: 100,
        dueDate: '2024-09-30',
        submissionType: 'Online',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setAssignment({ ...assignment, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Process the updated assignment (e.g., send to backend)
        console.log('Updated Assignment:', assignment);
    };

    return (
        <div className="assignment-editor-container p-4">
            <h2 className="text-danger">Edit Assignment {aid}</h2>
            <hr />

            <Form onSubmit={handleSubmit}>
                {/* Assignment Name */}
                <Form.Group className="mb-3" controlId="assignmentName">
                    <Form.Label>Assignment Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={assignment.name}
                        onChange={handleInputChange}
                        placeholder="Enter assignment name"
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

                {/* Submit Button */}
                <div className="text-end">
                    <Button type="submit" variant="success" className="float-end">
                        Save Changes
                    </Button>
                </div>
            </Form>
        </div>
    );
}
export {};