
const API_URL = `/user`

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json",
    },
})


class UserService {


    //get one user: get
    getOneUser(id){
        return api.get(`${API_URL}/get/`, {params:{id:id}} )
    }

    //get All users: get
    getAllUsers(){
        return api.get(API_URL+`/get/all`);
    }

    //update user: put
    updateUser(id, body){
        return api.put(API_URL+`/update/`, {params:{id:id}, body:body});
    }

    //delete user: delete
    deleteUser(id){
        return api.delete(`${API_URL}/delete/`, {params:{id:id}} )
    }


    //Register post
    register(body) {
        return api.post(API_URL + "/register",body)
    }

    //login post
    login(body){
        return api.post(API_URL+"/login", body);
    }

    //reset password post
    resetPassword(body){
        return api.post(API_URL+"/reset/password", body);
    }


}

export default  new UserService();


/*

class LoginFunctions {
    userService = new UserService()

    login(email,password) {

        //call user service for login

        this.userService.login({email, password})
            .then((response)=> {
                return response.data
            })
            .then((data)=>{
                console.log(data)
            })
            .catch((error)=>{
                console.log(error.response.data.message)
            })

    }

}

$(function(){

    console.log("Page loaded ")


    console.log("submit button",$(".submit"));

    let loginMethods;
    loginMethods = new LoginFunctions()


    $(".submit").click(function() {


        loginMethods.login("testEmail@email.com","Password01")
    });



})*/
