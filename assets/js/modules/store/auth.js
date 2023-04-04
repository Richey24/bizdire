

class auth {

    constructor(user) {

        //set user details
        if(user['token'] && user['name']) {
            localStorage.setItem('user', JSON.stringify(user))
        }

    }


    getUserName() {
        console.log(localStorage.getItem("user"));
    }

    getToken() {
        console.log(localStorage.getItem("user"));
    }





}

export default new auth()