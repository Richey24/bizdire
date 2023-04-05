import authStore from "../../modules/store/auth.js";

$(function(){

    //check if user logged in


    //check if user is authenticated
    if(authStore.isAuthenticated()){
        //redirect to home page
        //window.location.href = "/bizdire/index.html";
        hideRegisterDetails()
        displayUserDetails()
    }else {
        //redirect to login page
        //window.location.href = "/bizdire/login.html";
    }

    //add logout function
    $('#logout').click(function(){
        authStore.logout();
        window.location.href = "/bizdire/login.html";
    })


})

function hideRegisterDetails() {
    //get element details
    console.log($('.top-bar-right .custom li'));
    $('.top-bar-right .custom li a')[0].style = 'display:none'
    $('.top-bar-right .custom li a')[1].style = 'display:none'

}


function displayUserDetails() {
    $('.top-bar-right .custom li a')[2].style = 'display:block'
    console.log(authStore.getEmail());
    console.log( $('#userEmailSpan'));
    $('#userEmailSpan').text(authStore.getEmail())
}

