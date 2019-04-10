

# Week 1

# Day 1 

## GIT Basics

1. `git clone https://yxz` to download a repository
2. `git checkout -b branchname` Create new branch
3. Created the file "test.txt"
4. `git status`to see the changes made
5. `git add test.txt` To add the file to staging
6. `git commit -m "First commit"` To commit this with comment
7. `git push origin master` to push it to server. origin is name of the remote repository.
   master is the branch.
8. `git pull origin master` This pulls commits from the remote repo that is located at origin.

### Other GIT stuff:

1. `git remote update` to show all changes
2. `git checkout <branch_i_want>` To switch between branches
3. `git branch` To check your branches, and to see which one you are on
4. `git branch -D <branch_to_delete>` To delete a local branch:
5. `git checkout -b <my_new_branch> origin/master` --> will create the new branch and automatically have it set to pull from master
6. `git remote -v` --> check where the remote for your git repo is.
7. `git push origin :<branch_name>` --> delete a REMOTE branch
8. `git clone <remote_repo>` --> clone a remote branch to your local computer. This is what you use if you want to copy code from github onto your computer.

## Formatting

- Whitespaces and indentation (4 whitespaces) is of great importance.
- When writing a higher function, copy and paste from original place, so it keeps the whitespaces.
- As a general rule, an opening curly brace ({) should be immediately followed by a line break. The matching closing curly brace (}) should appear on its own line and in the same column as the first character of the line in which the opening curly brace appeared.

# Day 2

`use strict';` this gives an error when assigning a=b=c; We will not use it for now.

## Comments

`// Example` Commenting Option 1
`/* Example */` Commenting Option 2

## Data Types

1. Undefined (e.g. variable that has no definition)
2. `null` (means nothing and has no properties)
3. Boolean - `true` and `false`
4. Number - 90210, 3.1, -55
5. String - "Why, hello there!"
6. Symbol - this is new in ES 2015 and we will leave it out of consideration for now
7. Object - A collection of values.

Note: `NaN` Means it is not a number.

####  `typeof`Character

```js
typeof 'test'; //'string'

typeof 99; //'number'

function logType(val) {
    if (val === null) {
        console.log("null!");
    } else if (Array.isArray(val)) {
        console.log("array!");
    } else if (typeof val == "object") {
        console.log("object!");
    } else if (Number.isNaN(val)) {
        console.log("not a number!");
    } else if (typeof val == "number") {
        console.log("number!");
    } else if (typeof val == "string") {
        console.log("string!");
    } else if (typeof val == "boolean") {
        console.log("boolean!");
    } else if (typeof val == "undefined") {
        console.log("undefined!");
    } else if (typeof val == "function") {
        console.log("function!");
    } else {
        console.log("i have no idea!");
    }
}
```

`typeof null` returns 'object', which is widely considered to be a bug. To test whether something is `null` you can use `===`:

#### Constructors

As with objects and arrays, Javascript provides constructors for strings, numbers, and booleans. When these functions are used as constructors (i.e., when they are used with the `new` keyword), they return primitive values *wrapped* in an object.

Example constructor 

```js
function Dog() {
  this.name = "doggie";				//note this has no comma and no double point
  this.color = "blue";				//constructor is a function and not an object!!!
  this.numLegs: 3;
}
```

```js
typeof new String("test"); //'object'
typeof new Number(55); //'object'
```

When used without the `new` keyword, these functions can be used to *cast* strings to numbers, numbers to strings, booleans to numbers, etc.

```js
String(666); //'666'
Number('100'); //100
Number('pizza'); //NaN
Number(true); //1
Boolean(0); //false
```

#### Variables

`var myname;` Declares variable

`var camelCaseReallyLong = 999;` First word in lowercase and the first letter of each subsequent word is capitalized

#### Escape sequences strings

`\'` will print a single quote inside single quotes.

#### Truthiness and Falsiness

Only booleans can be `true` or `false` but every value in Javascript is either truthy or falsey. A truthy value will be treated as `true` in conditional contexts and falsey values will be treated as `false`.

- `null` and `undefined` are both falsey.

- 0 and `NaN` are both falsey. All other numbers (including negative numbers) are truthy.

