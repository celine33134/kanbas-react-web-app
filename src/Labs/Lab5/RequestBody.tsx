import React, { useState } from 'react';

const QueryParameters = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [operation, setOperation] = useState<string>('add');
    const [result, setResult] = useState<string>('');

    const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

    // Function to handle POST request with JSON
    const handlePostJson = async () => {
        const response = await fetch(`${REMOTE_SERVER}/lab5/calculator`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ a, b, operation }),
        });
        const data = await response.json();
        setResult(data.result);
    };

    // Function to handle POST request with XML
    const handlePostXml = async () => {
        const xmlData = `<params a="${a}" b="${b}" operation="${operation}" />`;

        const response = await fetch(`${REMOTE_SERVER}/lab5/calculator/xml`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/xml' },
            body: xmlData,
        });

        const data = await response.json();
        setResult(data.result);
    };

    return (
        <div id="wd-query-parameters">
            <h3>Request Body Parameters</h3>

            {/* Input fields for numbers 'a', 'b', and 'operation' */}
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
            <select
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
                className="form-control mb-2"
            >
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
            </select>

            {/* Button to trigger POST request with JSON */}
            <button onClick={handlePostJson} className="btn btn-primary mb-2">
                Send JSON Request
            </button>

            {/* Button to trigger POST request with XML */}
            <button onClick={handlePostXml} className="btn btn-primary mb-2">
                Send XML Request
            </button>

            {/* Display result */}
            {result && <div>Result: {result}</div>}
        </div>
    );
};

export default QueryParameters;
