/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    valid = true;
    pairs = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
    };

    p = s.split("");
    stack = [];

    p.forEach(paran => {
        if (isOpen(paran)) { stack.push(paran) }
        else {
            if (paran != pairs[stack.pop()]) { valid = false; return; }
        }
    });
    return valid ? stack.length === 0 : false;
};

function isOpen(c) {
    return c === "(" || c === "{" || c === "[";
};

s = "()[{]}"
console.log(isValid(s));