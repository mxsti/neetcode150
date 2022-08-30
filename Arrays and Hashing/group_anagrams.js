var groupAnagrams = function(strs) {
    var anagramDict = {};
    strs.forEach(element => {
        let key = element.split("").sort().join("");
        if (!anagramDict[key]) {
            anagramDict[key] = [element]
        } else {
            anagramDict[key].push(element);
        }
    });
    return Object.values(anagramDict);
};

strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));