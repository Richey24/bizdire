import locationService from "../../services/location-service.js";
import listingsService from "../../services/listings-service.js";

$(function(){

    //check if user logged in

    console.log("index loaded")

   getAllLocation();


    $('#search-submit').click(()=>{
        console.log(getSearchInput());

        listingsService.getByParams(getSearchInput())
        .then((response)=>{
              return response.data
          })
        .then((data)=>{
            console.log(data)
        })
            .catch((error)=>{
                console.log(error)
            })


    })




})



function getSearchInput() {
    let phrase = $('#search-phrase').val();
    let location = $('#search-location').val();
    let category = $('#search-category').val();

    let body = {}

   if(phrase !== ""){
       body.title = phrase
   }
   if(location !== ""){
       body.state = location
   }
   if(category !== ""){
       body.category = category
   }

   return body;
}

function locationSearch() {
    let val = $('#search-location').val();
    console.log(val)
    locationService.search({state:val})
        .then((response)=>{
            return response.data
        })
        .then((data)=>{
            console.log(data)
            let filteredData = filterData(data)
            console.log(filteredData)
            $('#search-location').autocomplete({
                source:[filteredData]
            });
        })
        .catch((error)=>{
            console.log(error)
        })
}

function getAllLocation (){
    locationService.getAll()
      .then((response)=>{
            return response.data
        })
      .then((data)=>{
            console.log(data)
            let filteredData = filterData(data)
            $('#search-location').autocomplete({
                source:[filteredData]
            });
        })
      .catch((error)=>{
            console.log(error)
        })
}


function filterData(data) {
    let arr = [];

    data.forEach(element => {
        arr.push(element.state)
    });

    return arr;
}