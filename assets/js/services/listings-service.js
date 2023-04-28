//import api from 'assets/js/services/api'
//const API_URL = `${process.env.EXPRESS_SERVER_URL}/listing`


const API_URL = `/listing`

const api = axios.create({
    baseURL: 'https://bizdire.azurewebsites.net',
    headers: {
        "Content-Type": "application/json",
    },
})

class ListingsService {


    createList(body) {
        return api.post(`${API_URL}/create`, body, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }


    deleteList(id) {
        return api.delete(`${API_URL}/delete/`, { params: { id: id } })
    }

    getAll() {
        return api.get(`${API_URL}/get/all`)
    }


    getById(id) {
        return api.get(`${API_URL}/get/one/`, { params: { id: id } })
    }


    getByParams(params) {
        return api.get(`${API_URL}/get/params`, { params })
    }


    updateList(id, body) {
        return api.put(`${API_URL}/update/`, { params: { id: id, }, body: body })
    }

}

export default new ListingsService()