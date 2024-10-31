// While the spreader operator is used to expand an iterable object
// into the list of arguments, the destructing operator is used to
// unpack values from arrays, or properties from objects, into distinct
// variables. In the example below we declare object person and array numbers.
// These can be unpacked, or destructed, into new variables or constants by
// an object's property name or an array's item position.

    export default function Destructing() {
    const person = { name: "John", age: 25 };
    const { name, age } = person;
    // const name = person.name
    // const age = person.age
    const numbers = ["one", "two", "three"];
    const [ first, second, third ] = numbers;
    return (
        <div id="wd-destructing">
            <h2>Destructing</h2>
            <h3>Object Destructing</h3>
            const &#123; name, age &#125; =
            &#123; name: "John", age: 25 &#125;<br /><br />
            name = {name}<br />
            age = {age}
            <h3>Array Destructing</h3>
            const [first, second, third] = ["one","two","three"]<br/><br/>
            first = {first}<br />
            second = {second}<br />
            third = {third}<hr />
        </div>
    );
}

