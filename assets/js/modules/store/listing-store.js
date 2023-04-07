


class listingStore {
   getAll(){
       return JSON.parse(localStorage.getItem('listing'))
   }

    get(id) {

    }

    create(listing) {

    }

    update(listing) {

    }

    delete(id) {

    }

    setListings(listing) {
        localStorage.setItem('listing', JSON.stringify(listing))
    }


}

export default new listingStore();