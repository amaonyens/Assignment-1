var createCounter = function(n) {
    let i = -1
    return function() {
        i++;
        return i + n;
    };
};

const counter = createCounter(10);
console.log(counter);
console.log(counter());
console.log(counter());
console.log(counter());


