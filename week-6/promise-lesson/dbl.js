module.exports = function(n) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (isNaN(n)) {
                reject(new Error("Bad number"));
            } else {
                resolve(n * 2);
            }
        }, 1200);
    });
};
