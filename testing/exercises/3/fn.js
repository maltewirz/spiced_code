module.exports = function fn(input) {
    if (typeof input != "string" && !Array.isArray(input)) {
        return null;
    }
    if (Array.isArray(input)) {
        // console.log("here" + str.length)
        let arr = [];
        for (let i = 0; i < input.length; i++) {
            arr.push(fn(input[i]));
        }
        return arr;
    }
    let newStr = "";
    for (let i = input.length - 1; i >= 0; i--) {
        newStr += input[i];
    }
    return newStr;
};
