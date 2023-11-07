// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(Reponse => {
//         console.log('>>> check fetch data: ',Reponse);
//         console.log('>>> check fetch data: ', Reponse.json());
//         return Reponse.json()
//     })
//     .then(data => {
//         console.log('>>> check fetch data: ',data);
//     })

//Đối với cách dùng async & await
const getNewTodo = async (id) => {
    let data1 = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if (data1 && data1.status !== 200) {
        throw new Error('something wrongs with status code: ' + data1.status) // giống như reject, còn return thì vào resolve
    }
    console.log(data1);
    return data1
}
//console.log(getNewTodo(1));
getNewTodo('dadd').then(data => {
    console.log('>>> check fetch data: ', data);
    return data.json()
})
    .then(data => {
        console.log('day la data', data);
    })
    .catch(err => {
        console.log('have error: ', err.message);
    });
//hoặc async function gettodo(){}
//Nếu như dùng async, await thì chưa xử lý được trường hợp bị lỗi
