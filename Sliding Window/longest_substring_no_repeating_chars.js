/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0;
    let j = 1;
    let seen = new Map();
    let longest = 0;

    while (j <= s.length) {

        seen.set(s[i]); // s -> d

        if (!seen.has(s[j])) {
            let length = j - i;
            longest = length > longest ? length : longest;
            seen.set(s[j]); // s -> d,v
            j++;
        } else {
            let length = j - i;
            longest = length > longest ? length : longest;
            i++;
            j = i + 1;
            seen.clear();
        }
    }
    return longest;
}

console.log(lengthOfLongestSubstring('pwwkew'))
