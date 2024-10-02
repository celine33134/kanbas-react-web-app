import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
import assignmentseditor from "./assignmentseditor.json";
import users from "./users.json";
import enrollments from "./enrollments.json";

export type Assignment = {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    dueDate: string;
    availableDate: string;
    submissionType: string;
    assignmentGroup: string;
};

// Function to get assignments
export const getAssignments = (): Assignment[] => {
    return assignmentseditor; // Use assignmentseditor as the source for assignments
};


export {  courses,modules,assignments, assignmentseditor,users,enrollments};

