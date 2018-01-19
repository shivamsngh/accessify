const API_URL = `http://52.224.178.135/api`;
const API_URL_TEST = `http://localhost:3000/api`;

export default class ApiService {

    constructor() { }

    getImageDescription(object) {
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    console.log("response",xhttp.responseText);
                    resolve(xhttp.response);
                }
            };

            xhttp.onerror = function () {
                console.log("Onerror", xhttp);
                reject({ status: this.status, statusText: xhttp.statusText });
            };

            xhttp.open("GET", `${API_URL_TEST}/getImageDescription?domain=${object.domain}&region=${object.region}`);
            xhttp.send();
        });
    }
}

