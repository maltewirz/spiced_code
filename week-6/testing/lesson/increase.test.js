const { increase } = require("./increase.js");

test('passing NaN returns the string "ERROR"', () => {
    //this is where the actual test will go
    expect(increase(NaN)).toBe("ERROR");
});

test('passing a negative number returns the string "ERROR"', () => {
    expect(increase(-1)).toBe("ERROR");
});

test("passing a number of 3 returns the number 3000000", () => {
    expect(increase(3)).toBe(3000000);
});

test("passing a number of 90000000 returns the number 90000000", () => {
    expect(increase(90000000)).toBe(90000000);
});

// test("passing a number of 0-1000 returns the number 0-1000", () => {
//     for (i = 0; i < 1000; i++) {
//         expect(increase(i)).toBe(i * 1000000);
//     }
// });
