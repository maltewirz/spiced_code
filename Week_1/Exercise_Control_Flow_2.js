var a = {
    Berlin: 'Germany',
    Paris: 'France',
    'New York': 'USA'
};

var b = {};
for (var each in a) {
    console.log(each,a[each]);  // key + property
    b[a[each]] = each;          // now we just assign b property and key
}

console.log(b);
