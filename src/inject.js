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
		console.log("version file from storage", versionFile);
		if (versionFile) {
			// Version file in redis string format

			const parsedStringFile = JSON.parse(versionFile);
			const parsedVersionFile= JSON.parse(parsedStringFile[0]);
			const images = document.getElementsByTagName('img');
			for (let index = 0; index < images.length; index++) {
				// CHECK if ALT text already present
				images[index].alt = parsedVersionFile.image_data[index].ImageDesc;
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
		// const imgLengthInBrowser = images.length;
		let imageArrayBrowser = [];
		for (let i = 0; i < images.length; i++) {
			let obj = { imgUri: images[i].currentSrc, sitename: domain };
			imageArrayBrowser.push(obj);
		}
		return new Promise((resolve, reject) => {
			return this.api.getImageDescriptionFileFromServer({ location: domain, region: 'us', imageArrayFromBrowser: imageArrayBrowser })
				.then((successFile) => {
					// if (this.integrityCheck(images, successFile)) {
						console.log("Success", successFile);
						this.saveInLocalStorage(domain, successFile);
						resolve(successFile);
					// }
					// else {
					// 	reject('File not compatible');
					// }

				}, (error) => {
					console.log("Error in generating version file", error);
					reject(error);
				})
		})

	}

	integrityCheck(images, versioningFile) {
		console.log("ver file", versioningFile);
		const fileFromServer = JSON.parse(versioningFile);
		console.log("parsed ver file", fileFromServer);
		if (images.length === fileFromServer.image_data.length)
			return true;
		else return false;
	}

	checkForAltTextValidity(images){

	}

	// alert('inserted self... giggity');
}

const injector = new InjectComponent();
injector.getImageDesc();