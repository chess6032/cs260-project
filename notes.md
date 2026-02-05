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
- `margin` (value: `top right bottom left`) adds spacing between the element's contents and its edges.
- `padding` (value: `top right bottom left`) adds spacing between an element's edges and elements around it.

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

#### Precedence

- Specificity (descending): ID > Class/Attribute/Pseudo-class > Element/Psuedo-element > Universal selector. 
- Higher specificity rules override lower specificity rules.
- For conflicting rules w/ equal specificity, the one that appears LATER in the stylesheet wins.

(You can use `!important` to nuke this ordering and override everything.)

### Combinators

| Symbol              | Type                    | Demonstration |  
| ------              | ----                    | ------------- |  
| `,`                 | List                    | `el1, el2, el3` |  
| <code>&nbsp;</code> | All descendants         | `element descendant` |  
| `>`                 | Direct children         | `parent > child` |  
| `+`                 | Next sibling only       | `sibling + next-sibling` |  
| `~`                 | All subsequent siblings | `sibling ~ subsequent-siblings` |  

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

## React Part 1: Routing

## React Part 2: Reactivity

I hear this part is balls. Wish me luck for when I get to this point.