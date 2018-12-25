
const DECREMENT = 'DECREMENT';
const INCREMENT = 'INCREMENT';


const increment = (diff) =>({
    type:INCREMENT,
    diff:diff
});

const decrement = (diff) => ({
    type:DECREMENT,
    diff:diff
});

console.log(increment(1));
console.log(decrement(5));

