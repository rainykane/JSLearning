## Es6： 新增的操作数组的方法 1 - map(),  2 - filter(), 3 - some(), 4 - every(), 5 - forEach()
### map(item => {item.id}) 
- 遍历数组，根据返回内容组成一个新的数组 - fn 需要返回item数据如果没有返回的话则用undefined填充

### filter(item => boolean)
- 遍历数组，根据返回一个判断条件，返回一个由原数组中满足判断条件的元素组成的新数组

### some(item => boolean)
- 遍历数组，根据返回一个判断条件，如果原数组中存在满足判断条件的元素则返回true, 全部不满足返回false

### every(item => boolean)
- 遍历数组，根据返回一个判断条件，如果原数组中存在不满足判断条件的元素则返回false, 全部不满足返回true

### forEach(item => {})
- 遍历数组, 对数组元素进行操作，会直接改变原数组

### flat(number)
- 将数组扁平化，参数传扁平化的层级
- 兼容性比价差

### entries()
- 需要在for...of 中使用，entries方法返回迭代器，可以通过结构得出 [index, value]

### find((value, index arr) => {})
- 遍历数组，根据返回一个判断条件，返回原数组中满足判断条件的第一个元素的值

### findIndex(value => {} )
- 遍历数组，根据返回一个判断条件，返回原数组中满足判断条件的第一个元素的下标
