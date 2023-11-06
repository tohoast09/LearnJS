var deepthArray = [1,2,4,[5,6,7], 8,9,10,[10,11],'th',];

var flatArray = deepthArray.reduce(function(outputArray, deepItem){
    return outputArray.concat(deepItem);
},[]);

console.log(flatArray);

var topics = [
    {
        topic: "Frontend",
        courses: [
        {
            id: 1,
            title: "JS"
        },
        {
            id: 2,
            title: "react"
        }
        ]
    },
    {
        topic: "Backend",
        courses: [
        {
            id: 1,
            title: "PHP"
        },
        {
            id: 2,
            title: "NodeJS"
        }
        ]
    }
]

var listKH = topics.reduce(function(khArray, topic){
    return khArray.concat(topic.courses)
},[])
console.log(listKH);

var html = listKH.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
});
var newHTML = html.join('');
console.log(html);
console.log(newHTML);