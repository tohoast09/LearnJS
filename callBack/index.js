var courses = [
    'php',
    'js',
    'ruby'
];

Array.prototype.map2 = function(callback){
    var output = [];
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++){
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var htmls = courses.map2(function(course,index){
    return `<h2>${course}</h2>`
})

console.log(htmls.join(''));

// courses.forEach(function(course,index,array){
//     console.log(course,index,array);
// })

courses.length = 0;

Array.prototype.forEach2 = function(callback){
    for (var i in this){
        if(this.hasOwnProperty(i)){
            callback(this[i],i,this);
        }
    }
}

courses.forEach2(function(course,index,array){
    console.log(course,index,array);

})
