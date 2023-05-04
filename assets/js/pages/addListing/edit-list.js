import listingsService from "../../services/listings-service.js";

$(function () {

    //check if user logged in

    //TODO:Add validation for year, open time , close time and category

    console.log("edit list loaded")

    //onkey title validation
    $("#titleCheck").hide();
    let titleError = true;
    $("#listingTitle").keyup(function () {
        validateTitle();
    });



    //onkey phoneValidation
    $("#phoneCheck").hide();
    let phoneError = true;
    $("#phone").keyup(function () {
        validatePhone();
    });

    //onkey phoneValidation
    $("#zipcodeCheck").hide();
    $("#zipCode").keyup(function () {
        validateZipCode();
    });

    $("#openingDayCheck").hide();
    //no trigger when clicked outside field
    $('#daySelect').change(function () {
        validateDay();
    })

    $('#categoryCheck').hide();
    $('#categorySel').change(function () {
        validateCategory();
    })

    $("#descriptionCheck").hide();
    $('#description').keyup(function () {
        validateDescription();
    })
    let descriptionError = true;

    $("#paymentCheck").hide();
    //no trigger when clicked outside field
    $('#paymentSelect').change(function () {
        console.log($('#payment').val())
        validatePaymentType();
    })
    let paymentError = true;



    //save user input
    $('#submit').on('click', (e) => {
        e.preventDefault()
        console.log(validateOnSubmit());
        if (validateOnSubmit) {
            let body = getUserInput()
            body.forEach((re) => {
                console.log(re);
            })
            console.log(window.location.search.split("=")[1]);
            listingsService.updateList(window.location.search.split("=")[1], body)
                .then((response) => {
                    return response.data
                })
                .then((data) => {
                    console.log(data)
                    if (data.message === 'Updated Successfully') {
                        $(location).prop('href', '/mylistings.html')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    })

    //delete user input




})


function getUserInput() {
    let title = $('#listingTitle')
    let categorySel = $('#categorySel')
    let zipCode = $('#zipCode')
    let phone = $('#phone')
    let email = $('#email')
    let website = $('#website')
    let daySelect = $('#daySelect')
    let openTimeSelect = $('#openTimeSelect')
    let closeTimeSelect = $('#closeTimeSelect')
    let description = $('#description')
    let image = $('#demox')
    let facebookUrl = $('#facebookUrl')
    let twitterURL = $('#twitterURL')
    let googleURL = $('#googleURL')
    let googleMapUrl = $('#googleMapUrl')
    let yearSelect = $('#yearSelect')
    let paymentSelect = $('#paymentSelect')

    let body = new FormData()
    body.append('title', title.val())
    body.append('category', categorySel.val())
    body.append('zipcode', zipCode.val())
    body.append('phoneNumber', phone.val())
    body.append('email', email.val())
    body.append('website', website.val())
    body.append('openingDays', daySelect.val())
    body.append('openingTime', openTimeSelect.val())
    body.append('closingTime', closeTimeSelect.val())
    body.append('description', description.val())
    if (image.prop('files')[0]) {
        body.append('image', image.prop('files')[0], 'image')
    }
    body.append('facebookUrl', facebookUrl.val())
    body.append('twitterUrl', twitterURL.val())
    body.append('googlePlusUrl', googleURL.val())
    body.append('googleMapUrl', googleMapUrl.val())
    body.append('establishedYear', yearSelect.val())
    body.append('paymentMethod', paymentSelect.val())
    body.append('userID', JSON.parse(localStorage.getItem("user"))._id)
    body.append('publish', true)
    return body;
}

function validateOnSubmit() {
    let titleError = validateTitle()
    let paymentError = validatePaymentType()
    let phoneError = validatePhone()
    let descriptionError = validateDescription()
    let dayError = validateDay()
    let zipCodeError = validateZipCode()
    let categoryError = validateCategory()

    let count = titleError + phoneError + descriptionError + zipCodeError + paymentError + dayError + categoryError

    return count === 7
}
function validateTitle() {
    let title = $('#listingTitle').val()
    console.log(title)
    if (title === "") {
        $("#titleCheck").show();
        return false;
    } else {
        $("#titleCheck").hide();
        return true;
    }
}

function validatePhone() {
    let phone = $('#phone').val()
    console.log(phone)
    if (phone === "") {
        $("#phoneCheck").show();
        return false;
    } else {
        $("#phoneCheck").hide();
        return true;
    }
}

function validateDay() {
    let day = $('#daySelect').val()
    console.log(day)
    if (day.length === 0) {
        $("#openingDayCheck").show();
        return false;
    } else {
        $("#openingDayCheck").hide();
        return true;
    }
}

function validateDescription() {
    let description = $('#description').val()
    console.log(description)
    if (description === "") {
        $("#descriptionCheck").show();
        return false;
    } else {
        $("#descriptionCheck").hide();
        return true;
    }
}

function validateZipCode() {
    let zipCode = $('#zipCode').val()
    console.log(zipCode)
    if (zipCode === "") {
        $("#zipcodeCheck").show();
        return false;
    } else {
        $("#zipcodeCheck").hide();
        return true;
    }
}

function validatePaymentType() {
    let payment = $('#paymentSelect').val()
    console.log("payment Type", payment)
    if (payment.length === 0) {
        $("#paymentCheck").show();
        return false;
    } else {
        $("#paymentCheck").hide();
        return true;
    }
}

function validateCategory() {
    let category = $('#categorySel').val()
    console.log(category)
    if (category === '0') {
        $("#categoryCheck").show();
        return false;
    } else {
        $("#categoryCheck").hide();
        return true;
    }
}


