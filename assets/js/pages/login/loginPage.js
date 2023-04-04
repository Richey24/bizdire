import loginFunctions from "../../services/userHelper.js";


$(function(){

    //submit button event
    $(".submit").click(()=> {

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
            console.log(data)

            clearLoginInput()
            alert("success login")

            //changes should be made to the dashboard to say logged In


        })
        .catch((error) => {
            console.log(error.message);
            alert(error.message)
        })
}


function clearLoginInput(){
    $('input[type=email]').val("")
    $('input[type=password]').val("")
}


