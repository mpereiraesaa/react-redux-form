# reactive-form

This project includes the client code and the server for an small app whom main purpose is to show how good can we develop and complete frontend and the correspondant api. webpack 4 is being used and setup is from scratch.

The frontend is simple and DRY, used the Container/Component pattern to separate the presentation view and layout from the logic and data, redux is implemented and is helping through some actions and reducers to implement a form validation against the user input before calling api.

API backend was done using Node.js express and mongoose as ODM for mongodb solution, the database is hosted at mongodb-atlas site (thanks!).

# Instructions:

Run `yarn` in order to get all dependencies correctly installed and if you want to test the server too you should need again to run `yarn` inside the server directory.

Scripts available in client:
`yarn start` => It will build css from sass and js code too and keep watching for changes over the files.

Scripts available in server:
`yarn run build` => Build dist folder with ES5 code from the ES6 Source files in `src` dir (This script actually delete old dist directory and reinstall the server dependencies again to bundle with the server files).
`yarn run fast-run` => This one doesnt delete `dist` folder nor package.json dependencies as it only overwrites old server ES5 bundle with a new bundle, is a faster way to check your changes and run the server.

# Testing:

`yarn run test`: Run Unit tests using Jest.

`yarn run e2e`: Run E2E tests using webdriverio and latest chromedriver (This need you to install latest chrome version) and it runs in headless mode.
