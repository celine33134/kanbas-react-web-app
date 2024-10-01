// Multiple values, of various datatypes can be combined together
// to create complex datatypes called objects. For example the code
// below declares a house object collecting several numbers, strings,
// arrays, and other objects to represent a particular instance of a house.
// The house variable is assigned an object literal declared within
// opening and closing curly braces { and }. Objects contain pairs
// of properties and values separated by commas. Values can be of any
// datatype including Number, String, Boolean, arrays and other objects.
// In the example below we declared a house with 4 bedrooms,
// 2.5 bathrooms and 2000 squareFeet. The house has a nested object stored
// in property address which contains String properties such as street,
// city and state. The owners String array declares the names of the owners.

export default function House() {
    const house = {
        bedrooms: 4,
        bathrooms: 2.5,
        squareFeet: 2000,
        address: {
            street: "Via Roma",
            city: "Roma",
            state: "RM",
            zip: "00100",
            country: "Italy",
        },
        owners: ["Alice", "Bob"],
    };
    return (
        <div id="wd-house">
            <h4>House</h4>
            <h5>bedrooms</h5>
            {house.bedrooms}
            <h5>bathrooms</h5>
            {house.bathrooms}
            <h5>Data</h5>
            <pre>{JSON.stringify(house, null, 2)}</pre>
            <hr />
        </div>
    );
}
