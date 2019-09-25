// 原型
var obj = {}
var arr = []
function test () {}

console.log(obj.__proto__.toString())
console.log(arr.__proto__.toString())
console.log(test.__proto__.toString())

// 原型链的继承
function Animal () {
    this.eat = function () {
        console.log('now eat')
    }
}

function Cat () {
    this.miao = function () {
        console.log('miao miao ~')
    }
}

Cat.prototype = new Animal()
var cat = new Cat()
cat.eat()

// 原型链的继承 - 高级篇
function Elem (id) {
    this.elem = document.getElementById(id)
}

Elem.prototype.html = function (val) {
    var elem = this.elem
    if( val ) {
        elem.innerHTML = val
        return this // 链式操作
    }else {
        return elem.innerHTML
    }
}

Elem.prototype.on = funtcion (type, fn) {
    var elem = this.elem
    elem.addEventListener(type, fn)
}

var div = new Elem('div1')
div1.html('<a>111</a>')