import loginFunctions from "../../services/userHelper.js";
import authStore from "../../modules/store/auth.js";

$(function () {

    //submit button event
    $(".submit").click(() => {

        //call login functions
        logInButtonSubmit()

    })

})


function logInButtonSubmit() {

    //get user input
    let email = $('input[type=email]').val()
    let password = $('input[type=password]').val()



    loginFunctions.login(email, password)
        .then((data) => {
            clearLoginInput()
            // $(location).prop('href', 'http://localhost:63342/bizdire/index.html');

            //TODO:Store data in local storage
            console.log(data)
            if (data['mainToken'] && data['email']) {
                authStore.setUser(data)
                $(location).prop('href', '/index.html')
            }


        })
        .catch((error) => {
            console.log(error.message);
            alert(error.message)
        })
}


function clearLoginInput() {
    $('input[type=email]').val("")
    $('input[type=password]').val("")
}


