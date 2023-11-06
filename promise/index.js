//Sync / async
//Async: SetTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame => viết trước nhưng không chạy xong trước
//Các trạng thái của promise: panding, Fulfilled, rejected
setTimeout(function () {
    console.log(1);
}, 1000);

console.log(2);
// Sync: đồng bộ: chạy theo luồng tuần tự
/*-------------------*/
//2. Đặt vấn đề về callback hell và pyramid of doom.
setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
    }, 1000)
}, 1000)
//3 Viết Promise
function getTodos(id) {

    var promise = new Promise(
        //Exrcutor, function này được gọi trước cả khi tạo ra đối tượng promise
        function (resolve, reject) {
            var request = new XMLHttpRequest();

            request.onreadystatechange = function () {
                if (this.readyState === 4 && request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    const dataString = JSON.stringify(data);
                    resolve(data);
                }
                if (this.readyState === 4 && request.status !== 200) {
                    reject('something wrongs ' + id)
                }
            }
            request.open('GET',`https://jsonplaceholder.typicode.com/todos/${id}`,true)
            request.withCredentials = true;
            request.send();
        }
    );

    return promise;
}

getTodos(1).then(data =>{
    console.log(data);
    return getTodos('dff');
}).then(data2=>{
    console.log(data2);
})
.catch(err =>{
    console.log(`>>> Error: ${err}` );
})

