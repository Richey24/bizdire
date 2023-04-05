import listingsService from "../../services/listings-service.js";
import listingStore from "../../modules/store/listing-store.js";

$(function(){

    //check if user logged in

    console.log("ad list loaded")

    listingsService.getAll()
        .then((response)=>{
            return response.data
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
        })




    //save user input
    $('#submit').on('click', (e)=>{
        e.preventDefault()
        getUserInput()
        /*listingsService.createList(body)
          .then((response)=>{
                console.log(response)
            })
          .catch((error)=>{
                console.log(error)
            })*/
    })

    //delete user input




})


function getUserInput (){
    let title = $('#listingTitle')
    let categorySel = $('#categorySel')
    let zipCode = $('#zipCode')
    let phone = $('#phone')
    let daySelect = $('#daySelect')
    let openTimeSelect = $('#openTimeSelect')
    let closeTimeSelect = $('#closeTimeSelect')
    let description = $('#description')
    let image = $('#demo')
    let facebookUrl = $('#facebookUrl')
    let twitterURL = $('#twitterURL')
    let googleURL= $('#googleURL')
    let googleMapUrl = $('#googleMapUrl')
    let yearSelect = $('#yearSelect')
    let paymentSelect = $('#paymentSelect')


    let body ={
        title: title.val(),
        category: categorySel.val(),
        zipCode: zipCode.val(),
        phone: phone.val(),
        day: daySelect.val(),
        openTime: openTimeSelect.val(),
        closeTime: closeTimeSelect.val(),
        description: description.val(),
        image: image.val(),
        facebookUrl: facebookUrl.val(),
        twitterUrl: twitterURL.val(),
        googleUrl: googleURL.val(),
        googleMapUrl: googleMapUrl.val(),
        year: yearSelect.val(),
        payment: paymentSelect.val()
    }
    console.log(body)
}

