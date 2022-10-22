# Supacons Core

Supacons Core is the backbone of Supacons icons. Previously the icons were available as SVGs since at that time those
SVGs were openly available _(needed to dug deep to find them)_ on the Font Awesome's website but, with the release of
Font Awesome 6, they have switched to using webfonts as their primary means to showcase their icons on their website
which made it impossible _(for now)_ to extract/scrape their site for those SVGs.

### Approach

**Previously**, we dug deep into their website tree to scrape out those SVGs which they used to showcase their icons
_(we used Selenium automation with Python for scrapping)_ on their website.

**Currently**, since they have switched to a font based showcase system for their website, we are downloading all the
font files available on the website _(anyone can download these, anytime)_ and create a CSS stylesheet as per their
guidelines/documentation on
[font icons on the web using CSS pseudo-elements](https://fontawesome.com/docs/web/add-icons/pseudo-elements). We used
Selenium automation with Python to scrape out those icon names and their unicode equivalent and used SASS to generate
those 16,000+ CSS classes for those icons.

> **NOTE**\
> The scrapping & automation scripts made of Python with Selenium for Supacons 5 _(Font Awesome 5)_ & Supacons 6 _(Font Awesome 6)_
> are private repositories at the moment, and may be made public in possible future.

| Fields          | Font Awesome | Supacons Core | Supacons |
| --------------- | ------------ | ------------- | -------- |
| Version         | 6            | 6             | 6        |
| Release Version | 6.2.0        | 6.2.0         | 6.1.1    |

| Fields                         | Icon Status |
| ------------------------------ | ----------- |
| Total Generic Icons            | 3,137       |
| Total Brand Icons              | 465         |
| Total Icons                    | 3,602       |
| Total Icons (all combinations) | 19,287      |

---

## Table of Contents

1. [Usage](#usage)
2. [Styling](#styling)
3. [Icons](#icons)
    1. [All](#all)
    2. [Brands](#brands)
    3. [Solid](#solid)
    4. [Regular](#regular)
    5. [Light](#light)
    6. [Thin](#thin)
    7. [Duotone](#duotone)
    8. [Sharp Solid](#sharp-solid)
4. [Todos](#todo)
5. [License](#license)

## Usage

Include the stylesheets in your website using HTML `<link rel="stylesheet">` tags. All stylesheets are compressed for
minimal footprint _(provided that you use the minified versions in `dist/` folder)_. Checkout [Icons](#icons) section to
select your preferred icon.

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.all.css" />
```

Use the icons as you use a standard Font Awesome icon. The syntax of using Supacons icons is 100% similar to using Font
Awesome icons. _(i.e.; you can actually go to [`Font Awesome 6`](https://fontawesome.com/search), pick your icon,
**COPY** the `<i class="fa-solid fa-abacus"></i>` tag (for instance) and **PASTE** it in your HTML code)_

```html
<html>
    <head>
        <link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.all.css" />
    </head>
    <body>
        <i class="fa-solid fa-abacus"></i>
    </body>
</html>
```

## Styling

All the icons **_(EXCEPT Duotone icons)_** can be styled by selecting the `<i>` tag **OR** selecting the icon classes
**OR** you can specifically select the `::before` pseudo element, using your own stylesheets.

```css
/* to set globally for all icons */
i::before {
    color: red;
}
/* OR, to set globally for all solid icons */
.fa-solid::before {
    color: green;
}
/* OR, to set globally for that specific icon */
.fa-icon-name::before {
    color: blue;
}
```

To style duotone icons, you need to select both the `::before` & `::after` pseudo elements of the icon. As per the Font
Awesome guidelines, there is a `opacity: 0.4` property on `::after` pseudo element which you might want to override,
specific to your likeness.

```css
/* to set globally for all icons */
i::before {
    color: red;
}
i::after {
    color: pink;
    opacity: 1;
}
/* OR, to set globally for all duotone icons */
.fa-duotone::before {
    color: green;
}
.fa-duotone::after {
    color: lime;
    opacity: 0.6;
}
/* OR, to set globally for that specific icon */
.fa-icon-name::before {
    color: blue;
}
.fa-icon-name::after {
    color: cyan;
    opacity: 0.2;
}
```

## Icons

### All

Contains all the 3,602 different types of icons _(includes; solid, regular, light, thin, duotone, brands & sharp-solid icons)_ of
Font Awesome 6 Pro, altogether making a total of 19,287 icons.

`https://poseidon-code.github.io/supacons/dist/supacons.all.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.all.css" />
```

### Brands

Contains all the 465 brand icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/supacons.brands.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.brands.css" />
```

### Solid

Contains all the 3,137 solid icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/supacons.solid.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.solid.css" />
```

### Regular

Contains all the 3,137 regular icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/supacons.regular.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.regular.css" />
```

### Light

Contains all the 3,137 light icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/supacons.light.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.light.css" />
```

### Thin

Contains all the 3,137 thin icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/supacons.thin.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.thin.css" />
```

### Duotone

Contains all the 3,137 duotone icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/supacons.duotone.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.duotone.css" />
```

### Sharp Solid

> Sharp Icons are recent addition to Font Awesome 6 _(released with Font Awesome 6 v6.2.0)_.
> It currently contains only solid variation of sharp type.
> It would be updated when Font Awesome 6 releases the entire sharp icons collection.

Contains all the 3,137 sharp solid icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/supacons.sharp.solid.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.sharp.solid.css" />
```

---

## Todos

-   [x] Create Supacons 6 frontend
-   [ ] Add some tests for Sass
-   [ ] Implement autoprefixer & postcss and check/fix for compilation errors
-   [ ] Implement best practices for Sass with better modular design
-   [ ] Implement best practices for compilation & building of Sass
-   [ ] Maybe make a npm package for React same as that of Font Awesome

---

## [License](./LICENSE)

MIT License

Copyright (c) 2022 poseidon-code

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
