// The length of an array is available as property length in
// the array variable. The indexOf() function allows finding
// where a particular array member is found.

    export default function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    return (
        <div id="wd-array-index-and-length">
            <h4>Array index and length</h4>
            length1 = {length1} <br />
            index1 = {index1}   <hr />
        </div>
    );}

