# Week 1

# css

# Placing Elements with CSS

Much of the work we have to do in CSS is getting elements to go to the places on the page in which we want them to appear. There are often multiple ways to accomplish these goals and we'll consider a few of them presently.

There are several new ways that have big advantages over older techniques, most notably [flexbox](https://github.com/spicedacademy/salt/blob/master/flexbox) and [grid layouts](https://github.com/spicedacademy/salt/blob/master/layouts). We will consider these newer approaches later and stick to the older techniques for now.

To examine these assorted old school techniques, lets use a layout resembling the header area of our [Sprint/Reichstag page](https://github.com/spicedacademy/salt/blob/master/wk1_html_css_lab) page in which we want to have two elements on a single line with one element on the left of the screen and the other on the right. We'll replace the sprint logo with an orange box, the hamburger menu button with a pink box, and put a border around the header area (to make things standout more) as well as some padding inside it so the boxes don't touch the edges.

We'll start with the following css:

```css
header {
    padding: 20px;
    border: 1px gray dashed;
}

#logo {
    height: 50px;
    width: 50px;
    background: orange;
}

#menu-button {
    height: 50px;
    width: 50px;
    background: pink;
}
```

And the following html:

```html
<header>
    <div id="logo">logo</div>
    <div id="menu-button">button</div>
</header>
```

With this page set up thus, what we would see in the browser is this:

![img](https://raw.githubusercontent.com/spicedacademy/salt/master/css_positioning/img0.png?token=AfJXUhaZfF-jhX71oN9LLf6mNrQ705cYks5csvl3wA%3D%3D)



As we can see, the two boxes are stacked one on top of the other. This is the default behavior of *block* elements (elements that have their `display` property set to `block`), which `<div>` elements are by default.

Notice that the header grows in height to contain the two elements. We actually want the header to be just tall enough to fit one box on a row. We should add a `height` property.

```css
header {
    padding: 10px;
    border: 1px gray dashed;
    height: 70px;
}
```

Now it looks like this:

![img](https://raw.githubusercontent.com/spicedacademy/salt/master/css_positioning/img1.png?token=AfJXUtXAq5cywQZy2kWdeZMZF-WmGoZrks5csvo-wA%3D%3D)So our next challenge is to get that pink box to jump over to the right of the header. There are multiple ways to accomplish this and we'll try out a few.

## Floats

The css `float` property specifies how content should flow around the element it applies to. In this case we want the orange box to float left and the pink box to float right. We can update the css thus:

```css
#logo {
    height: 50px;
    width: 50px;
    background: orange;
    float: left;
}

#menu-button {
    height: 50px;
    width: 50px;
    background: pink;
    float: right;
}
```

And get this result:

![img](https://raw.githubusercontent.com/spicedacademy/salt/master/css_positioning/img2.png?token=AfJXUpYG7kLP8FAl6oSBe4Dv6YpurxCxks5csvpkwA%3D%3D)That looks pretty good! But be aware that this only looks right because we set the height of the `<header>` element. If we took that out, it would look like this:

![img](https://raw.githubusercontent.com/spicedacademy/salt/master/css_positioning/img3.png?token=AfJXUv3BenqnCaR8OSgXI5LVSsrXOSz8ks5csvp2wA%3D%3D)

This is because floating elements do not affect the elements surrounding them in the usual way. They don't increase the height of their containers, which can cause lots of problems.

There are multiple ways to avoid these problems. One is to not using floating elements at all, if that's possible. Another is to set the height of the container, as we do here, but that is not always possible. Setting the `overflow` property of the container to `hidden` has a similar effect to setting the height in situations in which the height cannot be set. Yet another approach is to make sure that an element that must cause a line break appears after the floating element(s).

## Position

By default, all elements have a `position` property set to the value `static`. There are several values you can assign and when elements have a position property set to one of these values we consider them *positioned* elements. The three position values we are most interested in are:

- relative
- absolute
- fixed

Elements using relative positioning can have `top` and `left` properties with values indicating where the element should go. These values are relative to where the element would normally be if it were not positioned. For example, if a relatively positioned element has a `left` of `20px` and a `top` of `-10px`, it will appear 20 pixels further right than it normally would and 10 pixels higher than it normally would.

Elements using absolute positioning can have `top` and `left` properties (as well as `bottom` and `right` properties) that say *exactly* where the element should go. For example, if an absolutely positioned element has a `left` of `20px`and a `top` of `-10px`, it will appear 20 pixels from the left edge of its positioned container and 10 pixels higher than the top edge.

Elements using fixed positioning work like absolutely positioned elements except that they are positioned in the *window*rather than the page. That means they stay in the same visual spot even as the user scrolls through the page.

We could use absolute positioning to make the pink box go all the way to the right. Let's try that.

```css
header {
    padding: 10px;
    border: 1px gray dashed;
}

#logo {
    height: 50px;
    width: 50px;
    background: orange;
}

#menu-button {
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    width: 50px;
    background: pink;
}
```

The result:

![img](https://raw.githubusercontent.com/spicedacademy/salt/master/css_positioning/img4.png?token=AfJXUgJf-gnKl3SH3CG6GTlDOkvzQNZpks5csvsewA%3D%3D)

As we can see, the pink box now goes outside of the header. This is because we've set its `top` and `left` to be at specific pixels on the *page*, not the header that contains it. Elements with `absolute` positioning position themselves in their closest *positioned* container and our `<header>` is not positioned. We can fix this fairly easily.

```
header {
    position: relative;
    padding: 10px;
    border: 1px gray dashed;
}
```

Now the box will be contained correctly.

![img](https://raw.githubusercontent.com/spicedacademy/salt/master/css_positioning/img5.png?token=AfJXUiGVZNbXlH6GBqYkJ-oyLu6yEh-tks5csvtXwA%3D%3D)

Now all we have to do is adjust for the padding of the container. Note that elements with absolute positioning ignore padding.

```
#menu-button {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 50px;
    width: 50px;
    background: pink;
}
```

![img](https://raw.githubusercontent.com/spicedacademy/salt/master/css_positioning/img2.png?token=AfJXUtpKNA41ibFz-vAwtjd7VZHFcjqQks5csvt1wA%3D%3D)

## Display

Every element has a `display` property but the value of the property depends on the element. For example, `<div>`, `<p>`, and `<h1>` elements are all block elements and the value of their `display` property is `block`. That means they try to fill the entire width of their container and will be followed by a line break.

Inline elements (such as `<span>, '<a>', '<strong>'`) do not cause new lines and take up just as much space as they need.

Just because elements start out with values for their `display` properties there is no reason you can't change them if you want to. There are several values you might want to change an element's display property to.

For example, we can give our two boxes the `display` property of `inline-block`. This makes them act like block elements within themselves but like inline elements outside. That is, they do not cause line breaks after them.

```css
header {
    padding: 10px;
    border: 1px gray dashed;
}

#logo {
    height: 50px;
    width: 50px;
    background: orange;
    display: inline-block;
}

#menu-button {
    height: 50px;
    width: 50px;
    background: pink;
    display: inline-block;
}
```

![img](https://raw.githubusercontent.com/spicedacademy/salt/master/css_positioning/img6.png?token=AfJXUi7HXBrpcMz2GObnosrj4GxhBop9ks5csv1OwA%3D%3D)

Notice that the two boxes are on the same line but that there is a little bit of space between them. Frustratingly, this margin between inline-bock elements can't be made to disappear easily.

One good thing about inline-block elements is that, unlike block elements, they obey `text-align` properties on their parent. If we set the `text-align` property of the header to `right`, both elements would go to the right.

```
header {
    padding: 10px;
    border: 1px gray dashed;
    text-align: right;
}
```

![img](https://raw.githubusercontent.com/spicedacademy/salt/master/css_positioning/img7.png?token=AfJXUuVXK-2XqDn3GplSBkNSIKNU8AG1ks5csv2ZwA%3D%3D)

Note that the text in the two boxes are also now right-aligned. If we wanted the text to stay to the left of its container, we'd have to set the `text-align` of those elements to `left`.

Of course, we don't want both boxes to go to the right, we want just one of them to. A way to do this would be to introduce two new elements, both contained by the header and each containing one of the two boxes. We'd need to set the width of both of them to be 50% of the total available width but make only the second one have a `text-align`property set to right.

Having these two elements be inline-block would be problematic because of the space that would be automatically inserted between them. To avoid this, we can give them the `table-cell` display property. Table cells stay on the same line as each other but there is no space automatically inserted between them.

For `display: table-cell` to work, the element that has it must be contained by an element with `display: table`. Logically, they should also be contained by an element with `display: table-row` but CSS does not require it.

Here is what the html and css for the `display: table-cell` solution would look like. A border has been added to the two pseudo-table cells so they can be seen.

``` html
<header>
    <div class="pseudo-cell">
        <div id="logo">logo</div>
    </div>
    <div class="pseudo-cell second">
        <div id="menu-button">button</div>
    </div>
</header>
```

```css
header {
    width: 100%;
    display: table;
    padding: 10px;
    border: 1px gray dashed;
}

.pseudo-cell {
    width: 50%;
    display: table-cell;
    border: 1px black dotted
}

.second {
    text-align: right;
}

#logo {
    height: 50px;
    width: 50px;
    background: orange;
}

#menu-button {
    height: 50px;
    width: 50px;
    background: pink;
    display: inline-block;
    text-align: left;
}
```

The result:

![img](https://raw.githubusercontent.com/spicedacademy/salt/master/css_positioning/img8.png?token=AfJXUn8n79_pHItufNx8h2KAoe5QpSdjks5csv5LwA%3D%3D)

We had to set the width of the header to 100% because by default elements with their `display` property set to `table`do not fill all of the available horizontal space unless it is necessary.

You may be wondering why we are using the `<div>` tags with their `display` properties set to make them act like `<table>` and `<td>` tags rather than just using `<table>`, `<tr>`, and `<td>` directly. The reason for this is that using tables for laying out content is generally considered to be uncouth for [reasons](https://github.com/spicedacademy/salt/blob/master/semantic_markup) we shall discuss soon.

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



## Semantic Markup

Use it for better readibility and avoid the `div` soup.

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



# Media Queries & Responsive Design

> If you think responsive's simple, I feel bad for you son. We got 99 viewports, but the iPhone's just one.

When developing the front end of our applications, usually we must build our pages to be fully responsive for desktop, tablet, and mobile displays. In order to achieve these different types of layouts, we must incorporate several strategies. One very popular method is the use of **media queries**.

Media queries enable us to limit our styles scope based on constraints that we define. For example, if we only wanted to apply a color change between 601px to 800px, we would write:

```
@media screen and (min-width:601px) and (max-width:800px){
  .element { color: red }
}
```

Here, we define our constraints with `min-width` and `max-width`.

If we wanted to only include styles up to and including 1200px, we would write:

```
@media screen and (max-width: 1200px) {
  .element { display: block; }
  #other-element { width: 50%; margin: 0 auto; }
}
```

## Let's take a closer look at the syntax

Media query syntax is made up of the `@media` keyword, a **media type**, and zero or more **expressions**.

**Media type** is the type of device, or media, which will be listening for their respective media queries. Most of the time, you will use `screen`, `all`, or none at all. It is not required to include in your media query. Note that the `handheld`media type is not used by smartphones and tablets - they listen for the `screen` media type.

The **expressions** are the constraints where we specify when we want our styles to be implemented. Note we can chain expressions together using the `and` keyword. The list of expressions we can use include:

- width
- height
- device-width
- device-height
- orientation
- [and more](http://cssmediaqueries.com/what-are-css-media-queries.html#features)

## How to approach writing media queries

[![breakpoints](https://camo.githubusercontent.com/6486cd4f00816f73595a91d851a727bfcefb42ad/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a355f59356868356464677469656e6344574d437153512e706e67)](https://camo.githubusercontent.com/6486cd4f00816f73595a91d851a727bfcefb42ad/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a355f59356868356464677469656e6344574d437153512e706e67)

As a developer, you will start to create workflows for how to implement your front end designs. Here are some tips when writing media queries and making pages responsive:

- Have a base format for your styles - either desktop or mobile. These will be your global styles. You will then implement media queries to manipulate your stylings as you develop for other devices. For example, start implementing all of your styles on desktop, then as you build for responsiveness, add media queries as you see fit. Not having a base format will cause you to trip over your responsive stylings constantly.
- If you can, try to avoid writing media queries that only affect very small pixel ranges, i.e `(min-width:701px) and (max-width:705px)`.
- Being cognizant of popular device dimensions will go a long way. For example, the iPhone 6 is 375px by 667px. [See this list of pixel dimensions for popular devices](http://cssmediaqueries.com/target/).
- Set up **break points** to aid you in structuring your responsive designs. Breakpoints are specific widths that will cause a page's layout to drastically change. Basically, it's the width of the viewport you specify for when a desktop-oriented page becomes a tablet-oriented page, when a tablet-oriented page becomes a mobile-oriented page, etc.

## 