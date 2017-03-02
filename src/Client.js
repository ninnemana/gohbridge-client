
class Client {

	constructor(user = '') {
		this.user = user;
	}

	getBridge() {
		return fetch('http://localhost:8080/')
	}
}

export default Client;
