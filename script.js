
function validateForm(callback) {
    let x = document.getElementById("fname").value;
    let y = document.getElementById("fpass").value;

    if (x == "" || y == "") {
        alert("Input fields cannot be empty");
        return false;
    } else if (x == "admin" && y == "12345") {
        callback();
    } else {
        alert("Invalid credentials!!");
        return false;
    }



}
function loginSuccess() {
    document.getElementById("newForm").action = "mainpage.html";
    console.log("Success!!");
    return true;
}


function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var output = "";
            for (var i = 0; i < response.length; i++) {

                if (response[i].completed == true) {
                    output += `<li class="box">  <input type=checkbox checked disabled>  ${response[i].title}  </li >`;
                } else {
                    output += `<li class="toBox"> <input name="chk" onchange="return myFun()" type=checkbox > ${response[i].title} </li >`;
                }
            }
            document.getElementById("btn").innerHTML = output;

        }

    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();

}
ajax();


function myFun() {
    var a = document.getElementsByName('chk');
    var newvar = 0;
    var count;
    for (count = 0; count < a.length; count++) {
        if (a[count].checked == true) {
            newvar = newvar + 1;
        }
    }
    if (newvar == 5) {
        alert("Congrats. 5 Tasks have been Successfully Completed!")
        return false;
    }
}

