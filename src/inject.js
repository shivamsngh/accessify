import ApiService from './services/accessify-service';

class InjectComponent {
	// just place a div at top right
	constructor() {
		console.log(ApiService);
		this.api = new ApiService();
	}

	getImageDesc() {
		const domain = window.location.href;
		// Check in local storage for the file
		let versionFile = window.localStorage.getItem(domain);
		versionFile = JSON.parse(versionFile);	
		console.log("version file from storage", versionFile);
		if (versionFile) {
			// const parsedVersionFile = JSON.parse(versionFile[0]);
			const images = document.getElementsByTagName('img');
			for (let index = 0; index < images.length; index++) {
				images[index].alt = versionFile.image_data[index].ImageDesc;
			}
		}
		else {
			this.generateVersioningFileOnServer(domain)
				.then(success => {
					console.log("success", success);
					this.getImageDesc();
				})
				.catch(e => console.log(e))
		}
	}

	// PRIVATE
	saveInLocalStorage(key, value) {
		window.localStorage.setItem(key, value);
	}

	generateVersioningFileOnServer(domain) {
		const images = document.getElementsByTagName('img');
		console.log("IMages", images);
		return new Promise((resolve, reject) => {
			return this.api.getImageDescriptionFileFromServer({ location: domain, region: 'us' })
				.then((successFile) => {
					console.log("Success", successFile);
					this.saveInLocalStorage(domain, successFile);
					resolve(successFile);
				}, (error) => {
					console.log("Error in generating version file", error);
					reject(error);
				})
		})

	}

	// alert('inserted self... giggity');
}

const injector = new InjectComponent();
injector.getImageDesc();