// src/Kanbas/Enrollments/client.ts
import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/courses`;

export const enrollInCourse = async (courseId: string, userId: string) => {
    const response = await axios.post(`${ENROLLMENTS_API}/${courseId}/enroll`, { userId });
    return response.data;
};

export const unenrollFromCourse = async (courseId: string, userId: string) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${courseId}/unenroll`, { data: { userId } });
    return response.data;
};

export const getEnrollmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${ENROLLMENTS_API}/${courseId}/enrollments`);
    return response.data;
};

export const getEnrollmentsForUser = async (userId: string) => {
    const response = await axios.get(`${REMOTE_SERVER}/api/users/${userId}/enrollments`);
    return response.data;
};
