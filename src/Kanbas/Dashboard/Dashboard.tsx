import { Link } from "react-router-dom";
// import * as db from "../Database";
import React, { useState } from "react";


export default function Dashboard({ courses, course, setCourse, addNewCourse,
                                      deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {
    // const [courses, setCourses] = useState(db.courses);
    // const [course, setCourse] = useState<any>({
    //     _id: "0", name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    //     image: "/images/reactjs.jpg", description: "New Description"
    // });
    // const addNewCourse = () => {
    //     const newCourse = { ...course,
    //         _id: new Date().getTime().toString() };
    //     setCourses([...courses, { ...course, ...newCourse }]);
    // };
    // const deleteCourse = (courseId: string) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };
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



    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>

            <h5>New Course
                <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse}> Add </button>
                <button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                    Update
                </button>
            </h5>
            <hr/>

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr/>
            <br/>
            <input value={course.name} className="form-control mb-2"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <textarea value={course.description} className="form-control"
                      onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
            <hr/>

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (

                        <div className="wd-dashboard-course col" style={{width: "300px"}}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to={`/Kanbas/Courses/${course._id}/Home`}
                                >
                                    <img src={course.imageUrl} width="100%" height={160} alt=""/>

                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name}
                                        </h5>

                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden"
                                           style={{maxHeight: 100}}>
                                            {course.description}
                                        </p>

                                        <button className="btn btn-primary"> Go</button>
                                        <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end">
                                            Edit
                                        </button>
                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }} className="btn btn-danger float-end me-2"
                                                id="wd-delete-course-click">
                                            Delete
                                        </button>

                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}


                    {/*<div className="wd-dashboard-course col" style={{width: "300px"}}>*/}
                    {/*    <div className="card h-100">*/}
                    {/*        <Link className="wd-dashboard-course-link text-decoration-none text-dark"*/}
                    {/*              to="/Kanbas/Courses/5800/Home">*/}
                    {/*            <img src="/images/algorithm.jpeg" width="100%"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="wd-dashboard-course-title card-title">*/}
                    {/*                    CS5800 Algorithm*/}
                    {/*                </h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Full Stack software developer*/}
                    {/*                </p>*/}
                    {/*                <button className="btn btn-primary"> Go</button>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div className="wd-dashboard-course col" style={{width: "300px"}}>*/}
                    {/*    <div className="card h-100">*/}
                    {/*        <Link className="wd-dashboard-course-link text-decoration-none text-dark"*/}
                    {/*              to="/Kanbas/Courses/4550/Home">*/}
                    {/*            <img src="/images/webdev.jpeg" width="100%"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="wd-dashboard-course-title card-title">*/}
                    {/*                    CS4550 12631 Web Development*/}
                    {/*                </h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Full Stack software developer*/}
                    {/*                </p>*/}
                    {/*                <button className="btn btn-primary"> Go</button>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="wd-dashboard-course col" style={{width: "300px"}}>*/}
                    {/*    <div className="card h-100">*/}
                    {/*        <Link className="wd-dashboard-course-link text-decoration-none text-dark"*/}
                    {/*              to="/Kanbas/Courses/1000/Home">*/}
                    {/*            <img src="/images/machine%20learning.jpeg" width="100%"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="wd-dashboard-course-title card-title">*/}
                    {/*                    CS1000 Machine Learning*/}
                    {/*                </h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Full Stack software developer*/}
                    {/*                </p>*/}
                    {/*                <button className="btn btn-primary"> Go</button>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="wd-dashboard-course col" style={{width: "300px"}}>*/}
                    {/*    <div className="card h-100">*/}
                    {/*        <Link className="wd-dashboard-course-link text-decoration-none text-dark"*/}
                    {/*              to="/Kanbas/Courses/2000/Home">*/}
                    {/*            <img src="/images/cybersecurity.jpeg" width="100%"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="wd-dashboard-course-title card-title">*/}
                    {/*                    CS2000 Cybersecurity*/}
                    {/*                </h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Full Stack software developer*/}
                    {/*                </p>*/}
                    {/*                <button className="btn btn-primary"> Go</button>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="wd-dashboard-course col" style={{width: "300px"}}>*/}
                    {/*    <div className="card h-100">*/}
                    {/*        <Link className="wd-dashboard-course-link text-decoration-none text-dark"*/}
                    {/*              to="/Kanbas/Courses/3000/Home">*/}
                    {/*            <img src="/images/database.jpeg" width="100%"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="wd-dashboard-course-title card-title">*/}
                    {/*                    CS3000 Database*/}
                    {/*                </h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Full Stack software developer*/}
                    {/*                </p>*/}
                    {/*                <button className="btn btn-primary"> Go</button>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div className="wd-dashboard-course col" style={{width: "300px"}}>*/}
                    {/*    <div className="card h-100">*/}
                    {/*        <Link className="wd-dashboard-course-link text-decoration-none text-dark"*/}
                    {/*              to="/Kanbas/Courses/4000/Home">*/}
                    {/*            <img src="/images/deep%20learning.jpeg" width="100%"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="wd-dashboard-course-title card-title">*/}
                    {/*                    CS4000 Deep Learning*/}
                    {/*                </h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Full Stack software developer*/}
                    {/*                </p>*/}
                    {/*                <button className="btn btn-primary"> Go</button>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>
    );
}

