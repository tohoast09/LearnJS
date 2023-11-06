var aElement = document.links;

console.log(aElement);

for(var i=0; i<aElement.length; i++){
    aElement[i].onclick = function(e){
        // if(!e.target.href.startsWith('https://www.bing.com')){
        //     e.preventDefault();
        // }
    }
}

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e){
    e.stopPropagation(); // ngăn chặn nổi bọt (gọi DOM event ngoài)
    e.preventDefault();
} //ngăn chặn hành vi mặc định

