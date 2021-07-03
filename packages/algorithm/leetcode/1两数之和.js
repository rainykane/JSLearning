
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

/**
 * 1 暴力破解
 * 时间复杂度： O(n^2)
 */
var twoSum = function(nums, target) {
    for(let index1 in nums) {
        for(let index2 in nums) {
            if(index1 !== index2 && nums[index1] + nums[index2] === target){
                return [index1, index2]
            }
        }
    }
}

/**
 * 2 hash表法
 * 时间复杂度： O(n)
 */
var twoSum = function(nums, target) {
    let visited = []
    for(let index in nums) {
        let num = nums[index]
        if(visited[target-num]) {
            return [visited[target-num], index]
        }
        visited[num] = index
    }
}

console.log(twoSum([3,2,4], 6))