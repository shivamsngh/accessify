const API_URL = `http://52.224.178.135/api`;
const API_URL_TEST = `http://localhost:3000/api`;
const API_URL_SECURE = `https://accessify.eastus.cloudapp.azure.com/api`;

export default class ApiService {

    constructor() { }

    getImageDescriptionFileFromServer(object) {
        return fetch(`${API_URL_SECURE}/getImageDescription`, {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `domain=${object.location}&region=${object.region}&imageArrayFromBrowser=${JSON.stringify(object.imageArrayFromBrowser)}`
        })
            .then(function (data) {
                console.log('Request succeeded with JSON response', data);
                return data;
            })
            .catch(function (error) {
                console.log('Request failed', error);
                return Promise.reject(error);
            });
    }


}

