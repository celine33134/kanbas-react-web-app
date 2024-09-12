import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">

                {/*course 1*/}
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} alt=""/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                    </div>
                </div>

                {/*course 2*/}
                <div className="wd-dashboard-course">
                    <img src="/images/algorithm.jpeg" width={200} alt=""/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/5800/Home">
                            CS5800 Algorithm
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/5800/Home"> Go </Link>
                    </div>
                </div>


                {/*course 3*/}
                <div className="wd-dashboard-course">
                    <img src="/images/webdev.jpeg" width={200} alt=""/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/4550/Home">
                            CS4550 12631 Web Development
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/4550/Home"> Go </Link>
                    </div>
                </div>

                {/*course 4*/}
                <div className="wd-dashboard-course">
                    <img src="/images/machine%20learning.jpeg" width={200} alt=""/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1000/Home">
                            CS1000 Machine Learning
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/1000/Home"> Go </Link>
                    </div>
                </div>

                {/*course 5*/}
                <div className="wd-dashboard-course">
                    <img src="/images/cybersecurity.jpeg" width={200} alt=""/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/2000/Home">
                            CS2000 Cybersecurity
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/2000/Home"> Go </Link>
                    </div>
                </div>

                {/*course 6*/}
                <div className="wd-dashboard-course">
                    <img src="/images/database.jpeg" width={200} alt=""/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/3000/Home">
                            CS3000 Database
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/3000/Home"> Go </Link>
                    </div>
                </div>

                {/*course 7*/}
                <div className="wd-dashboard-course">
                    <img src="/images/deep%20learning.jpeg" width={200} alt=""/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/4000/Home">
                            CS4000 Deep Learning
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/4000/Home"> Go </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

