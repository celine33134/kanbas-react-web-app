// src/Kanbas/Courses/Enrollments/index.tsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as enrollmentsClient from "../Enrollments/client";
import {enroll, setEnrollments, unenroll} from "./reducer";

export default function Enrollments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState(""); // Assume userId is managed in state or via context
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    if (!cid) {
        return <div>Error: Course ID is missing.</div>;
    }

    // Enroll user in course
    const enrollInCourse = async () => {
        if (!userId) return;
        const enrollment = await enrollmentsClient.enrollInCourse(cid, userId);
        dispatch(enroll(enrollment));
    };

    // Unenroll user from course
    const unenrollFromCourse = async () => {
        await enrollmentsClient.unenrollFromCourse(cid, userId);
        dispatch(unenroll({ courseId: cid, userId }));
    };

    useEffect(() => {
        // Fetch current enrollments for the course
        const fetchEnrollments = async () => {
            const currentEnrollments = await enrollmentsClient.getEnrollmentsForCourse(cid);
            // Assuming you have a reducer to handle setting enrollments state
            dispatch(setEnrollments(currentEnrollments));
        };
        fetchEnrollments();
    }, [cid, dispatch]);

    return (
        <div>
            <h3>Enrollments for Course: {cid}</h3>
            <ul>
                {enrollments.map((enrollment: any) => (
                    <li key={enrollment._id}>
                        User {enrollment.userId}
                        <button onClick={() => unenrollFromCourse()}>Unenroll</button>
                    </li>
                ))}
            </ul>

            <div>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter User ID"
                />
                <button onClick={enrollInCourse}>Enroll in this Course</button>
            </div>
        </div>
    );
}
