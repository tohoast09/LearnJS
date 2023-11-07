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
//Để xử lý bất đồng bộ => callback -> callback hell
//promise được sinh ra từ phiên bản mới hơn ES6 -> khắc phục callback hell
//Tạo ra promise, dùng new Promise, trong constructer truyền vào executor function, khi executor thực thi => nhận được 2 tham số là resolve và  reject, thành công => gọi resolve(). thái bại => gọi reject().
//Khi sử dụng promises thì đối tượng promise được tạo ra. có 2 attributes của đối tượng này là .then và .catch. Cả 2 đều nhận đối số là 1 callback function, và .then sẽ thực thi khi vào trường hợp resolve và ngược lại.
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
            request.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}`, true)
            request.withCredentials = true;
            request.send();
        }
    );

    return promise;
}

getTodos(1).then(data => {
    console.log(data);
    return getTodos('dff');
}).then(data2 => {
    console.log(data2);
})
    .catch(err => {
        console.log(`>>> Error: ${err}`);
    })

//4.Học sâu hơn về promise: 
//Các trạng thái: pending, fulfill, reject
//PROMISE CHAIN: giải quyết vấn đề callback hell 

var exPromise = new Promise(
    (resolve, reject) => {
        resolve();
    }
)
//Giải quyết chuyện đầu ra của .then phía trức sẽ là tham số đầu vào của .then phía sau
//Nếu phía trước không return gì thì data phía sau sẽ là undefined
//Trong trường hợp return ra 1 promise thì .then phía sau sẽ đợi trạng thái fulfill hoặc reject của promise
exPromise
    .then(
        () => {
            return 1
        }
    )
    .then(
        (data) => {
            console.log(data)
            return 2
        }
    )
    .then(
        (data) => {
            console.log(data)
            return 3
        }
    )
    .catch(
        (err) => {
            console.log(err)
        }
    )

//4. Giải bài toán về xử lý bất đồng bộ, cứ sau một khoảng thời gian thì in ra 1,2,3,4
const sleep = (ms) => {
    return new Promise(
        function (resolve, reject) {
            setTimeout(resolve, ms);
        }
    )
}

sleep(1000)
    .then(
        () => {
            console.log(100);
            return sleep(1000);
        }
    )
    .then(
        () => {
            console.log(200);
            return sleep(1000);
        }
    )
    .then(
        () => {
            console.log(300);
            return sleep(1000);
        }
    )
//nếu ở giữa có một return nào trả về rejected => không xử lý tiếp => vào catch

//5.Xem xét về Promise.all().

var promise1 = new Promise(
    (resolve) => {
        setTimeout(
            () => {
                resolve([2, 3])
            }, 5000
        )
    }
)
var promise2 = new Promise(
    (resolve) => {
        setTimeout(
            () => {
                resolve([2, 10])
            }, 7000
        )
    }
)

Promise.all([promise1, promise2])
    .then(
        ([result1, result2]) => {
            console.log(result1.concat(result2));
        }
    )

//Trong trường hợp này, nếu có 1 phần tử promise bị lỗi => Promise.all(...).catch()