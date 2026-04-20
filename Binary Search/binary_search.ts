function search(nums: number[], target: number): number {
    if (nums.length === 0) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (right >= left) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) left = mid + 1;
        if (nums[mid] > target) right = mid - 1;
    }

    return -1;
};
