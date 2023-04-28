import authStore from "../modules/store/auth.js"


$(function () {

    //check if user logged in

    console.log("header loaded")
    if (!authStore.isAuthenticated()) {
        document.getElementById("mobileAdd").style.display = "none"
        document.getElementById("addEvent").style.display = "none"
        document.getElementById("addList").style.display = "none"
        document.getElementById("secondDash").style.display = "none"
        document.getElementById("myDash").style.display = "none"
    } else {
        document.getElementById("theReg").style.display = "none"
        document.getElementById("theLog").innerHTML = authStore.getEmail()
    }

})