- "" (a string with no length) is falsey. All other strings are truthy.

- All objects, arrays, and functions are truthy.

  ```js
  if (0) {}	//false
  if (-1) {} //true  
  if ('') {} // false
  if ('tuna') {} //true
  if ([]) {} //true
  ```

## Control Flow

This is the order in which individual statements, instructions or function calls of an imperative program are executed or evaluated

This is also called the ternary operator because it has three parts.

```js
condition ? item1 : item2;
```

If the item to the left of the `?` is `true` or truthy, the item immediately to the right of the `?` is evaluated. If the item to the left of the `?` is `false` or falsey, the item to the right of the `:` is evaluated.

```js
var a = null ? 100 : 'nice'; //a is 'nice'
var b = 100 ? null : 'nice'; // b is null
```

#### Conditionals

```js
if (someCondition) {
    doSomething();
} else if (someOtherCondition) {
    doSomeOtherThing();
} else if (yetAnotherCondition) {
    doYetAnotherThing();
} else {
    doSomethingElse();
}
```

#### `for`

```
for (var i = 0; i < 5; i++) {
    doSomething();
}
```

#### `for...in`

`for...in` is used for iterating over the property names of an object.

```js
var obj = {
    a: 1,
    b: 2,
    c: 3
};

for (var p in obj) {
    console.log('The value of obj.' + p + ' is ' + obj[p]);
}
```

#### Random

- `a++` adds a number after running
- `++a` adds a number before running

# Day 3

## Global Scope and Global object

If you are writing a Javascript program that runs in a browser and you declare a variable outside of any function, you are declaring a variable in the *global scope*. That variable can be accessed anywhere. This is in contrast to variables that are declared within functions, which are said to be in *local scope* .

The fact that global variables can be accessed anywhere means that they can easily be overwritten accidentally, resulting in chaos. For this and other reasons it is best to minimize the number of global variables you create. There is seldom any reason to create more than one.

There is a *global object* and it is this object that `this` refers to in global scope. Variables that are declared in the global scope with `var` automatically become properties of the global object.

```js
// Global scope code
var a = 100;
a; //100
this.a; //100
```

Functions have access to all the same variables from the same scope. When variable is not declared in small scope, it will always broaden the scope until it has found one.

#### Undeclared assignment

If you are not declaring a variable with `var` it will become a global variable.

#### Hoisting

In *both* global and local scope, declarations of variables with `var` are processed prior to the execution of all other code, including assignments. This is called *hoisting*. 

#### Function declarations

You could write two formats. This is usual function format. fn() only after possible.

```js
function fn() {							
  console.log("hi!");
}
fn()
```

#### Alternative: Function expression. fn() before and after possible.

```js
fn()
var fn = function() {				
  console.log("yo");	
}
```

Defining a function using a function expression avoids hoisting - your function comes into existence in the spot in which it is defined. Some people choose to only use function expressions to define functions while others prefer to have the ability to call a function in a spot prior to the defintion of that function. This is a matter of style.

#### Local scope

Variables declared in a function are in local scope. They are not accessible outside of the function.

```js
var fn = function() {
    var n = 0;
    console.log(typeof n);
};

fn(); //logs 'number'
console.log(typeof n); //logs 'undefined'
```

#### Recursion 

Functions can call themselves! This is called _recursion_.

```js
var cutDownToSize = function(str) {
    if (str.length > 3) {
        return cutDownToSize(str.slice(0, -1));
    }
    return str;
};

cutDownToSize('teacher'); //'tea'
```

#### Immediately-invoked function expressions (iife)

A common pattern is to define a function without assigning it to a variable and immediately execute it. The purpose of this is to keep variables declared within the function out of the outer scope (ES 6 provides other ways to accomplish this which we will discuss at a later time).

```javascript
(function() {
    var a = 1;
    console.log(typeof a); //logs 'number'
})();

console.log(typeof a); //logs 'undefined'
```

Note the parentheses around the function expression. These are necessary for the parser to differentiate it from a function declaration. There are other ways to do this but parentheses are the most popular.

#### Functions are first-class

Functions in Javascript can be returned from functions and can be passed to other functions as parameters. They can be assigned to variables and object properties and can be stored in arrays. They are *first-class* citizens.

