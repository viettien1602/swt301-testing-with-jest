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



#### Connect us via email: nvtien1602.forwork@gmail.com

#### Copyright &#169; 2022 Team SWT301 FALL 2022
