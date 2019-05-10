const { dbl } = require("./dbl");

test("dbl return argument * 2", () => {
    return dbl(2).then(val => {
        expect(val).toBe(4);
    });
});

test("dbl return argument * 2", () => {
    return dbl("pizza").catch(err => {
        expect(err.message).toBe("Bad number!");
    });
});