Functions in Javascript are objects. Functions can have properties assigned to them, as we have already seen with the `isArray` method of the `Array` constructor. Functions are a special kind of object that can be *called*.

#### The `arguments` object

When a function has been called and is running there is available to it in its local scope an `arguments` object. The `arguments` object is not an array but it is *array-like*. It has a `length` property whose value corresponds to the number of parameters that was passed to the function. It also has properties whose names are integers and hold the values that were passed as parameters.

```javascript
function fn(a, b, c) {
    console.log(arguments[0] == a); //logs 'true'
    console.log(arguments[1] == b); //logs 'true'
    console.log(arguments[2] == c); //logs 'true'
}
```

The `arguments` object is useful when the parameters passed to a function do not correspond to the parameters that were named and listed in the function definition.

```javascript
var exclaim = function(a) {
    var exclamation = a;
    if (arguments[1]) {
      exclamation = arguments[1];
    }
    return exclamation + '!!!';
};

exclaim('hello'); //'hello!!!'
exclaim('hello', 'goodbye'); //'goodbye!!!'
```

#### Nested functions

Functions can be defined in other functions. Functions that are defined in other functions have access to the local scope of the functions they are defined in.

```js
var outer = function() {
    var a = 100;

    var inner = function() {
        var b = 'hello';
        console.log(typeof a, typeof b);
    };

    inner(); //logs 'number', 'string'
    console.log(typeof a, typeof b); //logs 'number', 'undefined'
};
outer();
```

Note that this does not just apply to declared variables but also to parameters that are passed in, since they are in local scope as well.

```js
var getCounter = function(num) {
    return function() {
      return num++;
    };
};

var counter = getCounter(3);
counter(); //3
counter(); //4
counter(); //5
```

#### Callbacks

Functions that are passed to other functions are often called *callbacks*.

```js
setTimeout(function() {
    console.log('hello');
}, 1000);
```

The built-in function `setTimeout` takes a callback as its first parameter. The second parameter is a number of milliseconds. After the number of milliseconds passes, `setTimeout` calls the callback.

Example 2: function that takes another function as a parameter. It should wait 1.5 seconds and then run the function that was passed in.

```js
function waitthenrun(callback_fn) {
    setTimeout(callback_fn, 1500);
}

waitthenrun(function first() {
    console.log("i'm first");
});
```

#### Anonymous functions and named function expressions

All function declarations result in functions that have names. The function expressions in the examples above (including those that assign a function to a variable) do not have names. They are *anonymous functions*.

What if you want to define a recursive function using a function expression? You can use a *named function expression*. The name will be in the local scope of the function it names and inaccessible to the outer scope.

```js
var fn = function me(str) {
    if (!str) {
        return me('hello');
    }
    return str + '!';
};

fn('hi'); //'hi!'
fn(); // 'hello!';

typeof fn; //'function';
typeof me; //'undefined'
```

# Day 4 

# Objects

* Curly Brackets `{}` means it is an object.
* Inside a object is always a key and a property with a value. 

```js
var obj = {
		// key / property w value
    name: "ivana",
    age: 25,
    foods: ["one", "two"],
    address: {
        street: "hauptstr"
    },
    sayHello: function() {			//Function stored inside an object is called a method.
        console.log("hey");
    }
};
```

There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

**Dot Notation** - does not accept variables

```js
console.log(obj.address.street);
```

**Bracket Notation** - when using variables

```js
console.log(obj["address"]);
```

##### The `in` operator

When you access a property of an object that does not exist, the value that is returned is `undefined`.

```js
var obj = {};
obj.prop; //undefined
```

Of course, a property can exist and have `undefined` as its value. To test whether a property exists on an object, you can use the `in` operator.

```js
console.log("name" in obj); //returns true if 'name' exists
```

##### The `delete `operator 

```js
delete obj.name // this deletes the "name" key
```

##### Adding keys and properties to object

```js
obj.name = "ivana"  // this adds the "name" key with property "ivana"
```

##### Iterating over values in object 

```js
for (var e in obj) {
    console.log(e, obj[e]);					//bracket notation since variable
}
```

## Creating objects

