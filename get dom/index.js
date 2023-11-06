var inputElement = document.querySelector('input[type="text"]');
console.log(inputElement);

inputElement.onkeyup = function(e){
    console.log(e.which);
    switch (e.which) {
        case 85:
            console.log('exit');
            break;
    }
}
// inputElement.oninput = function(e){
//     console.log(e.target.value);
// }

var checkBoxElement = document.querySelector('input[type="checkbox"]');

checkBoxElement.onchange = function(e){
    console.log(e.target.checked);
}

var selecElement = document.querySelector('select');

selecElement.onchange = function(e){
    console.log(e.target.value);
}

document.onkeydown = function(e){
    switch(e.which) {
        case 85:
            console.log('EXIT');
            break;
        case 13:
            console.log('send chat');
            break;
    }
}