// Import the new Account screen in the Kanbas screen
// and confirm the new Signin screen renders in the Account screen.

import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard/Dashboard";
import Account from "./Account";
import Courses from "./Courses";
import KanbasNavigation from "./Account/Navigation";
import "./styles.css";
// import * as db from "./Database";
import {useEffect, useState } from "react";
import store from "./store";
import { Provider, useSelector } from "react-redux";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";


export default function Kanbas() {

    // const [courses, setCourses] = useState<any[]>(db.courses);
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
        let courses = [];
        try {
            courses = await userClient.findMyCourses();
        } catch (error) {
            console.error(error);
        }
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);


    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });
    // const addNewCourse = () => {
    //     setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    // };
    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([ ...courses, newCourse ]);
    };

    // const deleteCourse = (courseId: any) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };
    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };
    const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
                if (c._id === course._id) { return course; }
                else { return c; }
            })
        );};


    return (
        <Session>
        <Provider store={store}>
            <div id="wd-kanbas">
                        <KanbasNavigation/>
                        <h1>Kanbas</h1>
                        <h2>Account</h2>
            <div className="wd-main-content-offset p-3">
                        <Routes>
                            <Route path="/" element={<Navigate to="Account"/>}/>
                            <Route path="/Account/*" element={<Account/>}/>
                            <Route path="/Dashboard" element={
                                <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                            }/>
                            <Route path="/Courses/:cid/*" element={<Courses courses={courses}/>} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
            </div>
        </div>
        </Provider>
            </Session>
    );
}

