# reac-form using Redux custom validator for Form fields.

Live at: https://react-form-test.herokuapp.com

This project includes the client code and the server for an small app whom main purpose is to show how good can we develop and complete frontend and the correspondant api. webpack 4 is being used and setup is from scratch.

The frontend is simple and DRY, used the Container/Component pattern to separate the presentation view and layout from the logic and data, redux is implemented and is helping through some actions and reducers to implement a form validation against the user input before calling api. It was tested using Unit testing in the components and redux and E2E tested using webdriverio and selenium chromedriver.

API backend was done using Node.js express and mongoose as ODM for mongodb solution, the database is hosted at mongodb-atlas site (thanks!).

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