Javascript provides multiple ways to create objects. The examples above all use *literal syntax*. It is also possible to create an object using the `Object` constructor but there is no advantage to doing so.

```js
var obj1 = {};
var obj2 = Object();
var obj3 = new Object();

obj1; //{}
obj2; //{}
obj3; //{}
```

Another way to create objects is to use the [`Object.create`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) method.

```js
var obj = Object.create(null);

obj; //{}
```

The `Object.create` method accepts two parameters. The first is an object that is to serve as the *prototype* of the object you are creating (if you do not want your object to have a prototype you can pass `null`). The second parameter is a *property descriptor* - an object that describes properties of the object you are creating.

#### Own properties:

> function Bird(name) {
>   this.name = name;
>   this.numLegs = 2;
> }
>
> let duck = new Bird("Donald");
> let canary = new Bird("Tweety");

`name`and `numLegs`are called `own`properties, because they are defined directly on the instance object. That means that `duck`and `canary`each has its own separate copy of these properties.

----

What is a prototype? A prototype is an object that another object *inherits* properties from. When you access a property on an object, if that property is not found, the property is then looked for in the prototype.

```js
var proto = {
  prop: 'whatever'
};

var obj = Object.create(proto);

obj.prop; //'whatever'
```

An object can have properties that have the same name as properties of its prototype. This is called *overriding*.

```js
var proto = {
  prop: 'whatever'
};

var obj = Object.create(proto);
obj.prop = 'not whatever';

obj.prop; //'not whatever'

delete obj.prop;

obj.prop; //'whatever'
```

What is a property descriptor? A property descriptor is an object that describes a property. There are specific attributes that can be used in a property descriptor:

- **value** - the value of the property
- **writable** - a boolean indicating whether the property can be set to a new value. The default is `false`
- **configurable** - a boolean indicating whether the descriptor for the property can be changed and whether the property can be deleted. The default is `false`
- **enumerable** - a boolean indicating whether the property should appear when the object's properties are enumerated (as with a `for...in` loop). The default is `false`.
- **get** - a function to be run when the property is accessed. The value returned from the function is used as the property value
- **set** - a function to be run when the property is set

```js
var obj = Object.create(null, {
  city: {
    value: 'Berlin'
  }
});

delete obj.city; //false (error in strict mode)

obj.city = 'Dallas'; //error in strict mode

obj.city; //'Berlin'

for (var prop in obj) {
  console.log(prop); //'city' is not logged
}
```

Note that these defaults are not used when you create a property by directly setting it on an object.

```js
var obj = {
  city: 'Berlin'
};

obj.country = 'Germany';

delete obj.city; //true

obj.country = 'Canada';

obj.country; //'Canada'

for (var prop in obj) {
  console.log(prop); //'country' is logged
}
```

Other methods that use property descriptors are [`Object.defineProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), [`Object.defineProperties`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties) and [`Object.getOwnPropertyDescriptor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor).

#### Properties inherited from `Object.prototype`

Objects inherit a number of properties that do not show up in `for..in` loops because they are not enumerable. Four particularly important properties that all objects inherit are:

- **constructor** - The function used to construct the object. For objects created using literal syntax the constructor is `Object`.
- **hasOwnProperty** - Returns a boolean indicating whether the specified property exists directly on the object or not.
- **toString** - Returns a string represenation of the object. This method is automatically called when the object is coerced to a string. By default this method returns '[object Object]'.
- **valueOf** - This method is automatically called when an object is coerced to a primitive value. By default this method returns the object itself.

# Arrays

Arrays are objects that can be used to store lists of items. The items may be of any type and each one can be accessed using its *index* - its position in the array.

```js
var arr = [ 'hello world', 90210, false, Math ];

arr[0]; // 'hello world';
arr[1]; // 90210
```

Arrays have a `length` property that indicates how many items are in the array.

```js
var arr = [ 'hello world', 90210, false, Math ];

arr.length; // 4
```

Arrays can be missing elements. Such arrays are said to be *sparse*.

```js
var arr = [];
arr[2] = 5;

arr.length; // 3
arr[0]; // undefined
arr; // [ , , 5 ]
```

