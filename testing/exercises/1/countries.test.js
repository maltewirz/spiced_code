const { find } = require("./countries");

console.log(find("Neverland"));

test("When passed empty string, returns empty array", () => {
    expect(find("")).toEqual([]);
});

test(`The array that it returns contains no more than four matches`, () => {
    expect(find("A").length).toEqual(4);
});

test("The search is case insensitive", () => {
    expect(find("A")).toEqual(find("a"));
});

test(`If there are no matching countries, an empty array is returned`, () => {
    expect(find("Neverland")).toEqual([]);
});
