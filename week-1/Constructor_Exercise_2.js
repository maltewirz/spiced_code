// Write a function called invertCase that expects a string as a parameter. This function should return a new string with all the same characters as the string that was passed in but with the cases of the alphabetic characters switched. Uppercase characters should become lowercase and lowercase letters should become uppercase. Characters that are not alphabetic should not change. String.prototype.toUpperCase and String.prototype.toLowerCase will come in handy here.

function invertCase(str) {
    var strNew = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i).toUpperCase()) {
            strNew += str.charAt(i).toLowerCase();
        } else {
            strNew += str.charAt(i).toUpperCase();
        }
    }
    return strNew;
}
console.log(invertCase("Hello this IS 2019"));
