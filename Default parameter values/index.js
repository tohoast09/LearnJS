//Trong ES5

function logger(log){
    if(log === undefined){
        log = 'gia tri mac dinh';
    }
    console.log(log);
}

logger() //gia tri mac dinh
logger(undefined) //gia tri mac dinh
logger(null) //null
logger(10) //10


//Trong ES6
function logger1(log = 'gia tri mac dinh', type ='log') {
    console[type](log);
}

logger1() //gia tri mac dinh
logger1(10) //10
logger1(10,'warn') //10