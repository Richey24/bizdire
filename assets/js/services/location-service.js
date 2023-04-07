
const API_URL = `/location`

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        "Content-Type": "application/json",
    },
})


class locationService {

    //search for location
    search(body) {
        console.log(body)
        return api.post(`${API_URL}/search`, body)
    }

    //get all locations
    getAll() {
        return api.get(`${API_URL}/get/all`)
    }

}



export default new locationService();