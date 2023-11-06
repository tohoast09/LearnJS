//JSON là một định dạng dữ liệu (chuỗi)
//JavaScript Object Notation
//Json: Number, Boolean, Null, Array, Object, String

// Stringify: từ JS types -> JSON
// Parse: từ JSON -> JS types

var json = '["JavaScript","PHP"]'; //gọn gàng, ko thừa dấu phẩy cuối, phải dùng nháy kép

var Object_json = '{"name":"To Hoa","age":18}' //số trong Json không cần đưa vào nháy kép

var a ='1';
console.log(JSON.parse(Object_json)); //parse: từ JSON sang JS

console.log(JSON.stringify(['js', 'php']))