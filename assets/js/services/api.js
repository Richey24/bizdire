const instance = axios.create({
    baseURL: 'https://bizdire.azurewebsites.net',
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance;
