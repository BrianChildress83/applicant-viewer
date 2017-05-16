# Applicant Viewing Application

## Introduction
Welcome to Applicant Viewer!

### Technologies Used
* [TypeScript](http://www.typescriptlang.org/) for the base language
  * with [Typings](https://github.com/typings/typings) for TypeScript definition manager
* [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) for development server & reload capability
* [Lite Server](https://github.com/johnpapa/lite-server) for production build server
* [Codelyzer](https://github.com/mgechev/codelyzer) for static code analyzer
* [Karma](http://karma-runner.github.io/) for test-runner
* [Jasmine](http://jasmine.github.io/) for test framework
* [Istanbul](https://github.com/gotwarlost/istanbul) for test coverage
  * with [Remap Istanbul](https://github.com/SitePen/remap-istanbul) for remapping Javascript to TypeScript coverage

## Prerequisites
You need to have [Node.js and npm](https://nodejs.org/en/)
- Support Node v6.9 - latest
- Support npm v3 - latest
- Support [Yarn](https://yarnpkg.com/)

## Installation
Download the application from [link](https://github.com/BrianChildress83/applicant-viewer.git)

Go to the starter directory and install the packages ([Yarn](https://github.com/yarnpkg/yarn) is recommended):
```bash
npm install
```

Then copy `.env.example` and rename it as `.env`.

## Start
Let's start up, run following:
```bash
// Build DLL first, run this once after adding new package
npm run build:dll

// Start the app
npm start
```

and done! Open a browser and go to http://localhost:8080 and you can start developing Angular!
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

> If any error occured when starting, please retry `npm run build:dll`.
That means DLL build is too old and need to be refreshed.

## Testing
This starter comes with testing workflow

### Unit testing
Just run
```bash
npm test
```
and it'll compile all TypeScript files, start Karma, then remap Istanbul coverage so that it shows TypeScript coverage, not the transpiled JavaScript coverage.

### E2E testing
Firstly start the server:
```bash
npm start
```
To begin testing, run:
```bash
npm run e2e
```

## Production

You can create production build by running:
```bash
npm run build
```
or you can create production build and then serve it using Lite Server by running:
```bash
npm run serve:build
```