In the examples above, arrays are created using literal syntax. It is also possible to create arrays using the `Array`constructor but there is almost never any reason to do so. The parameters you pass to `Array` become elements of the array that is created unless you only pass one parameter and that parameter is a number. In that case that parameter becomes the length of the array that is created. If the number is not a valid length, an error is thrown.

```js
var arr = new Array(5);

arr.length; // 5

arr = new Array(-5); // error
```

- 
- Use `for loop` for arrays, `for in loops` for object
- Arrays are for numerically indexed data - for non-numeric keys, use an Object.
- Arrays are great for storing lists.

```js 
var arr0 = ["cheese", 78, [1, 2, 3], { name: "ivana" }];
var arr = ["grapes", "fish", "tomatoes"];
```

* The index describes the position of an item in an array.

#### To access the first item of the arrays:

```js
console.log(arr[0]);  // outputs grapes
console.log(arr.length);	// outputs the arr length 3
```

#### For loop

``` js
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

#### Push and Pop

```js 
arr.push("burek");		//pushed "burek" to the end of arr

arr.pop()				// removes "burek" as it is the last items in array.
```

#### Shift and Unshift

- .shift()function removes the first item from an array.
- .unshift()works exactly like .push(), but instead of adding the element at the end of the array, unshift()adds the element at the beginning of the array.

```js
arr.shift()  //removes grapes
arr.unshift("burek")  //adds "burek" to start of array		
```

#### Splice

Splice method removes items from an array.

We  use slice to make copies of an array or a segment (or piece)

```js
arr.splice(1, 2);  //starts at and removes the next 2
```

Other extremely useful array methods:

- [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - converts the contents an array into a string with each item separated by the delimitor specified as the first parameter
- [`concat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) - returns a new array consisting of the combination of the passed in arrays and/or non-array values
- [`reverse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - reverses the array
- [`sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) - sorts the array. By default, it sorts alphabetically. However, a function can be passed in to specify how the sorting should occur
- [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - returns a new array consisting of only those elements that pass a test contained in the callback that is passed in
- [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - returns a new array consisting of elements returned by the callback that is passed in
- [`some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) - returns `true` as soon as a single elements in the arrays passes a test contained in the callback that is passed in. If none pass, `false` is returned
- [`every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - returns `true` if every item in the array passes the test contained in the callback that is passed in and `false` otherwise
- [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) - returns the index of an item in an array. If the item appears in the array more than once then only the first index is returned. If the item is not in the array then -1 is returned. Note that `===` is used to test if the specified item is in the array.
- [`lastIndexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) - like `indexOf` but returns the index of the last occuring match in the array instead of the first
- [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - an alternative to a `for` loop



# Day 5 

## Constructors 

Contructors are templates to construct new objects. Constructors are functions that, when called with the `new` keyword, return a newly created object (an *instance*). By convention, the names of constructors begin with capital letters.

```js
  function Country(name) {
      this.name = name;
  }
  
  var germany = new Country('Germany');
```

When a constructor is called with `new`, `this` in the body of the constructor function refers to the newly created object that will be returned.

Note that the `Country` function above does not have a `return` statement. No `return` statement is necessary since the newly created object will be returned automatically. In fact, if a constructor called with `new` does have a `return`statement that returns a primitive value, the newly created object will still be returned and the primitive value will not be.

```js
  function Country(name) {
      this.name = name;
      return 10;
  }
  
  var germany = new Country('Germany'); //{ name: 'Germany' } (and not 10)
```

However, a `return` statement that returns a different object will be effective.

```js
  function Country(name) {
      this.name = name;
      return {};
  }
  
  var germany = new Country('Germany'); //{} (and not { name: 'Germany' })
```

If a constructor is called with `new` and without any parameters passed in, it is not necessary to use parentheses. The presence of `new` is enough to make it clear that the function is being invoked and not merely accessed. However, parentheses are required if you wish to immediately access one of the newly created object's properties.

```js
var date = new Date; //no parentheses needed

var time = new Date().getTime(); //parentheses are needed
```

```js
function Person(a, n) {
    this.sleep = function() {
        console.log("zzzz");
    };
    this.age = a;
    this.name = n;
}

var leo = new Person("Dude", 44);
console.log(leo);
```

The sleep function is identitical for all created objects but not the same.

To verify what constructor what used for an object: object `instanceof` constructor.

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line

var myHouse = new House(4);

console.log(myHouse instanceof House);
```



## Prototype

```js
function Actor(n, a, o) {
    Person.call(this, n, a);
    this.oscars = o;
}

function Person(n, a) {
    this.age = a;
    this.name = n;
    this.hasHair = true;
}

Person.prototype.sleep = function() {
    console.log('zzzzzz');
};

Actor.prototype = Object.create(Person.prototype);
Actor.prototype.constructor = Actor;

Actor.prototype.act = function() {
    console.log('To be or not to be, that is the question!');
};

Actor.prototype.acceptOscar = function() {
    console.log("I promised myself I wasn't going to cry");
}

var leo = new Actor('Leonardo', 44, 1);

var jlaw = new Actor('Jennifer', 29, 1);

var joeSchmo = new Person('Joe', 56);

leo.sleep();

console.log(leo.hasHair)
```



```js 
function fn() {
    return [].slice.call(arguments);
}

console.log(
    fn(2,4,6)
);
```

Every function automatically has a `prototype` property whose value is an object with no enumerable properties. If a function is not called with `new`, it's prototype property does not have any role to play. When a function is called with `new`, the function's prototype property becomes the prototype of the object that the function returns.

```js
  function GermanCity(name) {
      this.name = name;
  }

  GermanCity.prototype.country = 'Germany';

  var berlin = new GermanCity('Berlin');
  var hamburg = new GermanCity('Hamburg');

  berlin.country; //'Germany'
  hamburg.country; //'Germany'
```

Prior to the advent of `Object.create` with ES 5, this was the only way to assign a prototype to an object.

Note that the connection between instances and their prototype is 'live' - changes to the properties of the prototype are immediately visible when those properties are accessed via the instances.

```js
function GermanCity(name) {
    this.name = name;
}

GermanCity.prototype.country = 'Germany';

var berlin = new GermanCity('Berlin');
var hamburg = new GermanCity('Hamburg');

berlin.country; //'Germany'
hamburg.country; //'Germany'

GermanCity.prototype.country = 'Deutschland';

berlin.country; //'Deutschland'
hamburg.country; //'Deutschland'
```

The prototype objects that are automatically attached to functions have an unenumerable property named `constructor` whose value is the function to which the prototype is attached. This is where the `constructor` property that all objects have comes from. If you overwrite a constructor's `prototype` property with a new object that doesn't have a `constructor` property, instances will lose the reference to their constructor.

```js
function GermanCity(name) {
    this.name = name;
}

var berlin = new GermanCity('Berlin');

berlin.constructor; //GermanCity

GermanCity.prototype = {};

var hamburg = new GermanCity('Hamburg');

hamburg.constructor; //Object
```

Prototypes are themselves objects that have other objects as their prototypes. The default object that is automatically assigned to a function's `prototype` property has `Object.prototype` as its prototype, as do object literals and objects created with the `Object` constructor. Through developer action it is possible for there to be long chains of prototypes attached to instances.

##### Prototype Chain:

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Object.prototype.isPrototypeOf(Dog.prototype); //true
Dog.prototype.isPrototypeOf(beagle);  // => true
//In simple text: Object.prototype > Dog.prototype > beagle.prototype
```

To assign a prototype to another Constructor:

``` js
Dog.prototype = Object.create(Animal.prototype);
//generic:
ChildObject.prototype = Object.create(ParentObject.prototype);
```





## The `instanceof` operator

The `instanceof` operator is used to test whether a given constructor exists as a constructor property of any of the prototypes in an object's prototype chain.

```js
var date = new Date;

date instanceof Date; //true

date instanceof Object; //true

date instanceof Array; //false
```

If you would like to make a constructor that can be called without `new` and still return an instance, the `instanceof`operator can help with that.

```js
function Country(name) {
    if (!(this instanceof Country)) {
        return new Country(name);
    }
    this.name = name;
}

var country = Country('Germany');

country instanceof Country; //true
```

# `this`

When a function that is a property of an object is called by referencing the function as a property of that object, `this`in the function body refers to the object to which the function belongs.

```js
var nyc = {
    nickname: 'the Big Apple',
    welcomeTo: function() {
        console.log('Welcome to ' + this.nickname);
    }
};

nyc.welcomeTo(); //logs 'Welcome to the Big Apple'

nyc['welcomeTo'](); //logs 'Welcome to the Big Apple'
```

This is the case even if the function is a property of a prototype that the object is inheriting properties from.

```js
function City(nickname) {
    this.nickname = nickname;
}

City.prototype.welcomeTo = function() {
    console.log('Welcome to ' + this.nickname);
};

new City('the Big Apple').welcomeTo(); //logs 'Welcome to the Big Apple'
```

But if you call the exact same function without referencing it as a property of the object, you get quite a different result.

```js
var nyc = {
    nickname: 'the Big Apple',
    welcomeTo: function() {
        console.log('Welcome to ' + this.nickname);
    }
};

var fn = nyc.welcomeTo;

fn(); //logs 'Welcome to undefined' if not in strict mode. In strict mode an error is thrown
```

The value that `this` refers to within a function is determined when the function is called (in this way, `this` is like a parameter). In the example above, the function is not called as a property of an object. In such cases the value that `this` refers to is the global object. Since the global object does not have a nickname property, 'Welcome to undefined' is logged.

If you are using strict mode, `this` will not refer to the global object but will instead be undefined. That is why an error occurs in the example above - attempting to access a property of an undefined value always throws an error.

It is frequently the case that you want to define a function in a scope and have `this` in that function refer to the same thing it refers to in the scope in which that function is defined. A standard way to accomplish this is to stick the value of `this` in a variable that will be accessible to the nested function.

```js
function City(nickname) {
    this.nickname = nickname;
}

City.prototype.welcomeTo = function() {
    console.log('Welcome to ' + this.nickname);
};

City.prototype.waitThenWelcomeTo = function() {
    var city = this;
    setTimeout(function() {
        city.welcomeTo();
    }, 1000);
};

new City('the Big Apple').waitThenWelcomeTo(); //logs 'Welcome to the Big Apple' after 1 second
```

ES 6 has provided some new syntax to make this easier. [Arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) automatically have the `this` value from their parent scope available to them.

```js
function City(nickname) {
    this.nickname = nickname;
}

City.prototype.welcomeTo = function() {
    console.log('Welcome to ' + this.nickname);
};

City.prototype.waitThenWelcomeTo = function() {
    setTimeout(() => {
        this.welcomeTo();
    }, 1000);
};

new City('the Big Apple').waitThenWelcomeTo(); //logs 'Welcome to the Big Apple' after 1 second
```

Unfortunately, arrow functions have not yet been implemented in all popular browsers and environments so it won't be completely safe to use them for a while. Another approach is to use the [`bind`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) method, which all functions inherit from their prototype.

```js
function City(nickname) {
    this.nickname = nickname;
}

City.prototype.welcomeTo = function() {
    console.log('Welcome to ' + this.nickname);
};

City.prototype.waitThenWelcomeTo = function() {
    setTimeout(function() {
        this.welcomeTo();
    }.bind(this), 1000);
};

new City('the Big Apple').waitThenWelcomeTo(); //logs 'Welcome to the Big Apple' after 1 second
```

## `call` and `apply`

The `call` and `apply` methods, which all functions inherit from their prototype, allow you to call a function with a `this`that you specify. The first argument to both methods is the object you would like `this` to refer to in the function call. `call` takes any number of other arguments which will all be passed to the function. `apply` allows you to use an array containing all the arguments to pass.

```js
var batman = {
    name: 'Batman',
    sayHi: function(name1, name2) {
        console.log('Hello ' + name1 + ' and ' + name2 + '. My name is ' + this.name + '.');
    }
};

batman.sayHi('Bill', 'Hillary'); //logs 'Hello Bill and Hillary. My name is Batman.'

batman.sayHi.call({ name: 'Hello Kitty' }, 'Brad', 'Angelina'); //logs 'Hello Brad and Angelina. My name is Hello Kitty.'

batman.sayHi.apply({ name: 'Cher' }, [ 'Will', 'Jada' ]); //logs 'Hello Will and Jada. My name is Cher.'
```



