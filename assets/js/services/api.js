const instance = axios.create({
    baseURL: 'https://catfact.ninja',
    headers: {
        "Content-Type": "application/json",
    },
})

export default instance;
