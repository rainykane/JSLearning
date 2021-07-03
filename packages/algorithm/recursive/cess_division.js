/** 细胞分裂 有一个细胞 每一个小时分裂一次，一次分裂一个子细胞，第三个小时后会死亡。那么n个小时候有多少细胞？ */
/** 
 * 解法1
 * aCell : 一小时 上个小时的 a + b + c
 * bCell : 两个小时 上个小时的 a
 * cCell : 三个小时 上个小时的 b
 * */ 
function cellDivision1 (time) {
    let aCell = function (time) {
        if(time === 1) {
            return 1
        }else {
            return aCell(time - 1) + bCell(time - 1) + cCell(time - 1)
        }
    }
    let bCell = function (time) {
        if(time === 1) {
            return 0
        }else {
            return aCell(time - 1)
        }
    }
    let cCell = function (time) {
        if(time === 1 || time === 2 ) {
            return 0
        }else {
            return bCell(time - 1)
        }
    }
    return aCell(time) + bCell(time) + cCell(time)
}

function cellDivision2(hour){
    // 活着的细胞
    function livecell(hour){
        if(hour < 4){
            // 前三个小时没有死亡的细胞 成2的n-1次方增长
            return Math.pow(2,hour-1)
        }else{
            // 从第四个小时开始有死亡的细胞 
            // 活着的细胞 = 前一个小时活着的细胞 - 这个小时死去的细胞
            return livecell(hour-1)*2 - diecell(hour)
        }
    }
    // 死亡的细胞
    function diecell(hour){
        if(hour < 4){
            // 前三个小时没有死亡的细胞
            return 0
        }else{
            // 因为三个小时一个周期
            // 也就是每三个小时,(n-3)时的细胞就会死完
            // 那么 这个小时(n)死去的细胞 + 上个小时(n-1)死去的细胞 + 前两个小时(n-2)死去的细胞 = 前三个小时(n-3)活着的细胞
            return livecell(hour-3) - diecell(hour-1) - diecell(hour-2)
        }
    }
    return livecell(hour)
}

/** 变化1：有一个细胞 每一个小时分裂一次，一次分裂一个子细胞，那么n个小时候有多少细胞？  */
function change1 (time) {
    if(time === 1) {
        return 1
    }
    return change1(time - 1) * 2
}

function main () {
    let n = 5
    let result1 = cellDivision1(n)
    console.log('result1', result1)
    let result2 = cellDivision2(n)
    console.log('result2', result2)
    let change = change1(n)
    console.log('change1', change)
}

main()