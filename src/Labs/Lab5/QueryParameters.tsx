import React, { useState } from 'react';

const QueryParameters = () => {
    // State for numbers 'a' and 'b'
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    // Accessing the REMOTE_SERVER from environment variables
    const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

    return (
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>

            {/* Input fields to take values for a and b */}
            <input
                id="wd-query-parameter-a"
                className="form-control mb-2"
                value={a}
                type="number"
                onChange={(e) => setA(Number(e.target.value))}
            />
            <input
                id="wd-query-parameter-b"
                className="form-control mb-2"
                value={b}
                type="number"
                onChange={(e) => setB(Number(e.target.value))}
            />

            {/* Links for operations */}
            <a
                id="wd-query-parameter-add"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
            >
                Add {a} + {b}
            </a>
            <br />
            <a
                id="wd-query-parameter-subtract"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
            >
                Subtract {a} - {b}
            </a>
            <br />
            <a
                id="wd-query-parameter-multiply"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
            >
                Multiply {a} * {b}
            </a>
            <br />
            <a
                id="wd-query-parameter-divide"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
            >
                Divide {a} / {b}
            </a>

            <hr />
        </div>
    );
};

export default QueryParameters;
