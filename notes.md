# CS 260 Notes

<!-- [My startup - Simon](https://simon.cs260.click) -->

You can find my lecture notes for this class in my [w26 notes repo](https://github.com/chess6032/w26notes/tree/main/cs260).

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
<!-- - [MDN](https://developer.mozilla.org) -->

## AWS

My server's public IPv4 address is: `34.199.199.250`

As directed in the [EC2 instructions](https://github.com/webprogramming260/webprogramming/blob/main/instruction/webServers/amazonWebServicesEc2/amazonWebServicesEc2.md), I made it an elastic IP and always keep my server running. (Tbh I don't totally know the reason for that&mdash;I think it had to do w/ cost or smth.)

The server runs on AWS's `us-east-1` (N. Virginia), because that's the only one that has CS 260's AMI.

I registered the domain name `youmustnot.click` for Route 53. I had some trouble at first because my account wasn't approved for domain registration, but after contacting AWS support they lifted that hold for me.

<!-- (Note to self: I registered `youmustnot.click` under my personal email address and used my home address for it as well (NOT my current address that I'm living in for school).) -->

## Caddy

## Deploying

Look, Mom! I deployed Simon and my startup!! You can see them at `

The deploy script usage is like this:

```sh
./deployFiles.sh -k your-pem-key -h host-name -s subdomain
```

Note that `./deployFiles.sh` will take EVERYTHING in the directory it's currently in, so be careful where you run it.

Also WSL doesn't like smth about my key? But you need a POSIX-compliant terminal to run `deployFiles.sh`. Warp didn't work for me, but GitBash did.

> [!IMPORTANT] 
> As of React Part 1, **use `./deployReact.sh` instead**, which has identical usage but is rewritten for our React toolchain.

## HTML


## CSS

More notes available on my [w26notes repo](https://github.com/chess6032/w26notes/blob/main/cs260/CSS.md).

- Importing an external CSS doc: `<link rel="stylesheet" href="styles.css" />`
- Inline styling takes precedence over `<style>` elements or external CSS docs.
- Elements inherit from their parent's styling.

### Common Properties

- `background-color`.
- `border` (value: `color width style`) gives an element a border.
- `color` sets the text color within an element.
- `display` defines how to display the element and its children...?
- `font` (value: `family size style`) defines text font, size, & style (bold, italic, etc.).
- `margin` (value: `top right bottom left`) adds spacing between an element's edges and elements around it.
- `padding` (value: `top right bottom left`) adds spacing between the element's contents and its edges.

For the `margin` and `padding` shorthands, use **TRBL** ("TRouBLe") mnemonic to remember the sequence of the four values you assign. (Or you can remember it's ordered clockwise starting at the top, if you're lame.)

### Units

Absolute units: $96 \text{px} = 1 \text{in} = 2.54 \text{cm} = 25.4 \text{mm} = 72 \text{pt} = 6 \text{pc}$

Relative units:

| Unit   | Description |  
| ------ | ----------- |  
| `%`    | A percentage of the **parent's size**. |  
| `em`   | A multiplier of **element's font size**. |  
| `rem`  | A multiplier of the **root element font size**. |  
| `vw`   | 1vw = 1% of **viewport's width**. |  
| `vh`   | 1vh = 1% of **viewport's height**. |  
| `vmin` | 1vmin = 1% of **viewport's smaller dimension**. |  
| `vmax` | 1vmax = 1% of **viewport's larger dimension**. |  

- "viewport" refers to the browser's window size.
- "root element" refers to the very top-most level element of the document (`<html>`), accessible via `:root` selector in CSS.

#### Using units

- No whitespace btwn value and unit.
- `0` values do not require a unit.
- Use `em` and `rem`. They play nice with scaling.
- Root element's (default) font size is set by the browser.
  - Default font size of almost all browsers is `16px`.
    - 62.5% trick: set root element's font size to 62.5%, so that 1rem = 10px, making math easy.

### Selectors

| Type               | Symbol         | Notes |  
| ----               | ------         | ----- |  
| Elements           | (element name) | |  
| ID                 | `#`            | |  
| Class              | `.`            | |  
| Universal selector | `*`            | Don't use if you import libraries into your CSS. |  
| Pseudo-classes     | `:`            | For state-based selection. |  
| Pseudo-elements    | `::`           | For styling specific parts of an element. |  
| Attributes         | `[]`           | For styling elements w/ a given attribute, or matching a specified value for a given attribute. |

- You can assign multiple selectors to a single rule via a comma-separated list (`sel1, sel2, sel3 {}`).

#### Precedence

- Specificity (descending): ID > Class/Attribute/Pseudo-class > Element/Psuedo-element > Universal selector. 
- Higher specificity rules override lower specificity rules.
- For conflicting rules w/ equal specificity, the one that appears LATER in the stylesheet wins.

(You can use `!important` to nuke this ordering and override everything.)

### Combinators

| Symbol              | Usage                   | Demonstration |  
| ------              | ----                    | ------------- |  
| <code>&nbsp;</code> | All descendants         | `element descendant` |  
| `>`                 | Direct children         | `parent > child` |  
| `+`                 | Next sibling only       | `sibling + next-sibling` |  
| `~`                 | All subsequent siblings | `sibling ~ subsequent-sibling` |  

### Attribute selectors

| Symbol               | Usage |  
| ----------           | ----- |  
| (no value)           | any element that has that attribute. |  
| `=`                  | exact value match. |  
| `~=`                 | space-separated list (`"some stuff value other stuff"`). |  
| <code>&#124;=</code> | starts w/ value and immediately followed by hyphen (`"value-someotherstuff"`). |  
| `^=`                 | starts w/ value. |  
| `$=`                 | ends w/ value. |  
| `*=`                 | contains value. |  

(ALL of the ones that select based on value will selet elements whose attribute's value is exactly the one you list in the CSS...if that makes sense.)

### Importing fonts

```css
@font-face {
    font-family: 'Quicksand';
    src: url('https://yourstartup.click/path/to/font.ttf');
}

body {
    font-family: Quicksand, Helvetica, Arial, sans-serif;
}
```

- Use font fallbacks.

## Responsive design

### Viewport meta tag

Include this `<meta>` tag in the `<head>` section of ALL webpages. It ensures that your website renders nicely on mobile devices.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

### Display property

The CSS `display` property allows you to change how an HTML element is rendered by the browser.

| Value    | Effect                                     | Notes |  
| -----    | ------                                     | ----- |  
| `none`   | Element is **not displayed**.              | The element still exists; it just isn't rendered by the browser. |  
| `block`  | Element's **width fills parent** element.  | `p` and `div` elements use block display by default. |  
| `inline` | Element's **width hugs content**.          | `b` and `span` elements use inline display by default. |  
| `grid`   | Displays element's children in rows AND columns. | (See [grid](#grid-display)) |  
| `flex`   | Displays element's children in rows OR columns.  | (See [flex](#flex-display)) |  

### Grid display

`display: grid;` displays child elements in rows AND cols.

With `grid`, you can use `fr` for length units. The length of 1fr is calculated after fixed-size content, gaps, padding, etc. are account for. So, in effect, **`fr distributes available space**, which is rizz.

#### [Example](https://codepen.io/leesjensen/pen/GRGXoWP)

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```

- `grid-template-columns` specifies the number & widths of columns.
  - So for a declaration like `grid-template-columns: w1 w2 w3 ... wn;`, there would be $n$ columns, and every length $w_n$ corresponds to the width of the $n^\text{th}$ column.
  - In the code above, each column will have an equal width, and the number of columns will change w/ the viewport size.
    - `repeat()` repeats the column pattern `auto-fill`, which creates as many columns as will fit in the container.
      - (`auto-fill` is only usable within a `repeat()` call)
    - `minmax(300px, 1fr)` sets a range for the columns' widths: Each column is at least 300px, but can grow up to 1fr.
- `grid-auto-rows: 300px;` fixes every row's height to 300px.
- `grid-gap` specifies the distance btwn each grid cell. (As if it were the `margin` for the cells.)

Check out [this CodePen](https://codepen.io/leesjensen/pen/GRGXoWP) to see this code in action.

#### `grid-auto-` vs. `grid-template-` for cols/rows

(e.g. `grid-auto-rows` vs. `grid-template-rows`.)

- `template` defines the size & number of cols/rows in the **explicit grid** (the one you intentionally set).
- `auto` defines the size of any **implicit cols/rows** that are automatically created by the browser to accommodate extra content.
  - Cols/rows generate automatically when content is placed outside the boundaries of the `template` definitions.

### Flex display

i.e. "flexbox"

The `flex` display layout displays a group of chilren in either rows OR columns. It's useful when you want to partition your application into areas that resposnively move around as the window resizes or rotates.

- For more info on containers, see [here](https://www.w3schools.com/css/css3_flexbox_container.asp).
- To see flexbox in action, check out [this CodePen](https://codepen.io/leesjensen/pen/MWOVYpZ) (or [this one](https://codepen.io/leesjensen/pen/abamMqL)).

#### Container properties

- `flex-flow`: Shorthand for `flex-direction` and `flex-wrap`.
  - `flex-direction`: Sets direction of flex items.
    - `row` (default) or `row-reverse`.
    - `column` or `column-reverse`.
  - `flex-wrap`: Specifies whether/not flex items should wrap when there is not enough room for them on one flex line.
    - `nowrap` (default)
    - `wrap`
    - `wrap-reverse`
- `justify-content`: Aligns the flex items when they do not use all available space on the **main-axis** (i.e. horizontally). (More info [here](https://www.w3schools.com/css/css3_flexbox_container_justify.asp).)
- `align-items`: Aligns the flex items when they do not use all available space on the **cross-axis** (i.e. vertically). (More info [here](https://www.w3schools.com/css/css3_flexbox_container_align.asp))
- `align-content`: Aligns the flex *lines* when there is extra space in the cross axis and flex items wrap.

### Float property

The `float` CSS property allows an element to "float around" in its container, allowing inline elements to wrap around it.

Some common values for `float`:

- `none`
- `left` or `right`
- `inline-end` or `inline-start`

Check out [this CodePen](https://codepen.io/leesjensen/pen/MWBRWPP) to see this in action.

### Media queries

With the `@media` at-rule, you can dynamically detect the size & orientation of the user's device and apply CSS rules to accommodate the change. This is called a "media query" (ig).

A media query takes one or more predicates, each separated by boolean operators.

Check out [this CodePen](https://codepen.io/leesjensen/pen/rNKZOva) (or [this one](https://codepen.io/leesjensen/pen/NWzLGmJ)) to see this in action.

## Toolchain for React project

| Tool | Purpose |  
| ---- | ------- |  
| [Github](https://github.com/) | Code repo. |  
| [Vite](https://vitejs.dev/) | JSX, TS, dev & debugging support. |  
| [ESBuild](https://esbuild.github.io/) (w/ [Babel](https://babeljs.io/docs/en/) underneath) | Converting to ES6 modules & transpiling. |  
| [Rollup](https://rollupjs.org/) | Bundling & tree shaking. |  
| [PostCSS](https://github.com/webprogramming260/webprogramming/blob/main/instruction/webFrameworks/react/toolChains) | CSS transpiling. |  
| Bash script (`deployReact.sh`) | Deployment. |  

## JS & NPM 

We use Node.js to deploy JS outside of a browser. I can run JS in my terminal with the `node` command.

We use Node Package Manager (NPM) for managing packages.

### Importing JS into HTML

- Inline: `<script>js goes here</script>`
- External: `<script src="path/to/file.js" />`

(There's also "inline attribute handlers"...but I ddn't understand them (oops).)

### Package management w/ NPM

We use NPM to manage packages. This takes three step:

1. Initialize directory to use NPM by running `npm init`. (Or `npm init -y` to automatically say "yes" to the slew of questions it asks you.)
2. Install package w/ NPM.
3. Iinclude a `require statement` referencing that package.

#### package.json, package-log.json, and node_modules/

- `package.json`: Project metadata, commands you can run from terminal, and package dependencies.
- `package-lock.json`: version of each package.
- `node_modules/`: package source code files.
  - **MAKE SURE TO `.gitignore` THIS**.
  - Can be rebuilt from `package-lock.json` (via `npm install`).


> [!IMPORTANT]
> When you clone your repo to a new location, run `npm install`.

### Debugging in VS Code

- `F10`: Step over.
- `F11`: Step in.
- `F5`: Continue from current line.
- `SHIFT` + `F5`: Stop.

`--watch` command arg for `node`: Node.js automatically reloads when changes are made during debugging. Modify `vs.code/launch.json` and add `"--watch"` to the `"runtimeArgs"` list to have the VS Code debugger run with this option.


### Important installation commands for this project

- Vite: `npm install vite@latest -D`
- React: `npm install react react-dom`

## Vite

Our toolchain has several tools to turn React into a deployable web app (Babel, Rollup, PostCSS, etc.); Vite serves as a **Command-Line Interface (CLI)** that **wraps around those tools**, abstracting them away.

### Usage

In an NPM-initialized directory (`npm init` or `npm init -y`):

- **Import Vite w/ `npm create vite@latest`**: Vite sets up a bunch of scripts in `package.json` you can run.
  - (Chiefly, it adds `npm run dev` and `npm run build` scripts.)
- **Debug w/ `npm run dev`**.
  - This bundles code to a temporary directory that the Vite dbg HTTP server then loads from.
- **Build a deployable app w/ `npm run build`**.
  - The resulting production distribution's files are **stored in `dist/`**.

### Usage w/ `deployReact.sh`

For our project, we run `deployReact.sh`, a Bash script, to deploy our web app to our server.

`deployReact.sh` **runs `npm run build`** and then **deploys the resulting `dist/` directory** to your production server.

## React

### Usage w/ NPM & vite

Initialization:

```bash
$ npm init -y
$ npm install vite@latest -D
$ npm install react react-dom
```

Now you write your react code. You **must** have an `index.html` file&mdash;this is where the site starts.

Running:

```bash
$ npx vite
```

`npx` is a variant of `npm` which directly executes a Node package w/o refererncing the package.json file.

## Components

In React/JSX, a component is a **function that returns UI**. The return format for these functions is JSX&mdash;a mixture of JS & HTML.

Components may reference other components (styling).

### Styling

- Inline: Just like normal.
- External: include `import 'path/to/css.ss';` at the top of your code.

To assign elements a class, **use `className` instead of `class`**, since "class" is already a keyword in JS.

### Properties

You can pass information to React components in the form of **HTML element properties**. The component then receives these properties **in it sconstructor**

e.g.:

```jsx
function Demo(props) { // for <div><Demo who="Your mom!" /></div>
  return <b>Hello {props.who}</b>;
}
// result: Hello Your mom!
```

### State

Create by calling `React.useState()` => `[currentStateVal, valSetterFunc]`

## Routing

Routing is the process of using JS to modify a webpage at runtime to give the appearance of loading different pages.

We use [`react-router-dom`](https://www.npmjs.com/package/react-router-dom) (NOT `react-router`) for routing:

```bash
$ npm install react-router-dom
```

react-router-dom gives us access to these components:

- `BrowserRouter`
- `Link` & `NavLink`
- `Route` & `Routes`

Remember to import them at the top of your JSX code:

```jsx
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
```

### Reactivity

- When **properties or state change**, React re-renders component.
  - Calls `render()` func for that component and all of its dependent comonent's `render()` functions.

## Porting

### Vite directory structure

```
├─ public          # Static assets used in the app
├─ src             # Frontend React code
│    ├─ app.jsx    # React app component
│    └─ app.css    # React app CSS
│    └─ login    
│    └─ button
│    └─ banned
├─ index.html      # App entry HTML
└─ index.jsx       # React entry point
```

### Process

- Install Vite, Bootstrap, and React.
- Uhhhh do some stuff I forget.
- Create stubs for each page.
- Wrap App UI w/ BrowserRouter
- Replace `<a>` els in nav bar w/ `<NavLink>`.
- Replace `<main>` on home page w/ `<Routes>`.
- Add `NotFound` for 404 functionality when `*` is caught.
- Add page content to page components. (`html` -> `jsx`).
- Use new deploy script.

#### or this ig

Here's the steps listed in the instructions, if you prefer:

1. Install and configure Vite  
2. Reorganize the code  
3. Convert to React Bootstrap  
4. Enable React  
5. Create app component  
6. Create view components  
7. Create the router  
8. Convert HTML to React components  
9. Replace deployment script  

## Advanced JS

### `console.time()` and `console.endTime()`

- `console.time(timerLabel)`: starts a timer referred to w/ `timerLabel`.
- `console.timeEnd(timerLabel)`: ends the timer.

```js
console.time('demo time');

// ... some code that takes a long time.

console.timeEnd('demo time');
// OUTPUT: demo time: 12.74 ms
```

### Functions

- Functions are defined with the `function` keyword.
- Functions are **first-class objects**.
- Functions **cannot be overloaded**.
  - When multiple functions are defined w/ the same name, the last one defined overwrites previous definitions, like in Python.
- Functions may be **defined inside other functions**, like in Python.
  - These are called **"inner functions"**.
- **Parameters can be given a default value**, like in Python or C++.

#### Closure

- A "closure" is a function that **retains access to variables from the scope it was defined in**. 
- **All functions in JS form closures**, but arrow functions (see below) are special in what their `this` pointer references.
  - Regular functions' `this` pointer references **where they're CALLED**.
  - Arrow functions' `this` pointer references **where they're CREATED**.
    - In the instructions: "arrow functions inherit the `this` pointer from the scope in which they're created."
- Closure is clutch for working w/ JS in HTML.

Here's an example of closure w/ arrow functions (see below).

```js
function makeClosure(init) {
    let closureValue = init;
    return () => {
        return `closure ${++closureValue}`;
    };
}


const closure = makeClosure(0);

console.log(closure());
// OUTPUT: closure 1

console.log(closure());
// OUTPUT: closure 2
```

### Arrow functions

```js
() => 67;
// RETURNS 67
// ("return" keyword is optional)

() => {
    67;
}
// doesn't return anything.
// (technically speaking, its return value would be considered UNDEFINED, I think.)

() => {
    return 67;
}
// RETURNS 67
```

Remember: Arrow functions inherit the `this` pointer from where the scope in which they're created. i.e., **they close over the `this` from their surrounding scope** upon creation. This is what separates them behaviorly from regular functions or non-arrow anonymous functions.

### Arrays

- Arrays in JS are **zero-indexed**.
- Arrays in JS are **dynamically-sized**. They can grow & shrink.
- Arrays in JS **can hold elements of different types**.
- Arrays in JS are concatenated with the `.concat()` function, NOT the `+` operator you'd use in Python. (Sadge.)
- You **cannot negative index an array** in JS the way you can a list in Python.

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => i < 1)`          |


All of these are **non-mutating** EXCEPT `.push()`, `.pop()`, and `.sort()`.

### Objects & classes

OBJECTS:

- Objects are glorified maps/dictionaries.
  - `.entries()`, `.keys()`, `.values()`.
- You can declare an object w/o defining a class using a JSON-like syntax called "object-literal syntax".
- Any function that returns an object is considered a "constructor".

CLASSES:

- You can instantiate objects of a class w/ the `new` keyword.
- Each class's constructor function is defined w/ the name `constructor`.
- You can make a member private by prefixing its name w/ `#`.
- The keyword for inheritance is `extends`.
  - In the subclass's constructor, use `super()` to invoke the super class's constructor.
- The root of inheritancy is the `Object` class (except for `null` and maybe some other exceptions idk).

### JSON

- JSON &rightarrow; JS: `JSON.parse()`
- JS &rightarrow; JSON: `JSON.stringify()`
- When converting from JS to JSON, `undefined` objects are dropped.

JSON data types:

- string
- number (int or float)
- bool
- array
- object
- null

In a JSON document, typically the top-level item is an object in which everything is enclosed.

### Destructuring

ARRAYS:

```js
const a = [1, 2, 4, 5];
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4, 5]
```

OBJECTS:

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a);
// OUTPUT: 1
console.log(c);
// OUTPUT: ['fish', 'cats']
```

MAPPING TO NEW VARIABLE NAMES:

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count);
// OUTPUT: 1
console.log(type);
// OUTPUT: animals
```

PROVIDING DEFAULT VALUES (used if property is missing):

```js
const { a, b=22 } = {}; // trying to destructure an empty object
const [c=44] = []; // trying to destructure an empty array

console.log(a);
// OUTPUT: undefined
console.log(b);
// OUTPUT: 22
console.log(c);
// OUTPUT: 
```

## React hooks

React hooks allow function-style components to match (and exceed) the functionality of class-style components.

- **Hooks MUST be called at the top scope of component functions.** 
  - (This restriction ensures hooks are always called in the same order when a comp is rendered.)

### `useState` hook

```js
const [state, stateSetterFunc] = React.useState(initialVal);
```

- `state` is the value of a variable of the same name defined internally within React. 
- `stateSetterFunc` is for setting that variable.

(The initial value is only used on the first render&mdash;subsequent renders ignore it.)

```jsx
function Clicker({ initialCount }) {
    const [count, updateCount] = React.useState(initialCount);
    return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker initialCount={3} />);
```

### `useEffect` hook

- The `useEffect` hook allows you to **represent lifecycle events**.
- `React.useEffect()` takes two parameters (that I know of):
  1. A **function** that is run when the useEffect hook is triggered. If this function returns a function, then that is called when the component "cleans up" (whatever ts means).
  2. (Optional) An **array of dependencies** that can trigger the useEffect hook. (See below.)
    - By passing in `[]`, the effect hook is **only triggered the first time** the component is rendered.

#### `useEffect` dependencies

```jsx
function UseEffectHookDemo() {
    const [count1, updateCount1] = React.useState(0);
    const [count2, updateCount2] = React.useState(0);

    React.useEffect(() => {
        console.log(`count1 effect triggered ${count1}`);
    }, [count1]); // <-- count1 dependency defined here

    return (
        <ol>
          <li onClick={() => updateCount1(count1 + 1)}>Item 1: {count1}</li>
          <li> onClick={() => updateCount2(count2 + 1)}Item 2: {count2}</li>
        </ol>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UseEffectHookDemo />);
```

#### `useEffect` clean up example

```jsx
function Clicker() {
  const [count, update] = React.useState(5);

  return (
    <div onClick={() => update(count - 1)}>
      Click count: {count}
      {count > 0 ? <Db /> : <div>DB Connection Closed</div>}
    </div>
  );
}

function Db() {
  React.useEffect(() => {
    console.log('connected');

    return function cleanup() { // NOTE: does not have to be called cleanup.
      console.log('disconnected');
    };
  }, []); // <-- useEffect callback triggered only the first time the component is rendered.

  return <div>DB Connection</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

## React Part 2: Reactivity

Trolled this part wasn't too bad because my project was so small.

## Service

For local testing, don't use the VS Live Server extension anymore. Instead, in addition to running `npm run dev`, run `node --watch service/index.js` to start the web server. You will have to have two terminals open for this.

