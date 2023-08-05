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
[font icons on the web using CSS pseudo-elements](https://fontawesome.com/docs/web/add-icons/pseudo-elements). We are
using a the FontAwesome public API with Python and read out those icon names and their unicode equivalent and used SASS
to generate those 26,000+ CSS classes for those icons.

> **NOTE**\
> The scrapping & automation scripts made of Python with Selenium for Supacons 5 _(Font Awesome 5)_ & Supacons 6 _(Font Awesome 6)_
> are private repositories at the moment, and may be made public in possible future.

| Fields          | Font Awesome | Supacons Core | Supacons |
| --------------- | ------------ | ------------- | -------- |
| Version         | 6            | 6             | 6        |
| Release Version | 6.4.2        | 6.4.2         | 6.4.2    |

| Fields                         | Icon Status |
| ------------------------------ | ----------- |
| Total Generic Icons            | 3,223       |
| Total Brand Icons              | 473         |
| Total Icons                    | 3,690       |
| Total Icons (all combinations) | 26,233      |

_Check [Supacons Core Statistics](./Supacons%20Core%20Statistics.ods) for detailed stats of changes from different Supacons Core releases._

---

> ⚠️ **NOTICE** ⚠️\
> A huge refactoring and structuring of Supacons has happened with the release of Font Awesome 6 sharp variations
> _(solid, regular, light)_. Users of Supacons 6 needs to change the URLs inside the `<link>` tags as mentioned below.

## Table of Contents

1. [Usage](#usage)
2. [Styling](#styling)
3. [Icons](#icons)
    1. [All](#all)
    2. [Brands](#brands)
    3. [Classic](#classic)
        1. [Solid](#solid)
        2. [Regular](#regular)
        3. [Light](#light)
        4. [Thin](#thin)
        5. [Duotone](#duotone)
    4. [Sharp](#sharp)
        1. [Solid](#sharp-solid)
        2. [Regular](#sharp-regular)
        3. [Light](#sharp-light)
4. [Testing](#testing)
5. [Future Updates](#future-updates)
6. [Todos](#todos)
7. [License](#license)

## Usage

Include the stylesheets in your website using HTML `<link rel="stylesheet">` tags. All stylesheets are compressed for
minimal footprint _(provided that, you use the minified versions in `dist/` folder)_. Checkout [Icons](#icons) section to
select your preferred icon.

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.all.css" />
```

Use the icons as you use a standard Font Awesome icons. The syntax of using Supacons icons is 100% similar to using
Font Awesome icons. _(i.e.; you can actually go to [`Font Awesome 6`](https://fontawesome.com/search), pick your icon,
<kbd>**COPY**</kbd> the `<i class="fa-solid fa-abacus"></i>` tag (for instance) and <kbd>**PASTE**</kbd> it in your HTML code)_

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

Contains all the 3,669 different types of icons _(includes; classic versions of solid, regular, light, thin, duotone icons,
brand icons & sharp versions of solid, regular & light icons)_ of Font Awesome 6 Pro, altogether making a total of 26,107 icons.

`https://poseidon-code.github.io/supacons/dist/supacons.all.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/supacons.all.css" />
```

### Brands

Contains all the 467 brand icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/brands/supacons.brands.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/brands/supacons.brands.css" />
```

### Classic

#### Solid

Contains all the 3,205 solid icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/classic/supacons.solid.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/classic/supacons.solid.css" />
```

#### Regular

Contains all the 3,205 regular icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/classic/supacons.regular.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/classic/supacons.regular.css" />
```

#### Light

Contains all the 3,205 light icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/classic/supacons.light.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/classic/supacons.light.css" />
```

#### Thin

Contains all the 3,205 thin icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/classic/supacons.thin.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/classic/supacons.thin.css" />
```

#### Duotone

Contains all the 3,205 duotone icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/classic/supacons.duotone.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/classic/supacons.duotone.css" />
```

### Sharp

> Sharp Icons are recent addition to Font Awesome 6 _(released with Font Awesome 6 v6.3.0)_.
> It currently contains only solid, regular & light variations of sharp type.
> It would be updated when Font Awesome 6 releases the entire sharp icons collection.

<a id="sharp-solid"></a>

#### Solid

Contains all the 3,205 sharp solid icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/sharp/supacons.solid.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/sharp/supacons.solid.css" />
```

<a id="sharp-regular"></a>

#### Regular

Contains all the 3,205 sharp regular icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/sharp/supacons.regular.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/sharp/supacons.regular.css" />
```

<a id="sharp-light"></a>

#### Light

Contains all the 3,205 sharp light icons of Font Awesome 6 Pro _(includes Pro icons)_.

`https://poseidon-code.github.io/supacons/dist/sharp/supacons.light.css`

```html
<link rel="stylesheet" href="https://poseidon-code.github.io/supacons/dist/sharp/supacons.light.css" />
```

## Testing

To test & visualise the changes made to the stylesheets inside `css/` and `dist/` folders,
use a simple HTTP server to host this root directory _(e.g.: inside this project's root directory,
use the python's simple HTTP server to host the files)_.

```sh
python3 -m http.server 8000
```

Open a browser window and goto `http://localhost:8000/test/index.html`

Include and exclude stylesheets just by commenting out the lines in `index.html`

```html
<!-- <link rel="stylesheet" href="../css/supacons.all.css" /> -->
<link rel="stylesheet" href="../dist/supacons.all.css" />
```

_Requires browser refresh everytime there is a change in `index.html` and every file linked with it._\
If the changes are not reflected after simple brower refresh then refresh browser with
<kbd>Ctrl</kbd> + <kbd>F5</kbd> _(i.e. refreshing with cleared cache)_

---

## Future Updates

-   A huge refactoring and structuring has happened with the release of Font Awesome 6 sharp variations
    _(solid, regular, light)_. Users of Supacons 6 needs to change the URLs inside the `<link>` tags as mentioned above.

-   Other variations of sharp icons _(thin, duotone)_ will be incorporated without any breaking changes, users are rest assured.

---

## Todos

-   [x] Create Supacons 6 frontend
-   [ ] Add some tests for Sass
-   [ ] Implement autoprefixer & postcss and check/fix for compilation errors
-   [x] Implement best practices for Sass with better modular design
-   [x] Implement best practices for compilation & building of Sass
-   [ ] Maybe make a npm package for React same as that of Font Awesome

---

## [MIT License](./LICENSE)
