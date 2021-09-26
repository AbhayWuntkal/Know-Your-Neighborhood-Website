import axios from "axios";
import authHeader from "./auth-header";

const STORE_BASE_URL = "http://localhost:8080/controller/kyn/stores";

class StoreService {
	getStores() {
		console.log("Get All Store");
		return axios.get(STORE_BASE_URL, { headers: authHeader() });
	}

	getStoreById(storeId) {
		console.log("Get Store by storeId " + storeId);
		return axios.get(STORE_BASE_URL + "/" + storeId, {
			headers: authHeader(),
		});
	}

	createStore(store) {
		console.log("Add New Store");
		return axios.post(STORE_BASE_URL, store, { headers: authHeader() });
	}

	updateStore(store, storeId) {
		console.log("Update Store by storeId " + storeId);
		return axios.put(STORE_BASE_URL + "/" + storeId, store, {
			headers: authHeader(),
		});
	}

	deleteStore(storeId) {
		console.log("Delete Store " + storeId);
		return axios.delete(STORE_BASE_URL + "/" + storeId, {
			headers: authHeader(),
		});
	}

	searchStore(searchKeyword) {
		console.log("Search searchKeyword is  " + searchKeyword);
		return axios.get(
			"http://localhost:8080/controller/find_kyn_stores" + "/" + searchKeyword,
			{ headers: authHeader() }
		);
	}
}

export default new StoreService();
