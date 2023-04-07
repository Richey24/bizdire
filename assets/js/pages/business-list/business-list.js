import listingStore from "../../modules/store/listing-store.js";


$(function(){
    console.log("listing Store js")

    console.log(listingStore.getAll());

    //createListingHtml({title:"test"})
    listingStore.getAll().forEach((ele)=>{
        createListingHtml(ele)
    })


})


function createListingHtml(listingObject) {


    console.log("closing Time Convert",tConvert(listingObject.closingTime));

    let closingTime = tConvert(listingObject.closingTime)
    let openingTime = tConvert(listingObject.openingTime)




    let html = `<div class=card overflow-hidden>
      <div class=ribbon ribbon-top-left text-danger><span
        class=bg-danger>New</span></div>
        <div class=d-md-flex>
       <div class=item-card9-img>
        <div class=item-card9-imgs>
        <a href=business.html></a>
        <img src=../assets/images/products/products/h4.jpg alt=img
        class=cover-image>
       </div>
       <div class=item-card9-icons>
       <a  class=item-card9-icons1 wishlist>
       <i class=fa fa fa-heart-o></i></a>
        </div>
        <div  class=item-cardreview-absolute bg-secondary >${listingObject.category}</div>
       </div>
        <div class=card border-0 mb-0>
        <div class=card-body h-100>
        <div class=item-card9>
        <a href=business.html class=text-dark>
        <h4 class=font-weight-semibold mt-1 mb-1>${listingObject.title}<i
        class=fa fa-exclamation-circle text-warning ms-1
        data-bs-toggle=tooltip data-bs-placement=top
        title=
        data-bs-original-title=Not Verified></i></h4>
        </a>
        <div class=d-flex me-5>
        <div class=rating-star sm my-rating-5
        data-rating=4.5>
        </div>
        <a class=fs-13 leading-tight mt-1
        href=javascript:void(0)>13
        Reviews</a>
        </div>
        <div class=mt-2 mb-2>
        <a href=javascript:void(0)
        class=mt-1 mb-1 me-3 text-dark><i
        class=fa fa-globe me-1></i> ${listingObject.state}</a>
        <a href=javascript:void(0)
        class=mt-1 mb-1 me-1 text-muted><i
        class=fa fa-map-marker me-1></i> ${listingObject.city}</a>
        </div>
        <p class=mb-0 leading-tight><span
        class=font-weight-semibold text-dark> Timings :
        </span> ${openingTime} - ${closingTime}</p>
        </div>
        </div>
        <div class=card-footer pt-2 pb-2>
        <div class=item-card9-footer d-sm-flex>
        <div class=item-card9-cost>
        <div
        class=text-dark font-weight-normal mb-0 mt-0 item-card2-desc>
        <a class= href=javascript:void(0)
        data-bs-toggle=modal
        data-bs-target=#contact><i
        class=fa fa-envelope></i></a>
        <a class= href=javascript:void(0)
        data-bs-toggle=tooltip data-bs-placement=top
        title= data-bs-original-title=458-965-856><i
        class=fa fa-phone></i></a>
        <a class= href=https://spruko.com
        data-bs-toggle=tooltip data-bs-placement=top
        title=
        data-bs-original-title=https://spruko.com><i
        class=fa fa-globe></i></a>
        <a class= href=javascript:void(0)><i
        class=fa fa-share-alt></i></a>
        </div>
        </div>
        <div class=ms-auto mt-3 mt-sm-0>
        <div
        class=text-dark font-weight-normal mb-0 mt-0 item-card2-desc>
        <a href=javascript:void(0)><i
        class=fa fa-map-signs></i> Get
        Directions</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>`;

    $('#parent-div').append(html)

}

function tConvert (time) {
    let merindian = ""

    if(time !==undefined) {
        if (time.length > 1) { // If time format correct
            merindian = time < 12 ? 'AM' : 'PM'; // Set AM/PM
            time = time % 12 || 12; // Adjust hours

            console.log("time",time);
            console.log("merindian",merindian)

            return `${time} ${merindian}`; // return adjusted time or original string
        }

    }else{
        return "time undefined"
    }


}