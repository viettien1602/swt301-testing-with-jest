// Brute Force algorithm to check findPositioOfSubString
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