var containsDuplicate = function(nums) {
    seen = [];
    hasDuplicate = false;
    nums.forEach((n) => {
        if (seen.includes(n)){
            hasDuplicate = true;
            return;
        } else {
            seen.push(n);
        }
    });
    return hasDuplicate;
};