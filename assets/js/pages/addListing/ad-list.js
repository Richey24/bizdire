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
        let body= getUserInput()
        listingsService.createList(body)
          .then((response)=>{
                return response.data
            })
            .then((data)=>{
                console.log(data)
                if(data.message === 'Created Successfully') {
                    $(location).prop('href', 'http://localhost:63342/bizdire/index.html')
                }
            })
          .catch((error)=>{
                console.log(error)
            })
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
        phoneNumber: phone.val(),
        openingDays: daySelect.val(),
        openingTime: openTimeSelect.val(),
        closingTime: closeTimeSelect.val(),
        description: description.val(),
        image: image.val(),
        facebookUrl: facebookUrl.val(),
        twitterUrl: twitterURL.val(),
        googlePlusUrl: googleURL.val(),
        googleMapUrl: googleMapUrl.val(),
        establishedYear: yearSelect.val(),
        paymentMethod: paymentSelect.val(),
        userID:"6424f914a23ccef0ec4c74a4",
        publish:true
    }
    console.log(body)

    return body;
}

