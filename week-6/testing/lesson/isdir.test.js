//testing async code via callback fn
const { isdir } = require("./isdir");

test("isdir returns true when passed a directory", done => {
    isdir(__dirname, function(err, data) {
        expect(data).toBe(true);
        // done is not necessary here. but it oftentimes is in test for callback functions
        done();
    });
});

test("isdir returns false when passed a files", done => {
    isdir(__filename, function(err, data) {
        expect(data).toBe(false);
        done();
    });
});
