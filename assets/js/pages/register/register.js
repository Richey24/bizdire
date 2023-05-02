import userHelper from "../../services/userHelper.js";

$(function () {


    //maybe validate if button says register
    $('.submit').click(() => {
        registerBtnSubmit()
    })


})


function registerBtnSubmit() {

    //get user input
    let name = $('input[type=text]').val()
    let email = $('input[type=email]').val()
    let password = $('input[type=password]').val()


    userHelper.registerUser(name, email, password)
        .then((data) => {
            clearInput()
            window.location.replace("/index.html")
        })
        .catch((error) => {
            alert(error.message)
        })



}


function clearInput() {
    $('input[type=email]').val("")
    $('input[type=password]').val("")
    $('input[type=text]').val("")
}
