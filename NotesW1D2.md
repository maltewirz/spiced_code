# Day 3

`'use strict';` this gives an error when assigning a=b=c; We will not use it for now.

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

### `typeof`Character
```js
typeof 'test'; //'string'

typeof 99; //'number'
```
`typeof null` returns 'object', which is widely considered to be a bug. To test whether something is `null` you can use `===`:



## Variables

`var myname;` Declares variable

`var camelCaseReallyLong = 999;` First word in lowercase and the first letter of each subsequent word is capitalized

## Escape sequences strings
`\'` will print a single quote inside single quotes.


## Control Flow
This is the order in which individual statements, instructions or function calls of an imperative program are executed or evaluated

## Truthiness and Falsiness
Only booleans can be `true` or `false` but every value in Javascript is either truthy or falsey. A truthy value will be treated as `true` in conditional contexts and falsey values will be treated as `false`.

* `null` and `undefined` are both falsey.
* 0 and `NaN` are both falsey. All other numbers (including negative numbers) are truthy.
* "" (a string with no length) is falsey. All other strings are truthy.
* All objects, arrays, and functions are truthy.

if (a) {
    doSomething;
}

if a && doSomething;

## Random

* `a++` adds a number after running
* `++a` adds a number before running
* `var c = a ? "yes" : "no"` Shortcut for if / else (called a conditional operator): `condition ? item1 : item2;`


# css

## Tips

* Coding slower reduces the risks of bugs, e.g. not linking the stylesheet or the JS.
* **Block level elements** will by default take up the whole width of the parent that they're in. By default, block level elements will stack on top of each other. Block level elements: divs, p, h1.
* **Inline block level elements** are the opposite of block level. They will by default sit next to each other. Examples are: img, textarea, buttons.

* `Float` can be defined to be left and right. By default, floats will collapse the heigth of their parent... if the parent doesn't have a heigth set on it.

* `position: absolute, relative, fixed` By default: static. Settings an elements position to absolute, relative or fixed fives us access to `left`, `right`, `bottom`, `top`, `z-index`.
* `position absolute` just ignores all the CSS markings and will position the element wherever we defined.
* `position fixed` is the same but also follows the user while scrolling. The viewport (the dimension of the actual browser) will be the same.
* `position relative` will position an element relative to the default location on the page, relative to where it wants to be by default.
When a parent element has position:relative and the children have position:absolute, then the children will be positioned relative to their parents.

* `z-index`controls the stacking order. Stacking order determines which elements should sit on top of another element, if there are two elements that want to sit on the same element. We only have accesss to z-index if an element has position relative, absilute, fixed. The visible element has the highest z index.
