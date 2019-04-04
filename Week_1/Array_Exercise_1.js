function each(val, fn) {
    //val: object or array; fn: any function
    if (Array.isArray(val)) {
        //array transform
        for (var i = 0; i < val.length; i++) {
            fn(val[i], i); //no return needed, breaks the for loop
        }
    } else {
        //object transform
        for (var e in val) {
            fn(val[e], e);
        }
    }
}

//test cases
each(
    {
        a: 1,
        b: 2
    },
    function(val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function(val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'
