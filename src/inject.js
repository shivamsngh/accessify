import ApiService from './services/accessify-service';

class InjectComponent {
	// just place a div at top right
	constructor() {
		console.log(ApiService);
		this.api = new ApiService();
	}

	getImageDesc() {
		let images = document.getElementsByTagName('img');
		console.log("IMages", images);
		console.log("APiService");
		this.api.getImageDescription({ domain: 'https://www.google.com', region: 'India' })
			.then((success) => {
				console.log("Success", success);
			}, (error) => {

			})
	}

	// alert('inserted self... giggity');
}

const injector = new InjectComponent();
injector.getImageDesc();