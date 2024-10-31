import { FaPlus } from "react-icons/fa";
import { useState } from "react";

interface AssignmentsControlsProps {
    assignmentName: string;
    setAssignmentName: (name: string) => void;
    addAssignment: () => void;
}

interface AssignmentsProps {
    openModal: (aid: string) => void;
}


export default function AssignmentsControls({ assignmentName, setAssignmentName, addAssignment }: AssignmentsControlsProps) {
    return (
        <div className="assignments-controls">
            <input
                type="text"
                value={assignmentName}
                onChange={(e) => setAssignmentName(e.target.value)}
                placeholder="Enter Assignment Name"
            />
            <button onClick={addAssignment} className="btn btn-lg btn-danger">
                <FaPlus className="me-2" />
                Add Assignment
            </button>
        </div>
    );
}
