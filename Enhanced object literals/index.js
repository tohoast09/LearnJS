//1. Định nghĩa key: value cho object
//2. định nghĩa mothod cho object
//3. Định nghĩa key cho object dưới dạng biến

var name = 'javascript'
var price = 1000;

//yêu cầu tạo ra đối tượng có 2 thuộc tính trên
var course = {
    name : name,
    price: price,
    getname : function(){ //ở đây ta có thể bỏ đi ": function()"
        return name;
    }
}
//thay vì vậy ta có thể bỏ từ "name :" phía trước

var fieldName = 'name';
var fieldPrice = 'price';

const course1 = {
    name1: 'Javascript',
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}

console.log(course1);