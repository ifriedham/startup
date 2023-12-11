# Notes

<p align="center">  
  
### **Table of Contents** [^1]
<!-- WARNING! This block of code does not like to be formatted!  Make sure to copy it before formatting so you can paste it pretty again!-->
<!--...aaaand it's broken.. gotta get used to markdown still ugh -->
| <center>By Section  | <center>By Topic |
| :-----------------: | :--------------: |
| <table> <tr><th><center>[Section 1](#Section-1)</th></tr> <tr><td><center>[Section 2](#Section-2)</td></tr>  <tr><td><center>[Section 3](#section-3)</td></tr>  <tr><td><center>[Section 4](#section-4)</td></tr>  <tr><td><center>[Section 5](#section-5)</td></tr>  <tr><td><center>[Section 6](#section-6)</td></tr>  <tr><td><center>[Section 7](#section-7)</td></tr>  <tr><td><center>[Section 8](#section-8)</td></tr>  <tr><td><center>[Section 9](#section-9)</td></tr>  <tr><td><center>[Section 10](#section-10)</td></tr>  <tr><td><center>[Section 11](#section-11)</td></tr>  <tr><td><center>[Section 12](#section-12)</td></tr>  <tr><td><center>[Section 13](#section-13)</td></tr>  <tr><td><center>[Section 14](#section-14)</td></tr>   </table>       | <table> <tr><th><center>[Development Essentials](#development-essentials)</td></th>  <tr><td><center>[Web Servers](#web-servers)</td></tr>  <tr><td><center>[HTML](#html)</td></tr>  <tr><td><center>[JavaScript](#javascript)</td></tr>  <tr><td><center>[Web Services](#web-services)</td></tr>  <tr><td><center>[Web Frameworks, Mobile, and Security](#web-frameworks--mobile--and-security)</td></tr>  <tr><td><center>[Tests](#tests)</td></tr>  </table> |  

### [:arrow_left: home](README.md)  

</p>

---
#### [Markdown guide](https://www.markdownguide.org/basic-syntax/#overview)
---

## Development Essentials

### Section 1

- ~~Spend litteral hours choosing a theme to use in VSCode~~

### Section 2

- startup ideas:
  - something DnD related
    - druid wild shape tracker
    - long/short rest manager
  - choose-your-own-adventure
  - KGLW album picker :crocodile:
    - pretty much just a peronality test

### Section 3

- github notes (for assignment)
  - what I've learned from this assignment:
    - github is complicated lol
    - using the built in git-manager in vscode is the way to go for me
>[!NOTE]
> **Practice with the github markdown**

## Web Servers

### Section 4

- SSH (remote shell) into server:
  - `➜ ssh -i [key pair file] ubuntu@[ip adress OR domain name]`
    - ip adress (elastic I think): `3.95.142.128`
    - domain name: `griffinspacejam.click`
>[!IMPORTANT]
>**DON'T FORGET TO PROPERLY RELEASE THE ELASTIC IP ADDRESS AT THE END OF THE SEMESTER** (in addition to terminating my instance)

- Attempting to get a fun domain name. `griffinspacejam.click` is still registering as "in progress"

  - SUCCESS! my domain name is now `griffinspacejam.click`

>[!WARNING]
>**IMPORTANT**: don't forget about the region in the AWS. If something isn't right (ex: server just not showing up at all..), doublecheck that the region is set to `N. Virginia`

## HTML

### Section 5
- [x] Find a list with HTML elements and examples
- [HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) with examples!
- CodePen is my friend
- [Quick access](https://github.com/webprogramming260/.github/blob/main/profile/html/input/input.md) to HTML input page (from class github)
- pay attention to possible attributes for input elements
  - ex: `value="#ff0000"` for input type `color`
 ```html
  <input 
  type="color" 
  name="varColor" 
  id="color" 
  value="#ff0000" 
  />
```
  - [x] added all pics to new "images" folder
> [!NOTE]
> Note that you may need to include the `crossorigin="anonymous"` attribute if you are requesting files from a different domain than the one serving your content. 
- SVG = Scalable Vector Graphics
    - straight in HTML, **look for a good source for these**
    - [Details](https://developer.mozilla.org/en-US/docs/Web/SVG) on these
- Consider using SVG or Canvas for Startup
- these deploy scripts are confusing.. I hope we get to learn how to deploy things without a custom-made script later

## CSS

### Section 6

- [Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [Pseudo Selectors/classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
    - used for more interactive styling
-[CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) (for CSS declarations, etc.)
- Units
    - can be varied, there are lots of possible ones
    - [Here](https://www.w3schools.com/cssref/css_units.php) is a list
-  [Color](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Applying_color)
-  [Fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
    - use a list of fonts, different OS's have different fonts
      - Or import a font (still good practice to do a list)
        - [google](https://fonts.google.com/) provides a bunch for free
    - 4 Font Families:
      - Serif
      - Sans-serif
      - Fixed
      - Symbol
- [Animation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
  - ooh maybe use [this](https://codepen.io/ifriedham/pen/QWzzpBB) to make some gators for the startup?
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
  -  = adaptability of design (window size, device, etc.)
  -  [Display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
  -  for smartphones include: ```<meta name="viewport" content="width=device-width,initial-scale=1" /> ``` in the `head` element of all HTML pages
  -  `float` = have text wrap around item
  -  use `@media` selector to handle orientation
    - Also used to hide / add items based on size (as aposed to scaling/wrapping)
- [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
  - [examples](https://gridbyexample.com/)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
  - [CSS Tricks Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [Flexbox Froggy](https://flexboxfroggy.com/)
  - Keeps size + location across different screen sizes / orientation(used with `@media`)
- [Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
  - `inspect` on google is handy for seeing the CSS
- Frameworks
  - Tailwind
    - up and coming - keep an eye on it
  - Bootstrap
      - CSS `https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css`
      - JS  `https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js`
      - responsive meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1">`
      - OR just have your heading like so:

        ```html
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
              crossorigin="anonymous"
            />
          </head>
          <body>
            ...
          </body>
        </html>
        ```
      - And put this at the end for javaScript (carousel, buttons, etc.):
        ```html
        <body>
          ...
        
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"
          ></script>
        </body>
        ```
      - OR put `npm install bootstrap@5.2.3` in your console to install it straight to the server machine
      >[!WARNING]
      >**UPDATE THOSE LINKS**: find the [links](https://getbootstrap.com/) to the latest version before building the app
- Simon CSS
  - I changed the Simon CSS files to make the colors way cooler, I also renamed the app "peter" on the play page
    - deploying caused me trouble again, gotta remember to do it in the right directory, and use `~/keys/<pemkeyfile>` for the pemkey address.  Also seems to work better in gitbash than vscode integrated terminal for some reason.
- #### UX Design 
  - Simplicity is key
  -  Colors
     - check out [paletton](https://paletton.com/) or [adobe](https://color.adobe.com/create/color-wheel)
  - typography -> keep it to 3 at most + make it all legible
  - Iconography
    - [Font Awesome](https://fontawesome.com/), [Bootstrap Icons](https://icons.getbootstrap.com/), [Material Icons](http://google.github.io/material-design-icons/), [Flat Color Icons](https://github.com/icons8/flat-color-icons), and [Ant Design Icons](https://github.com/ant-design/ant-design-icons)
  - [Hick's Law](https://en.wikipedia.org/wiki/Hick%27s_law) = the time necessary to make a decision increases logarithmically wit hthe number of choices present
  - try not to break the law -> consider a checklist for accessibility / data security / etc.
  - walls: Do not restrict a user unless absolutely neccessary (ex: payment only required as last step)



## JavaScript

### Section 7

- JS intro
  - Seems very similar to C++ (same commenting style, functions, etc.)
- JS console
  - not to be confused with the OS terminal / cmd
  - useful functions:
    - log - output a message to the console
      ```js
      console.log('hello');
      // OUTPUT: hello
      ```
    - Timer - how long the code has been running
      ```js
      console.time('demo time');
      // ... some code that takes a long time.
      console.timeEnd('demo time');
      // OUTPUT: demo time: 9762.74 ms
      ```
    - Count -how many times the code is called
      ```js
      console.count('a');
      // OUTPUT: a: 1
      console.count('a');
      // OUTPUT: a: 2
      console.count('b');
      // OUTPUT: b: 1
      ```
- Adding JS to HTML
  - either as `<script>` or as a `src` (other file)
- JS type and construct
  - variables declared with `let` or `const`
    - `var` is a depreciated option - causes errors, so don't use
  - Primitive types

  | Type        | Meaning                                                    |
  | ----------- | ---------------------------------------------------------- |
  | `Null`      | The type of a variable that has not been assigned a value. |
  | `Undefined` | The type of a variable that has not been defined.          |
  | `Boolean`   | true or false.                                             |
  | `Number`    | A 64-bit signed number.                                    |
  | `BigInt`    | A number of arbitrary magnitude.                           |
  | `String`    | A textual sequence of characters.                          |
  | `Symbol`    | A unique value.                                            |

  - object types

  | Type       | Use                                                                                    | Example                  |
  | ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
  | `Object`   | A collection of properties represented by name-value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
  | `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
  | `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
  | `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
  | `Map`      | A collection of key-value pairs that support efficient lookups.                        | `new Map()`              |
  | `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |
      
  - `===` for equals, other math operators are normal (strict equality, `==` can still be used, though it sometimes has troubles with data conversions)
  - variables change type dynamically
  - conditional operators are standard (if else, etc.) here's a slimmer alt. for if else too:
    ```js
    a === 1 ? console.log(1) : console.log('not 1');
    ```
  - for more of these + operator examples, see [here](https://github.com/webprogramming260/.github/blob/main/profile/javascript/typeConstruct/typeConstruct.md)
- JS strings
  - specified with `""` or `''` or ` `` `
    - if done with ` `` `, can contain more JS within the string specification
  - functions

    | Function      | Meaning                                                      |
    | ------------- | ------------------------------------------------------------ |
    | length        | The number of characters in the string                       |
    | indexOf()     | The starting index of a given substring                      |
    | split()       | Split the string into an array on the given delimiter string |
    | startsWith()  | True if the string has a given prefix                        |
    | endsWith()    | True if the string has a given suffix                        |
    | toLowerCase() | Converts all characters to lowercase                         |

    ```js
    const s = 'Example:조선글';

    console.log(s.length);
    // OUTPUT: 11
    console.log(s.indexOf('조선글'));
    // OUTPUT: 8
    console.log(s.split(':'));
    // OUTPUT: ['Example', '조선글']
    console.log(s.startsWith('Ex'));
    // OUTPUT: true
    console.log(s.endsWith('조선글'));
    // OUTPUT: true
    console.log(s.toLowerCase());
    // OUTPUT: example:조선글
    ```

- [Functions](https://github.com/webprogramming260/.github/blob/main/profile/javascript/functions/functions.md) pretty bog-standard
  - can be declared inside other functions
  - can be declared anywhere and passed as parameters (they're first order objects)
- Arrow function
  - simplifies syntax, saves space.  These two functions are equivalent: 
    ```js
    const a = [1, 2, 3, 4];

    // standard function syntax
    a.sort(function (v1, v2) {
      return v1 - v2;
    });

    // arrow function syntax
    a.sort((v1, v2) => v1 - v2);
    ```
  - returning values is unique with these, it's dependent on the curly-braces: 
    ```js
    () => 3;
    // RETURNS: 3

    () => {
      3;
    };
    // RETURNS: undefined

    () => {
      return 3;
    };
    // RETURNS: 3
    ```
  - Arrow functions inherit the `this` pointer from the scope of where it is created
  - look into `closure`, it gets complicated - but could be a useful tool.
- Look [here](https://codepen.io/leesjensen/pen/XWxVBRx) for an example of functions (and arrow functions) in action
- [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- JSON - simple/effective way to share and store data
  - format
    - JSON document contains these data types:
      | Type    | Example                 |
      | ------- | ----------------------- |
      | string  | "crockford"             |
      | number  | 42                      |
      | boolean | true                    |
      | array   | [null,42,"crockford"]   |
      | object  | {"a":1,"b":"crockford"} |
      | null    | null                    |
    - example JSON doc:
      ```json     
      {
        "class": {
          "title": "web programming",
          "description": "Amazing"
        },
        "enrollment": ["Marco", "Jana", "فَاطِمَة"],
        "start": "2025-02-01",
        "end": null
      }
      ```
  - converting JSOn to and from JS using `JSON.parse` and `JSON.stringify`
- JS regular expressions
  - basically textual pattern matchers
  - `string` class already has a bunch of functions that accept regular expressions: `match`, `replace`, `search`, `split`
  - see [here](https://github.com/webprogramming260/.github/blob/main/profile/javascript/regularExpressions/regularExpressions.md) for some examples
- Rest and Spread
  - rest = a paramater that contains the `rest` of teh parameters (on-the-fly array)
  - spread = the opposite: takes an array/string, expands it into a function's parameters
- Exceptions
  - `try`, `catch`, and `throw` style exceptions
    - `finally` block will always be called whenever a `try` clock is exited
  >[!WARNING]
  >**WARNING**: use exceptions sparingly - only use when something "truly exceptional" occurs
  - Fallback pattern: putting the feature path in a try block and fallback implementation in the catch block
- Destructuring
  - JS allows for dynamically changing variables with destructuring: think an array being changed into a variable with just the first array value as it's new val.

- [JS objects and classes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
  - objects are my friend
    - check out their associated functions
  - constructors = functions that return an object
    - use the `new` operator
  - class -> defines an object (very similar to C++)
    - instead of `private:` we use `#`
    - `extends` defines inheritance
    - `super` passes parameters to parent


### Section 8

- WIP

## Web Services

### Section 9

- URL = `Uniform Resource Locator`
- Ports
  Common ports:
| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |
 - HTTP = `Hypertext Transfer Protocol`
   - An HTTP request has this general syntax.

  ```yaml
  <verb> <url path, parameters, anchor> <version>
  [<header key: value>]*
  [
  
    <body>
  ]
  ```
  - An HTTP response has the following syntax.

  ```yaml
  <version> <status code> <status string>
  [<header key: value>]*
  [
  
    <body>
  ]
  ```
  - Find a list for status codes!
  - do the same for headers!
- SOP and CORS

### Section 10

### Section 11

## Web Frameworks, Mobile, and Security

### Section 12

### Section 13

### Section 14

## Tests

### Midterm Notes

### Final Notes

<center>

[:arrow_up: back to top](#notes)  

</center
>
