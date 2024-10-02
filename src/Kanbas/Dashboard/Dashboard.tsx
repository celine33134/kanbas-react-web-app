import { Link } from "react-router-dom";
import * as db from "../Database";

export default function Dashboard() {
    const courses = db.courses;

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />

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

