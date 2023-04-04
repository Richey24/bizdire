import userService from "./user-service.js";



class userHelper {

    login(email,password) {

        //call user service for login

        return userService.login({email, password})
            .then((response)=> {
                return response.data
            })


    }


    registerUser(name, email, password) {
        const body = {name:name, email:email, password:password}

        return userService.register(body)
            .then((response)=>{
                return response.data
            })

    }

}


export default new userHelper()