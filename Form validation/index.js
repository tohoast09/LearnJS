//Đối tượng Validator
function Validator(option){

    function Validate(inputElement, rule){
        var errorElement = inputElement.parentElement.querySelector(option.errorSelector);
        var errorMessage = rule.test(inputElement.value);
                if(errorMessage){ //có lỗi
                    errorElement.innerText = errorMessage;

                    inputElement.parentElement.classList.add('invalid');
                } else{
                    errorElement.innerText = '';

                    inputElement.parentElement.classList.remove('invalid');
                }
    }

    var formElement = document.querySelector(option.form); //lấy được form-1
    //console.log(formElement);
    
    option.rule.forEach(function(rule){
        var inputElement = formElement.querySelector(rule.selector);

        if(inputElement){
            //Xư lý trường hợp blur khoi input
            inputElement.onblur = function(){
                Validate(inputElement, rule)
            };

            //Xử lí mỗi khi người dùng nhập vào input
            inputElement.oninput = function(){
                var errorElement = inputElement.parentElement.querySelector(option.errorSelector);
                
                errorElement.innerText = '';

                inputElement.parentElement.classList.remove('invalid');
            }
        }
    })

};

//Định nghĩa các rules
Validator.isRequired = function(selector){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : "vui lòng nhập trường này";
        }
    }
};

Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "trường này phai là email";
        }
    }
};