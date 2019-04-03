# Week 1



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

