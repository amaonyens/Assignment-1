
var expect = function(val) {
    return {
        toBe:(v) => {
            if (v === val) return true;
            else throw new Error ("Not Equal");
        },
        notToBe:(v) => {
            if (v !== val) return true;
            else throw new Error ("Equal");
        }
    };
};

const toBe = expect(5);
console.log(toBe);
const notToBe = expect(5);
console.log(notToBe);

