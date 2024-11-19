import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import PathParameters from "./PathParameters";
import QueryParameters from "./RequestBody";
import RequestBody from "./RequestBody";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function Lab5() {
    return (
        <div id="wd-lab5">
            <h2>Lab 5</h2>
            <div className="list-group">
                <a href={`${REMOTE_SERVER}/lab5/welcome`}
                   className="list-group-item">
                    Welcome
                </a>
            </div><hr/>

            <EnvironmentVariables />
            <PathParameters/>
            <QueryParameters/>
            <RequestBody/>
            <WorkingWithArrays/>
            <WorkingWithObjects/>
            <HttpClient/>
            <WorkingWithObjectsAsynchronously/>
            <WorkingWithArraysAsynchronously/>
        </div>
    );
}

