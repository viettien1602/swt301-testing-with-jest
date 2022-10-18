## Testing JS algorithm using JEST
### In this demo, we will use a basic hash algorithm to solve a simple string's problem

### Problem
Given string A and string B consisting of only lowercase letters. String B is said to occur at position *i* of string A if: A[i] = B[1], A[i+1] = B[2], ..., A[i+length(B) -1] = B[length(B)]. Find all places where B appears in A.


#### Solving with Brute force

The easiest way to find all places where B appears in A is using two "for" functions to go through every position and compare every word.
Let see the code below:
```JS
function BruteForce(compareString, mainString){
    let listPosition = [];
    for (var i = 0; i < mainString.length; i++)
        if (mainString.charCodeAt(i) === compareString.charCodeAt(0)) {
            var check = true;
            for (var j = 1; j < compareString.length; j++)
                if (mainString.charCodeAt(i + j) !== compareString.charCodeAt(j))
                    check = false;
            if (check) listPosition.push(i + 1);
        }
    return listPosition;
};
module.exports = BruteForce;
```

This way is bad because the complexity is very big. If the length of A is *m* and B is *n*, the complexity will be O(m.n). The function will be runtime error if *m* and *n* over 1000.
So we need a better way so solve the problem.


#### Solving with hash algorithm

The hash algorithm is quite difficult to understand, so I'll just summarize the main points of the algorithm in a few words.
Basically, we will use hash code to compare whether two strings are equal or not instead of using more than one "for" function to compare each word of each string.
If you want to get more details about hash algorithm, find out at: [Hash algorithm](https://vnoi.info/wiki/algo/string/hash.md)

***Brute Force compare two string word by word*** 
```JS
    for (var i = 0; i < mainString.length; i++)
        if (mainString.charCodeAt(i) === compareString.charCodeAt(0)) {
            var check = true;
            for (var j = 1; j < compareString.length; j++)
                if (mainString.charCodeAt(i + j) !== compareString.charCodeAt(j))
                    check = false;
            if (check) listPosition.push(i + 1);
        }
```

***Hash algorithm use only 1 "for" fuction to go through each position***
```JS
      for (var i = 1; i <= mainString.length - compareString.length + 1; i++)
          if (hashCompareString == getHash(POW, hashMainString, i, i + compareString.length - 1))
            listPosition.push(i);
```

So that, you can reduce a lot of complexity of the problem. 
**Here is how hash algorithm solve the problem**
```JS
function Hashing(compareString, mainString) {
  let listPosition = [];
  const base = 31;
  const MOD = 100000003;

  const getHash = (POW, hashMainString, start, end) => {
    // Get hash of the substring of the main string
    return (hashMainString[end] - ((hashMainString[start - 1] * POW[end - start + 1]) % MOD));
  };

  let hashCompareString = 0;
  // Hashing the compare string
  for (var i = 1; i <= compareString.length; i++)
    hashCompareString = (((hashCompareString * base) % MOD) + compareString.charCodeAt(i - 1)) % MOD;

  // Create the total hash prefix of each position
  let hashMainString = [];
  hashMainString[0] = 0;
  for (var i = 1; i <= mainString.length; i++)
    hashMainString[i] = (((hashMainString[i - 1] * base) % MOD) + mainString.charCodeAt(i - 1)) % MOD;

  // Prepare base^i to get hash of the substring of the main string
  let POW = [];
  POW[0] = 1;
  for (var i = 1; i <= mainString.length; i++)
    POW[i] = (POW[i - 1] * base) % MOD;

  // Compare each position of the main string with the compare string
  for (var i = 1; i <= mainString.length - compareString.length + 1; i++)
    if (hashCompareString == getHash(POW, hashMainString, i, i + compareString.length - 1))
      listPosition.push(i);
  return listPosition;
}
module.exports = Hashing;
```

To test this function, we use Jest. We create random string and compare result of two algorithm Brute force and Hash.
```JS
const Hashing = require("../source/algorithm/Hashing");
const BruteForce = require("../source/algorithm/BruteForce");
const generateRandomString = require("../source/algorithm/GenerateRandomString");
test("Add exactly 2 strings A and B to find substring A in B", () => {
        var stringA = "aa";
        var stringB = "aaabaa"
        expect(BruteForce(stringA, stringB)).toStrictEqual([1, 2, 5]));
});
test("Add exactly 2 strings A and B to find substring A in B", () => {
        var stringA = "aa";
        var stringB = "aaabaa"
        expect(Hashing(stringA, stringB)).toStrictEqual([1, 2, 5]));
});
```
Run test
```JS
  npm test
```

So you will see the result of the test







