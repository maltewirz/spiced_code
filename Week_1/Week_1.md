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

<a href="wk1_dy2_data_types">Data Types</a> / <a href="wk1_dy2_control_flow">Control Flow</a>

<a href="wk1_html_css_lab">HTML/CSS Lab</a>

[Placing Elements with CSS](css_positioning)

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

- `null` and `undefined` are both falsey.
- 0 and `NaN` are both falsey. All other numbers (including negative numbers) are truthy.
- "" (a string with no length) is falsey. All other strings are truthy.
- All objects, arrays, and functions are truthy.

## Random

- `a++` adds a number after running
- `++a` adds a number before running
- `var c = a ? "yes" : "no"` Shortcut for if / else (called a conditional operator): `condition ? item1 : item2;`

# css

## Tips

- Coding slower reduces the risks of bugs, e.g. not linking the stylesheet or the JS.
- **Block level elements** will by default take up the whole width of the parent that they're in. By default, block level elements will stack on top of each other. Block level elements: divs, p, h1.
- **Inline block level elements** are the opposite of block level. They will by default sit next to each other. Examples are: img, textarea, buttons.
- `Float` can be defined to be left and right. By default, floats will collapse the heigth of their parent... if the parent doesn't have a heigth set on it.
- `position: absolute, relative, fixed` By default: static. Settings an elements position to absolute, relative or fixed fives us access to `left`, `right`, `bottom`, `top`, `z-index`.
  - `position absolute` just ignores all the CSS markings and will position the element wherever we defined.
  - `position fixed` is the same but also follows the user while scrolling. The viewport (the dimension of the actual browser) will be the same.
  - `position relative` will position an element relative to the default location on the page, relative to where it wants to be by default.
    When a parent element has position:relative and the children have position:absolute, then the children will be positioned relative to their parents.
  - `z-index`controls the stacking order. Stacking order determines which elements should sit on top of another element, if there are two elements that want to sit on the same element. We only have accesss to z-index if an element has position relative, absilute, fixed. The visible element has the highest z index.

# Day 3

<a href="wk1_dy3_functions_scope">Functions and Scope</a>

[Semantic Markup](semantic_markup)

[CSS Selectors](css_selectors)

<a href="wk1_html_css_lab">HTML/CSS Lab</a>



## Global Scope and Global object

If you are writing a Javascript program that runs in a browser and you  declare a variable outside of any function, you are declaring a variable in the *global scope*. That variable can be accessed anywhere. This is in contrast to variables that are declared within functions, which are said to be in *local scope* .

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

#### Function expressions.

You could write two formats:

```fn() 

function fn() {							// this is usual function format. fn() only after
  console.log("hi!");
}
fn()

-----
fn()

var fn = function() {				// alternative: function expression. fn() before and after.
  console.log("yo");	
}

```



#### Recursion 

Functions can call themselves! This is called _recursion_.

