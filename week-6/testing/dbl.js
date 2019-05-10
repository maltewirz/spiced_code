module.exports.dbl = function dbl(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(n)) {
                reject(new Error("Bad number!"));
            } else {
                resolve(n * 2);
            }
        }, 1000);
    });
};
