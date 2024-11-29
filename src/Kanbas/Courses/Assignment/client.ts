
import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// Retrieve assignments for a specific course
export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;  // Ensure the data structure is returned as expected
};

// Create a new assignment
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};

// Delete an assignment
export const deleteAssignment = async (assignmentId: string) => {
    await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
};

// Update an assignment
export const updateAssignment = async (assignment: any) => {
    await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
};