```
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

#### Callbacks

Functions that are passed to other functions are often called *callbacks*.

```
setTimeout(function() {
    console.log('hello');
}, 1000);
```

The built-in function `setTimeout` takes a callback as its first parameter. The second parameter is a number of milliseconds. After the number of milliseconds passes, `setTimeout` calls the callback.



## Webpage Goals

1. Rough outline

2. Grey area underneath with 4 associated icons

3. Making mobile version discussed tomorrow.

   _bonus exercise_ on friday for those already finished.





## Semantic Markup

Use it for better readibility and avoid the `div` soup.



## The Semantic Elements

**Semantic HTML** refers to strategically using HTML5 elements to reinforce the semantics, or *meaning*, of the info in webpages, rather than merely for presentation. This makes more sense as you look at the names of HTML5 elements - you can venture a guess as to how that tag would be best utilized.

| Element               | Use                                                          |
| --------------------- | ------------------------------------------------------------ |
| `<header>`            | Used as a container for introductory content or set of navigation links. Usually contains heading elements (`h1`, `h2`, etc.) as well as a logo. |
| `<footer>`            | Typically used as the footer info of a page, i.e. copyright, sitemap, contact, etc. |
| `<article>`           | Used for self-contained compositions on a page. Articles usually have their own heading, as well as a footer. |
| `<section>`           | Used for seperating different "sections" of a website. Note that you should not use a `section` tag if `article`, `aside`, or `nav` is more appropriate. |
| `<nav>`               | The wrapper for your navigation menu.                        |
| `<aside>`             | Represents a piece of content that is only slightly related to the rest of the page. |
| `<main>`              | Represents the main content of the body of a document or application. |
| `<audio>` & `<video>` | Used to embed sound & video content.                         |
| `<blockquote>`        | Indicates that the enclosed text is an extended quotation. Rendered with indentation. |

## Inline Semantic Tags

There are some inline HTML5 elements which will help you define meaning, structure, and/or style to piece of text. Note that some of these tags carry semantic value as well as apply certain styles to your text.

| Element    | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| `<cite>`   | Represents a reference to a creative work. Renders in italics. |
| `<code>`   | Represents some computer code you want to display. It will displayed in monofont. |
| `<em>`     | Marks text that has stress emphasis. Displayed with italics. |
| `<q>`      | Represents a short inline quote. Will place text in `" "`. Long quotes should use `<blockquote>` |
| `<mark>`   | Use to place semantic emphasis on content on your page. Used to highlight specific phrases on a page. Renders highlighted. |
| `<strong>` | Gives text strong importance, and is displayed in bold.      |

## CSS Selectors

CSS selectors use patterns to determine the element we want to select. These are the most common:

| Selector               | Name                      | What it does                                                 |
| ---------------------- | ------------------------- | ------------------------------------------------------------ |
| `*`                    | Global Selector           | Global styles, selects *everything*                          |
| `div .child`           | Descendent Selector       | Selects all *.child* elements that are descendants of any *div* element |
| `div > .child`         | Direct Child Selector     | Select all *.child* elements where their parent is a *div*   |
| `div + .sibling`       | Adjacent Sibling Selector | Selects an element (.*sibling*) that follows directly after the prior element (*div*), in which both elements share the same parent |
| `p ~ ul`               | General Sibling Selector  | Selects an element (*ul*) that follows anywhere after the prior element (*p*), in which both elements share the same parent |
| `.mydiv:first-child`   | Pseudo Class              | Selects every element with class *.mydiv* that is the first child of its parent |
| `section.this-class`   | Multiple classes          | Selects any *section* element with a class of *.this-class*  |
| `h1, h2, h3`           | Comma separated selectors | Selects all *h1*, *h2*, and *h3* elements                    |
| `input[type=password]` | Attribute Selector        | Selects all *input* elements that have a type equal to password |

The last two selectors from this table are called **attribute selectors**. They scan the attributes of the element specified. You can learn more about attibute selectors [here](https://css-tricks.com/almanac/selectors/a/attribute/).



### The most common & useful pseudo selectors are:

- **:link** - select links on the page.
- **:visited** - selects all links that have been visited.
- **:active** - selects all links and applies styles to them when they become active (ie. are clicked on).
- **:hover** - use this to set styles for when the mouse hovers over an element. Easy way to really spice up your design.
- **:first-child** - select the first child within a parent.
- **:last-child** - select the last child within a parent.
- **:nth-child(num)** - accepts an algebraic expression to specify the different ***child*** elements you want to select. You can use this to select only the fifth child, or every odd or even element, or the first 5 child elements, and more! [This article](https://css-tricks.com/how-nth-child-works/) talks about how `:nth-child` works and [this article](https://css-tricks.com/useful-nth-child-recipies/) goes over different formulas you can use.
- **:nth-of-type(num)** - accepts an algebraic expression to specify the different ***type*** of elements you want to select. You can pass it a mathematical expression, `even`, or `odd`.
- **:before** - allows you to insert content onto a page (from your CSS file) *before* an HTML element. The result is not actually on the DOM, but it appears as if it is. You need to include a *content* property.
- **:after** - allows you to insert content onto a page (from your CSS file) *after* an HTML element. Just like with *:before*, the result is not actually on the DOM. You also need to include a *content* property.

***Note*** - `:hover` MUST come after `:link` and `:visited` in the CSS definition in order to be effective! `:active` MUST come after `:hover` in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.





Webpage: make content relative, then inside absolute.