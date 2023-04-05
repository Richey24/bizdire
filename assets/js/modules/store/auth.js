

class authStore {


    setUser(user) {
        console.log('set User')
        localStorage.setItem('user', JSON.stringify(user))
    }

    getUserName() {
        console.log(localStorage.getItem("user"));
    }

    getToken() {
        console.log(localStorage.getItem("user"));

    }

    getUser() {
        console.log(localStorage.getItem("user"));
        return JSON.parse(localStorage.getItem("user"));
    }

    getEmail() {
        return JSON.parse(localStorage.getItem("user")).email;
    }

    isAuthenticated() {
        let user = JSON.parse(localStorage.getItem('user'));

        if(user!==null){
            return (user.mainToken && user.email)
        }else {
            return false
        }

    }

    logout() {
        localStorage.removeItem('user');
    }





}

export default new authStore()