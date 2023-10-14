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



## JavaScript

### Section 7

### Section 8

## Web Services

### Section 9

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
---

<center>

| :exclamation::exclamation::exclamation: **WARNING: Work in progress below** :exclamation::exclamation::exclamation: |
| ------------------------------------------------------------------------------------------------------------------- |

</center>

---

[^1]: [this table](https://github.com/ifriedham/startup/assets/46720476/49a157e0-a074-4ca2-8cd0-29fcd08f9515)  


<!--
> [!WARNING]  
> crucial informations

> [!NOTE]  
> Info u should take into account

> [!IMPORTANT]  
> crucial informations
-->


<!--
- [Development Essentials](#development-essentials)
  * [Section 1](#section-1)
  * [Section 2](#section-2)
  * [Section 3](#section-3)
- [Web Servers](#web-servers)
  * [Section 4](#section-4)
- [HTML](#html)
  * [Section 5](#section-5)
- [JavaScript](#javascript)
  * [Section 6](#section-6)
  * [Section 7](#section-7)
  * [Section 8](#section-8)
- [Web Services](#web-services)
  * [Section 9](#section-9)
  * [Section 10](#section-10)
  * [Section 11](#section-11)
- [Web Frameworks, Mobile, and Security](#web-frameworks--mobile--and-security)
  * [Section 12](#section-12)
  * [Section 13](#section-13)
  * [Section 14](#section-14)
- [Tests](#tests)
  * [Midterm Notes](#midterm-notes)
  * [Final Notes](#final-notes)
-->

<!--
[^1]: [this table](https://cdn-useast1.kapwing.com/collections/homer-simpsons-back-fat-meme-template-mxpbg.jpg)
-->

<!--
<center>

# Table of Contents

| <center>By Section  | <center>By Topic |
| ------------------- | ---------------- |
| <table> <tr><th><center>[Section 1](#Section-1)</th></tr>  <tr><td><center>[Section 2](#Section-2)</td></tr>  <tr><td><center>[Section 3](#section-3)</td></tr>  <tr><td><center>[Section 4](#section-4)</td></tr>  <tr><td><center>[Section 5](#section-5)</td></tr>  <tr><td><center>[Section 6](#section-6)</td></tr>  <tr><td><center>[Section 7](#section-7)</td></tr>  <tr><td><center>[Section 8](#section-8)</td></tr>  <tr><td><center>[Section 9](#section-9)</td></tr>  <tr><td><center>[Section 10](#section-10)</td></tr>  <tr><td><center>[Section 11](#section-11)</td></tr>  <tr><td><center>[Section 12](#section-12)</td></tr>  <tr><td><center>[Section 13](#section-13)</td></tr>  <tr><td><center>[Section 14](#section-14)</td></tr>   </table>       |       <table> <tr><th><center>[Development Essentials](#development-essentials)</th>  <tr><td><center>[Web Servers](#web-servers)</td></tr>  <tr><td><center>[HTML](#html)</td></tr>  <tr><td><center>[JavaScript](#javascript)</td></tr>  <tr><td><center>[Web Services](#web-services)</td></tr>  <tr><td><center>[Web Frameworks, Mobile, and Security](#web-frameworks--mobile--and-security)</td></tr>  <tr><td><center>[Tests](#tests)</td></tr>  </table> |


</center>

-->
