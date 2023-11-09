//Optional chaining
// được dùng khi không chắc chắn một property, index của array, function có tồn tại hay không khi gọi
// tránh việc dùng if kiểm tra chúng
//obj.val?.[expr]
//obj.func?.(args)
//obj.arr?.[index]
//obj.val?.prop
var obj = {
    cat: {
        name: 'Alice',
        cat1: {
            name: 'Alice1',
            cat2: {
                name: 'Alice2',
                act: 'meow'
            }
        }
    }
}

console.log(obj.cat.cat1?.cat2);