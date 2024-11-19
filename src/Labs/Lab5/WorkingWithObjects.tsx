// import React, { useState } from "react";
// const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
//
// export default function WorkingWithObjects() {
//
//     const [assignment, setAssignment] = useState({
//         id: 1, title: "NodeJS Assignment",
//         description: "Create a NodeJS server with ExpressJS",
//         due: "2021-10-10", completed: false, score: 0,
//     });
//     const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
//
//     return (
//         <div id="wd-working-with-objects">
//             <h3>Working With Objects</h3>
//
//             <h4>Modifying Properties</h4>
//             <a id="wd-update-assignment-title"
//                className="btn btn-primary float-end"
//                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
//                 Update Title
//             </a>
//             <input className="form-control w-75" id="wd-assignment-title"
//                    defaultValue={assignment.title} onChange={(e) =>
//                 setAssignment({...assignment, title: e.target.value})}/>
//             <hr/>
//
//             <h4>Retrieving Objects</h4>
//             <a id="wd-retrieve-assignments" className="btn btn-primary"
//                href={`${REMOTE_SERVER}/lab5/assignment`}>
//                 Get Assignment
//             </a>
//             <hr/>
//
//             <h4>Retrieving Properties</h4>
//             <a id="wd-retrieve-assignment-title" className="btn btn-primary"
//                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
//                 Get Title
//             </a>
//             <hr/>
//
//         </div>
//     );
// }

import React, { useState, useEffect } from "react";

// Access the environment variable for the remote server URL
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const [module, setModule] = useState({
        id: 1,
        name: "Web Development",
        description: "Full Stack Web Development with React and Node.js",
        course: "CS101",
    });

    // Fetch the assignment object from the server
    useEffect(() => {
        fetch(`${REMOTE_SERVER}/lab5/assignment`)
            .then((response) => response.json())
            .then((data) => setAssignment(data));
    }, []);

    // Fetch the module object from the server
    useEffect(() => {
        fetch(`${REMOTE_SERVER}/lab5/module`)
            .then((response) => response.json())
            .then((data) => setModule(data));
    }, []);

    const handleUpdateAssignmentTitle = () => {
        fetch(`${REMOTE_SERVER}/lab5/assignment/title/${assignment.title}`)
            .then((response) => response.json())
            .then((data) => setAssignment(data));
    };

    const handleUpdateModuleName = () => {
        fetch(`${REMOTE_SERVER}/lab5/module/name/${module.name}`)
            .then((response) => response.json())
            .then((data) => setModule(data));
    };

    const handleUpdateAssignmentScore = (newScore: number) => {
        fetch(`${REMOTE_SERVER}/lab5/assignment/score/${newScore}`)
            .then((response) => response.json())
            .then((data) => setAssignment(data));
    };

    const handleUpdateAssignmentCompleted = (status: boolean) => {
        fetch(`${REMOTE_SERVER}/lab5/assignment/completed/${status}`)
            .then((response) => response.json())
            .then((data) => setAssignment(data));
    };

    const handleUpdateModuleDescription = (newDescription: string) => {
        fetch(`${REMOTE_SERVER}/lab5/module/description/${newDescription}`)
            .then((response) => response.json())
            .then((data) => setModule(data));
    };

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>

            {/* Assignment Details */}
            <h4>Assignment</h4>
            <div>
                <strong>Title:</strong> {assignment.title} <br />
                <strong>Description:</strong> {assignment.description} <br />
                <strong>Due Date:</strong> {assignment.due} <br />
                <strong>Completed:</strong> {assignment.completed ? "Yes" : "No"} <br />
                <strong>Score:</strong> {assignment.score} <br />
                <button onClick={handleUpdateAssignmentTitle}>Update Title</button>
            </div>
            <br />

            {/* Module Details */}
            <h4>Module</h4>
            <div>
                <strong>Name:</strong> {module.name} <br />
                <strong>Description:</strong> {module.description} <br />
                <strong>Course:</strong> {module.course} <br />
                <button onClick={handleUpdateModuleName}>Update Name</button>
            </div>
            <br />

            {/* Modify Assignment Score */}
            <h4>Modify Assignment Score</h4>
            <input
                type="number"
                value={assignment.score}
                onChange={(e) => handleUpdateAssignmentScore(parseFloat(e.target.value))}
                placeholder="Enter new score"
            />
            <br />


            {/* Modify Completion Status */}
            <h4>Completion Status</h4>
            <input
                type="checkbox"
                checked={assignment.completed}
                onChange={(e) => handleUpdateAssignmentCompleted(e.target.checked)}
            />
            <span> Mark as Completed</span>
            <hr />

            {/* Modify Module Description */}
            <h4>Modify Module Description</h4>
            <input
                type="text"
                defaultValue={module.description}
                onChange={(e) => handleUpdateModuleDescription(e.target.value)}
                placeholder="Enter new module description"
            />
            <br />
        </div>
    );
}

