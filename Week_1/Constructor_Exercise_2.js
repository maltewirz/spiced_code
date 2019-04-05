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
