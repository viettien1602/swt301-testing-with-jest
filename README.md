# Welcome to Testing with JEST framework Repository: Team SWT301 FALL 2022

### You will find in this repo the following stuff:

* The `data-structure.js` file - A simple implementation of blockchain structure
* The `Hashing.js` file - A function of algorithm to find position of a Substring
* The `mock-function-demo.js` file - A simple demo of Jest Mock Function
* The `setup-teardown` folder - A folder of test files using Jest Setup and Teardown Functions
* `Unit Test files` using Jest framework

### In this README file has some sections:
* [Getting started with Jest](https://github.com/viettien1602/swt301-testing-with-jest#getting-started-with-jest)
* [Testing JS algorithm using JEST framework](https://github.com/viettien1602/swt301-testing-with-jest#testing-js-algorithm-using-jest-framework)
* [Testing JS data structure using JEST framework](https://github.com/viettien1602/swt301-testing-with-jest#testing-js-data-structure-basic-blockchain-implementation-using-jest-framework)
* [Setup - teardown demo in JEST](https://github.com/viettien1602/swt301-testing-with-jest#setup---teardown-demo-in-jest)
* [Mock function demo in JEST](https://github.com/viettien1602/swt301-testing-with-jest#mock-function-demo-in-jest)
* [Testing React using JEST framework](https://github.com/viettien1602/swt301-testing-with-jest#testing-react-using-jest-framework)

## Getting started with Jest

**Make sure you have Node installed on your system**
If your project does not have package.json file, run the following command first:

```
npm init -y
```

Install Jest using `yarn`:

```
yarn add --dev jest
```

Or `npm`:

```
npm install --save-dev jest
```

Add the following section to your `package.json`:

```
{
  "scripts": {
    "test": "jest"
  }
}
```

Finally, run `yarn test` or `npm test` after preparing unit code and test file to see the test result


## Testing JS algorithm using JEST framework
You will find in this session:
* A simple problem will be solved by Hash algorithm, and we will use JEST to test the accuracy of it
* Steps to test:
    * Using Brute Force algorithm to create test case and correct answer
    * Using test case to test Hash algorithm
    * See the test result
    
    ![Hashing-test](https://github.com/viettien1602/swt301-testing-with-jest/blob/main/images/hashing-test.jpg)

#### View more explanation and details code in [algorithm.md](https://github.com/viettien1602/swt301-testing-with-jest/blob/main/testing-js/readme-details/algorithm.md)

## Testing JS data structure (basic blockchain implementation) using JEST framework
You will find in this session:
* A simple implementation of blockchain structure. If you want to get more details to the blockchain, find out at: [BlockChain details](https://youtube.com/playlist?list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4)
* Test cases to test the blockchain created with JEST framework:
    * A new block added must have hash matching difficulty
    * A new block added must have prevHash matching the hash of last block of blockchain
    * A new block added must have data immutable
    * Not changing any data, the whole blockchain should return valid status
    * Changing data of block 1 only, The whole blockchain should return invalid status
    * Changing data and hash of block 1, The whole blockchain should return invalid status
#### View more explanation and details code in [data-structure.md](https://github.com/viettien1602/swt301-testing-with-jest/blob/main/testing-js/readme-details/data-structure.md)

## Setup - teardown demo in JEST
You will find in this session:
* A simple implementation of Jest Setup and Teardown Functions, which help to set up some work that needs to happen before tests run and some work that needs to happen after tests run.
* Test cases with cities database and food database later too see how to advoid calling init() and clear() method at the begining and at the end of each of these test
    * A repeating setup for 3 test
    * A one-time setup - declare once and using for all class test
    * Describe - testing class inside describe block only.
    * Order of testing is situation include all beforeEach(), afterEach(), beforeAll(), afterAll() and describe block
    * One more order of execution.

    ![Setup - teardown demo](https://github.com/viettien1602/swt301-testing-with-jest/blob/main/images/setup-and-teardown.jpg)

## Mock function demo in JEST
You will find in this session:
* A simple implementation of calling another function to retrieve data from database, which points out the problem why we should apply mock function in unit testing
* 2 ways of creating mock function in JEST
    * Conducting a manual mock function by overriding the original one
    * JEST framework supports us an operation to create mock function, which can mock implementation or mock the return value

    ![Mockup-test](https://github.com/viettien1602/swt301-testing-with-jest/blob/main/images/mockup.jpg)

#### View more explanation and details code in [mock-function.md](https://github.com/viettien1602/swt301-testing-with-jest/blob/main/testing-js/readme-details/mock-function.md)


## Testing React using JEST framework
### [my repository](https://github.com/SangTran-127/testing-madness)
## Setup

### Setup with Create-React-App

If you are new to React, we recommend using Create React App. It is ready to use and ships with Jest! You will only need to add react-test-renderer for rendering snapshots.

just install react-test-rerender

```sh
npm install --save-dev react-test-renderer
yarn add --dev react-test-renderer
```

### Setup without Create-React-App

If you have an existing application you'll need to install a few packages to make everything work well together. We are using the babel-jest package and the react babel preset to transform our code inside of the test environment. Also see using babel.

Run

```sh
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
```

Your [package.json]() should look something like this (where <current-version> is the actual latest version number for the package). Please add the scripts and jest configuration entries:

```
{
  "dependencies": {
    "react": "<current-version>",
    "react-dom": "<current-version>"
  },
  "devDependencies": {
    "@babel/preset-env": "<current-version>",
    "@babel/preset-react": "<current-version>",
    "babel-jest": "<current-version>",
    "jest": "<current-version>",
    "react-test-renderer": "<current-version>"
  },
  "scripts": {
    "test": "jest"
  }
}
```

```
babel.config.js
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
};
```

### Snapshot Testing

### DOM Testing:

### Queries

- [ByRole](https://testing-library.com/docs/queries/byrole)
- [ByText](https://testing-library.com/docs/queries/bytext)
- [ByTestId](https://testing-library.com/docs/queries/bytestid)
- ...
  ![](https://res.cloudinary.com/sangtran127/image/upload/v1666128977/amp0raiijelsrtkpzp6u.png)

# CI with Github Pages

1. install gh-pages
   `npm i --save gh-pages `
2. open package.json, add "homepage" field
   `"homepage": "https://myusername.github.io/my-app"`
3. Add the following scripts in your package.json:
   `"predeploy": "npm run build", "deploy": "gh-pages -d build"`
4. Go to the [Personal access tokens area](https://github.com/settings/tokens) in the Developer settings of your GitHub profile and click Generate new token.
   Fill up a note (What's this token for?) and in the repo scope, select only the first 4 options.
   ![](https://res.cloudinary.com/practicaldev/image/fetch/s--ExdPulq9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lhimosexokwen7vm7qlq.png)
5. Type a name for your secret in the Name input box, like [ACTIONS_DEPLOY_ACCESS_TOKEN]().
   ![](https://res.cloudinary.com/practicaldev/image/fetch/s--0VSHQzxe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9tnsdxq4u5wovvf8fm32.png)
6. Go to GitHub Actions add some CI

```node.js.yml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [16.x]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm install

      - name: Run the tests and generate coverage report
        run: npm test

      - name: Build
        run: npm run build

      - name: Deploy
        run: |
          git config --global user.name $user_name
          git config --global user.email $user_email
          git remote set-url origin https://${github_token}@github.com/${repository}
          npm run deploy
        env:
          user_name: "github-actions[bot]"
          user_email: "github-actions[bot]@users.noreply.github.com"
          github_token: ${{ secrets.ACTIONS_DEPLOY_ACCESS_TOKEN }}
          repository: ${{ github.repository }}

```

#### Connect us via email: nvtien1602.forwork@gmail.com

#### Copyright &#169; 2022 Team SWT301 FALL 2022
