
function generateRandomString(stringLength){
  let result = "";
  for (var i = 0; i < stringLength; i++) {
    var id = Math.floor(Math.random() * 5);
    if (id == "0") result += "a";
    else if (id == "1") result += "i";
    else if (id == "2") result += "o";
    else if (id == "3") result += "u";
    else if (id == "4") result += "e";
  }
  return result;
}

module.exports = generateRandomString;


