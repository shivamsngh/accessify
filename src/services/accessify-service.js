const API_URL = `http://52.224.178.135/api`;

export default class ApiService {

    constructor() { }

    static getImageDescription(object) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (this.readyState === 4 && this.status == 200) {
                console.log(xhttp.responseText);
            }
        }
        xhttp.open("GET", `${API_URL}/getImageDescription?domain=${object.domain}&region=${object.region}`, true);
        xhttp.send();
    }


}

