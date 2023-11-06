//request có 2 loại
//-Từ backend gửi tới server của máy khách (server-server)
//-server trọc trực tiếp đến DB -> thực hiện hành động từ ứng dụng đê lôi data về (bản chất ko phải request mà là hành động mà lấy data về)
//Các trạng thái response: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
       console.log('>>> check res:', request);
    }
};
request.open("GET", "data.json", true);
request.send();