// JavaScript has a global object called JSON which stands
// for JavaScript Object Notation.
// The object provides several useful formatting functions
// such as stringify() and parse().
// Stringify converts JavaScript data structures to formatted strings.

export default function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    return (
        <div className="wd-json-stringify">
            <h3>JSON Stringify</h3>
            squares = {JSON.stringify(squares)}
            <hr />
        </div>
    );
}

