/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let j = i + 1;
    let substring = [];
    let check_doubles = [];
    check_doubles.push(s[i]);

    while (j < s.length){
        if (s[i] === s[j] || check_doubles.includes(s[j])) {
            console.log(s[i], s[j])
            i = j;
            j++;
            check_doubles = [];
        } else {
            check_doubles.push(s[j]);
            if(check_doubles.length > substring.length) {
                substring = check_doubles;
            }
            j++;
        }
    }
    return substring.length === 0 ? 1 : substring.length;
 }

lengthOfLongestSubstring("pwwkew");