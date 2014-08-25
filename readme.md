# eggshell

Simple SASS scaffolding for prototyping Web/mobile apps, built on top of [node-bourbon](https://github.com/lacroixdesign/node-bourbon).Just some sass file build on top of [node-bourbon](https://github.com/lacroixdesign/node-bourbon) project.


## Requirements
- [node](http://nodejs.org)
- [gulp.js](http://gulpjs.com) -or- [Grunt](http://gruntjs.com) -or- [node-sass](https://github.com/andrew/node-sass)

## Installation

To install as a development dependency, run:

```bash
$ npm install --save-dev eggshell
```

If you need it in production, replace `--save-dev` with `--save`.


## gulp.js Usage

Using the [gulp-sass](https://github.com/dlmanning/gulp-sass) plugin.

```
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('test.scss')
    .pipe(sass({
      includePaths: require('eggshell').includePaths
    }))
    .pipe(gulp.dest('dist'));
})

```

See more from the [example folder](https://github.com/Wiredcraft/eggshell/tree/master/example).

## Settings

eggshell comes with a set of colors, sizes and fonts set up as defaults, all declared in `_variables.scss`:

```css
/* Colors */

$blue: #1F8DD6 !default;
$green: #50CD84 !default;
$yellow: #FFC65E !default;
$orange: #FF8859 !default;
$red: #FF5F5F !default;
$purple: #8B66CB !default;
$black: shade(desaturate($blue, 40%), 60%) !default;
$line: tint($black, 85%) !default;
$grey: tint($black, 60%) !default;
$light: tint($black, 98%) !default;

/* Spacing */

$gutter: 20px !default;
$radius: 2px !default;

/* Sizes */

$pico: 10 !default;
$micro: 11 !default;
$small: 12 !default;
$smaller: 14 !default;
$normal: 16 !default;
$larger: 18 !default;
$large: 24 !default;
$huge: 32 !default;
$gigantic: 48 !default;

/* Font */

$font: 'Open Sans', Arial, sans-serif !default;
```

If you intend to override these values, simply assign a default value before importing eggshell in your SASS file:

```css
$blue: #0066cc; // New value for blue

@import 'egghshell';
```

This will replace `$blue` with the `#0066CC` value instead of the `#1F8DD6` default.

## License

MIT
