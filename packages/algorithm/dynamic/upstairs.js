// 小明爬楼梯，一次只能上1级或者2级台阶，一共有n级台阶，一共有多少种方法上台阶？
// 思路：
// 将问题转换为“状态转移方程” -> f(n) = f(n-1) + f(n-2)
function upStairs (num) {
    if(num === 1) {
        return 1
    }else if(num === 2) {
        return 2
    }else {
        return upStairs(num-1) + upStairs(num-2)
    }
}

function main () {
    const num = 7
    const steps = upStairs(num)
    console.log(steps)
}

main()