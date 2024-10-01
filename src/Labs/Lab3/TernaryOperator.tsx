// Ternary conditional operators are concise
// alternative to if/else statements. It takes three arguments
// A predicate expression that evaluates to true or false
// followed by a question mark ( ? )
// An expression that evaluates if the predicate is true followed by a colon ( : )
// Followed by an expression that evaluates iff the predicate is false

export default function TernaryOperator() {
    let loggedIn = true;

    return (
        <div id="wd-ternary-operator">
            <h4>Logged In</h4>
            {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
            <hr/>
        </div>
    );
}
