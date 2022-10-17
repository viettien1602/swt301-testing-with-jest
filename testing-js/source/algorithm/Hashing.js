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
