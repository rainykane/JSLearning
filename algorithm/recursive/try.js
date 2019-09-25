/** 递归函数的理解与尝试 */

// 大部分循环可以用递归来替代
function count (n) {
    let sum = 0
    for(let i = 1;i <= n; ++i) {
        sum += i
    }
    return sum
}

/**
 * 递归的特征
 * 1. 函数里头调用函数自身
 * 2. 必须存在递归终止条件（重要）
 * 3. 外层需要内层的计算结果（重要）
 * @param {*} num 
 */
function countRecursive (num) {
    if(num === 0) {
        return 0
    }
    return countRecursive(num - 1) + num
}

function main () {
    let sum = count(100)
    let sumRecursive = countRecursive(100)
    console.log(sum)
    console.log(sumRecursive)
}

main()