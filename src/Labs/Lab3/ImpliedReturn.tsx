// One of the new features of the new ES6 functions is implied returns,
// that is, if the body of the function consists of just returning some
// value or expression, then the return statement is optional
// and can be replaced with just the value or expression.

const multiply = (a: number, b: number) => a * b;

export default function ImpliedReturn() {
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return (
        <div id="wd-implied-return">
            <h4>Implied return</h4>
            fourTimesFive = {fourTimesFive}<br/>
            multiply(4, 5) = {multiply(4, 5)}
            <hr/>
        </div>
    );
}
