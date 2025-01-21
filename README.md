# Typescript Starter

A very simple and basic Typescript Starter boilerplate template based on npm.

## Features

- Just npm
- Compiles and watches Typescript sources
- Compiles and watches SCSS sources
- Includes css, js, png, jpg, gif and html sources
- Keeps the original file structure
- Includes browser-sync for a local setup

# Getting started

First clone this repository

```
git clone https://github.com/anandmindfire/Typescript-Starter.git
```

or download the [zip][1] and extract it.

Change into the cloned/extracted directory and install the dependencies

```
npm install
```

## Usage

Start developing in the **src/** directory. The structure will be preserved and all files and compilations are copied to the output directory **dist/**.

Build all files

```
npm run build
```

To start a local server and watch the _dist/_ directory just call

```
npm start
```

### Scripts

Watching all files

```
npm run watch:*
```

Run a local server

```
npm run serve
```

## Configuration

You can check the _package.json_ and _tsconfig.json_ and alter them to your needs. For example, if you like to change the output directory, you would have to change all occurrences in these two files.

For more information check out the [tsconfig.json][2] and [package.json][3] documentation.

## Resources

[1]: https://github.com/anandmindfire/Typescript-Starter/archive/master.zip - Download the starter project as a ZIP file.  
[2]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html - Official TypeScript documentation for `tsconfig.json`.  
[3]: https://docs.npmjs.com/files/package.json - Official NPM documentation for `package.json`.  
[4]: https://dribbble.com/ - Dribble, a resource full of web designs.  
[5]: https://sass-lang.com/documentation - Official Sass documentation.  
[6]: https://browsersync.io/docs - BrowserSync documentation for live reload and synchronized testing.  
[7]: https://www.npmjs.com/package/npm-run-all - NPM package for running multiple scripts in parallel or sequentially.  
[8]: https://www.npmjs.com/package/onchange - Official npm documentation for `onchange`, a file-watching utility.  
[9]: https://www.npmjs.com/package/copyfiles - Copyfiles package npm documentation for copying files during build.  
[10]: https://developer.mozilla.org/en-US/docs/Web/HTML - MDN Web Docs for HTML reference.  
[11]: https://developer.mozilla.org/en-US/docs/Web/JavaScript - MDN Web Docs for JavaScript reference.  
[12]: https://developer.mozilla.org/en-US/docs/Web/CSS - MDN Web Docs for CSS reference.  
