import React from "react"
// one page should contain only one default export, it can't contain more than one default export

// default export
// export default function TextFeildOne() {
//     return(
//         <>
//         <p>Hello from TextFeild</p>
//         </>
//     )
// }
// ------------------------------------------------
// named export
const TextFeild = (props) => {
    return (
        <input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            autoComplete={props.autoComplete}
            data-testid={props.dataTestId}
            maxLength={props.maxLength}
        >
        </input>
    )
}

export {
    TextFeild,
}

//--------------------------------------------------
 function mathFunctions(a, b){
    const add = a+b;
    const sub = a-b;
    const mux = a*b;
    const divide = a/b;
    return [add, sub, mux, divide];
}

// destructuring the array
const [add, sub, mux, divide] = mathFunctions(2,4);
console.log([add, sub, mux, divide]);

// using spread operator
const numberOnes = [1,3,5,7,9];
const numberTwos = [2,4,6,8,10];
const mixed = [...numberOnes, ...numberTwos]
console.log(mixed);

const [one,two,...restOfThat] = numberOnes;
console.log(one);
console.log(two);
console.log(restOfThat);

const fruits = {
    name: "Gova",
    color: "red",
    origin: "India"
}

const vegetables = {
    vegName: "Ladies finger",
    vegColor: "Green",
    vegOrigin: "Singapur",
}

const mixedVegs = {...fruits, ...vegetables};
console.log(mixedVegs);

// array methos in react (mostly uses)
const coolArray = [2, 4, 20, 6, 8, 10, 6]

// map
const mapMethod = coolArray.map((value) => `By map value is ${value}`)
const value = mapMethod.map((item) => item)
console.log(value)

// reduce
const startAt100 = coolArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 100)
console.log("reduced value :", startAt100);

// filter
const filterMethod = coolArray.filter((item) => item >= 6)
console.log("filtered value :", filterMethod);

// find
const findMethod = coolArray.find((item) => item > 5)
console.log("find value :", findMethod);

// includes
const includesMethod = coolArray.includes(3)
console.log("included value :", includesMethod);

const includes1Method = coolArray.includes(6)
console.log("included value :", includes1Method);