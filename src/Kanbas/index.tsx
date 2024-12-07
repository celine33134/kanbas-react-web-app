// import { Routes, Route, Navigate } from "react-router";
// import React, { useEffect, useState } from "react";
// import { Provider, useSelector } from "react-redux";
// import Dashboard from "./Dashboard/Dashboard";
// import Account from "./Account";
// import Courses from "./Courses";
// import KanbasNavigation from "./Account/Navigation";
// import Session from "./Account/Session";
// import * as userClient from "./Account/client";
// import * as courseClient from "./Courses/client";
// import store from "./store";
// import "./styles.css";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
//
// export default function Kanbas() {
//     const { currentUser } = useSelector((state: any) => state.account); // Access Redux state
//     const [courses, setCourses] = useState<any[]>([]);
//     const [enrolling, setEnrolling] = useState<boolean>(false);
//     const [course, setCourse] = useState<any>({
//         _id: "1234",
//         name: "New Course",
//         number: "New Number",
//         startDate: "2023-09-10",
//         endDate: "2023-12-15",
//         description: "New Description",
//     });
//
//
//
//     // Fetch courses for the current user
//     const findCoursesForUser = async () => {
//         if (!currentUser) return;
//         try {
//             const courses = await userClient.findCoursesForUser(currentUser._id);
//             setCourses(courses);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     // Fetch all courses and update enrollment
//     const fetchCourses = async () => {
//         if (!currentUser) return;
//         try {
//             const allCourses = await courseClient.fetchAllCourses();
//             const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
//             const updatedCourses = allCourses.map((course: any) => {
//                 if (enrolledCourses.find((c: any) => c._id === course._id)) {
//                     return { ...course, enrolled: true };
//                 }
//                 return course;
//             });
//             setCourses(updatedCourses);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     // UseEffect to handle data fetching
//     useEffect(() => {
//         if (currentUser) {
//             if (enrolling) {
//                 fetchCourses();
//             } else {
//                 findCoursesForUser();
//             }
//         }
//     }, [currentUser, enrolling]);
//
//     // Update enrollment status for a course
//     const updateEnrollment = async (courseId: string, enrolled: boolean) => {
//         if (!currentUser) return;
//         try {
//             if (enrolled) {
//                 await userClient.enrollIntoCourse(currentUser._id, courseId);
//             } else {
//                 await userClient.unenrollFromCourse(currentUser._id, courseId);
//             }
//             setCourses(courses.map((course) =>
//                 course._id === courseId ? { ...course, enrolled } : course
//             ));
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     // Add new course
//     const addNewCourse = async () => {
//         try {
//             const newCourse = await courseClient.createCourse(course);
//             setCourses([...courses, newCourse]);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     // Delete a course
//     const deleteCourse = async (courseId: string) => {
//         try {
//             await courseClient.deleteCourse(courseId);
//             setCourses(courses.filter((course) => course._id !== courseId));
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     // Update course
//     const updateCourse = async () => {
//         try {
//             await courseClient.updateCourse(course);
//             setCourses(courses.map((c) => (c._id === course._id ? course : c)));
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     // Render content
//     const renderContent = () => {
//         if (!currentUser) {
//             return (
//                 <div>
//                     <h1>Please Sign In</h1>
//                     <p>You need to sign in to access the Kanbas platform.</p>
//                 </div>
//             );
//         }
//
//
//         return (
//             <div id="wd-kanbas">
//                 <KanbasNavigation />
//                 <div className="wd-main-content-offset p-3">
//                     <Routes>
//                         <Route path="/" element={<Navigate to="Account" />} />
//                         <Route path="/Account/*" element={<Account />} />
//                         <Route
//                             path="/Dashboard"
//                             element={
//                                 <Dashboard
//                                     courses={courses}
//                                     course={course}
//                                     setCourse={setCourse}
//                                     addNewCourse={addNewCourse}
//                                     deleteCourse={deleteCourse}
//                                     updateCourse={updateCourse}
//                                     enrolling={enrolling}
//                                     setEnrolling={setEnrolling}
//                                     updateEnrollment={updateEnrollment}
//                                 />
//                             }
//                         />
//                         <Route path="/Courses/:cid/*" element={<Courses courses={courses} />} />
//                         <Route path="/Calendar" element={<h1>Calendar</h1>} />
//                         <Route path="/Inbox" element={<h1>Inbox</h1>} />
//                     </Routes>
//                 </div>
//             </div>
//         );
//     };
//
//     return (
//         <Session>
//             <Provider store={store}>
//                 {renderContent()}
//             </Provider>
//         </Session>
//     );
// }

import { Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard/Dashboard";
import Account from "./Account";
import Signin from "./Account/Signin";
import KanbasNavigation from "./Account/Navigation";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import "./styles.css";

export default function Kanbas() {
    const { currentUser } = useSelector((state: any) => state.account || { currentUser: null });

    const [courses, setCourses] = useState<any[]>([]);
    const [enrolling, setEnrolling] = useState<boolean>(false);
    const [course, setCourse] = useState<any>({
        _id: "1234",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        description: "New Description",
    });

    const findCoursesForUser = async () => {
        if (!currentUser) return;
        try {
            const courses = await userClient.findCoursesForUser(currentUser.id);
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchCourses = async () => {
        if (!currentUser) return;
        try {
            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findCoursesForUser(currentUser.id);
            const updatedCourses = allCourses.map((course: any) =>
                enrolledCourses.find((c: any) => c._id === course._id)
                    ? { ...course, enrolled: true }
                    : course
            );
            setCourses(updatedCourses);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (currentUser) {
            enrolling ? fetchCourses() : findCoursesForUser();
        }
    }, [currentUser, enrolling]);

    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (!currentUser) return;
        try {
            if (enrolled) {
                await userClient.enrollIntoCourse(currentUser.id, courseId);
            } else {
                await userClient.unenrollFromCourse(currentUser.id, courseId);
            }
            setCourses(
                courses.map((course) =>
                    course._id === courseId ? { ...course, enrolled } : course
                )
            );
        } catch (error) {
            console.error(error);
        }
    };

    const addNewCourse = async () => {
        try {
            const newCourse = await courseClient.createCourse(course);
            setCourses([...courses, newCourse]);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteCourse = async (courseId: string) => {
        try {
            await courseClient.deleteCourse(courseId);
            setCourses(courses.filter((course) => course._id !== courseId));
        } catch (error) {
            console.error(error);
        }
    };

    const updateCourse = async () => {
        try {
            await courseClient.updateCourse(course);
            setCourses(courses.map((c) => (c._id === course._id ? course : c)));
        } catch (error) {
            console.error(error);
        }
    };

    const renderContent = () => {
        if (!currentUser) {
            return (
                <Routes>
                    <Route path="/" element={<Navigate to="/signin" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="*" element={<Navigate to="/signin" />} />
                </Routes>
            );
        }

        return (
            <div id="wd-kanbas">
                <KanbasNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route
                            path="/Dashboard"
                            element={
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    enrolling={enrolling}
                                    setEnrolling={setEnrolling}
                                    updateEnrollment={updateEnrollment}
                                />
                            }
                        />
                        <Route path="/Courses/:cid/*" element={<h1>Course Details</h1>} />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        );
    };

    return <Session>{renderContent()}</Session>;
}





