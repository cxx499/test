function login() {

    var username = document.getElementById("username");
    var pass = document.getElementById("password");

    if (username.value == "") {

        alert("请输入用户名");

    } else if (pass.value  == "") {

        alert("请输入密码");

    } else if(username.value == "student" && pass.value == "123"){

        alert("欢迎您！");
        window.open('student.html');

    } else if(username.value == "teacher" && pass.value == "123") {

        alert("欢迎您！");
        window.open('student.html');

    } else if(username.value == "headteacher" && pass.value == "123") {

        alert("欢迎您！");
        window.open('student.html');

    }else {

        alert("请输入正确的用户信息！")

    }
}