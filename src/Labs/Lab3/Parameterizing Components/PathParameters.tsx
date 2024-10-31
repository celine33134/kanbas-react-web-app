// Path parameter names such as a and b, are declared in the path
// attribute of the Route component for the target screen.
// For instance the Route component below uses the colon character
// to declare parameters a and b. The first link encodes values 1
// and 2 for parameters a and b, wheres as the second link encodes
// values 3 and 4 for parameters a and b.

import { Routes, Route, Link } from "react-router-dom";
import AddPathParameters from "./AddPathParameters";

export default function PathParameters() {
    return (
        <div id="wd-path-parameters">
            <h2>Path Parameters</h2>
            <Link to="/Labs/Lab3/add/1/2">1 + 2</Link> <br />
            <Link to="/Labs/Lab3/add/3/4">3 + 4</Link>

            <Routes>
                <Route path="add/:a/:b"
                       element={<AddPathParameters />} />
            </Routes>
        </div>
    );
}

