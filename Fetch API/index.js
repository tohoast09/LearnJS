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
const getNewTodo = async(id) => {
    let data1 = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    console.log(data1);
    return data1
}
//console.log(getNewTodo(1));
getNewTodo('oi').then(data => { console.log('>>> check fetch data: ',data);
return data.json() })
.then(data => {
    console.log('day la data',data);
})
 //hoặc async function gettodo(){}