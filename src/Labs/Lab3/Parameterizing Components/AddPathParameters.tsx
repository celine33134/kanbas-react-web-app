// The URL can also be used to encode parameters when navigating
// between screens. Components can parse parameters from the path
// using the useParams React.js hook. The Add component below is
// parsing parameters a and b from the path and calculating the
// arithmetic addition of the parameters

    import React from "react";
import { useParams } from "react-router-dom";

export default function AddPathParameters() {
    const { a, b } = useParams();
    return (
        <div id="wd-add"> <h4>Add Path Parameters</h4>
            {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
        </div>
    );
}
