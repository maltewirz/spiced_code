// We've given getUser, we wait until that time is finished. Delay the action of console.log

function getUser(cb) {
    setTimeout(function() {
        const user = {
            name: "pete",
            age: 35
        };
        if (Math.floor(Math.random() * 3) === 2) {
            cb(new Error("my custom error msg"));
        } else {
            cb(null, user);
        }
    }, 2000);
}

// console.log("my user data: ", myUserData);

// Option 1
// getUser(function(user) {
//     console.log(user);
// });

//Option 2
// function printUser(user) {
//     console.log(user);
// }
// getUser(printUser);

function printUser(err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
}
getUser(printUser);
