# Implementation of a form using basic UI, react, redux and a custom server built for the client purposes with Nodejs and mongodb.
# Updated components to use react hooks.

Live at: https://react-form-test.herokuapp.com

This project includes the client code and the server for an small app whom main purpose is to show how simple it is to develop a complete front-end with it's correspondant API. Webpack 4 is being used and setup is from scratch.

The front-end is fairly simple, we are now using hooks stuff from redux as well, we properly separate the presentation view and layout from the logic and data, redux is implemented and is helping through some actions and reducers to implement form validation against the user input before calling the api. It was tested using Unit testing in the components and the integrations with redux and E2E tested using webdriverio and selenium chromedriver.

Backend was done using Nodejs express and mongoose as ODM for mongodb solution, the database is hosted at mongodb-atlas site.

# Instructions:

Run `yarn` in order to get all dependencies correctly installed and if you want to test the server too you should run `yarn` inside the server directory.

Scripts available in client:
`yarn start`: It will start a webpack development server and build css from sass and js code too keep watching for changes over the files.

`yarn run build-all`: It will fully build a server from the server source and a production client too in the right folders, after running this you can run `yarn run server` so it will start a basic production server on node.js with the frontend client build.

Scripts available to deal with server:
`yarn run fast-build-server`: After running the first build if you want to quickly build your modified server source without installing again the dependencies for the server, this one doesnt delete `dist` folder over server dir nor package.json dependencies as it only overwrites old server ES5 bundle with a new bundle, is a faster way to check your changes and run the server.

# Testing:

`yarn run test`: Run Unit tests using Jest. Tests are made over components they are basic and over redux (actionsCreators and reducer).

`yarn run e2e`: Run E2E tests using webdriverio and latest chromedriver (This need you to install latest chrome version) and it runs in headless mode (faster).
