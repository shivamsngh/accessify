import { ApiService } from './services/accessify-service';

class InjectComponent {
	// just place a div at top right
	constructor() {
		this.api = new ApiService();
	}

	getImageDesc() {
		let images = document.getElementsByTagName('img');
		console.log("IMages", images);
		console.log("APiService", this.api.getImage);
	}

	// alert('inserted self... giggity');
}

const injector = new InjectComponent();
injector.getImageDesc();