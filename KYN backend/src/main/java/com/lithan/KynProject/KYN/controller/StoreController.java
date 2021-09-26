package com.lithan.KynProject.KYN.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.KynProject.KYN.model.Store;
import com.lithan.KynProject.KYN.service.StoreService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/controller")
public class StoreController {

	@Autowired
	private StoreService storeService;

	@PostMapping("/kyn/stores")
	public Store postStores(@RequestBody Store store) {
		return storeService.addStore(store);

	}

	@GetMapping("/kyn/stores")
	public List<Store> getStores() {
		List<Store> stores = storeService.getStores();
		return stores;
	}

	@DeleteMapping(value = "/kyn/stores/{storeId}")
	public void deleteStore(@PathVariable Integer storeId) {

		storeService.deleteStoreById(storeId);
	}

	@GetMapping(value = "/kyn/stores/{storeId}")
	public Optional<Store> findStoreById(@PathVariable Integer storeId) {
		System.out.println("Get Store By Id");
		return storeService.findStoreById(storeId);
	}

	@RequestMapping(value = "/kyn/stores/{storeId}", produces = "application/json", method = RequestMethod.PUT)
	public Store updateStore(@RequestBody Store store, @PathVariable Integer storeId) {
//				System.out.println("Update Users");
		Optional<Store> newStore = storeService.findStoreById(storeId);
		if (newStore.isPresent()) {
			Store obj = newStore.get();
			obj.setStoreName(store.getStoreName());
			obj.setStorePhoneNo(store.getStorePhoneNo());
			obj.setStoreEmail(store.getStoreEmail());
			obj.setStoreAddress(store.getStoreAddress());
			return storeService.addStore(obj);

		} else {
			// user.setId(id);
			return storeService.addStore(store);
		}
	}

	@GetMapping("/find_kyn_stores/{searchKeyword}")
	public List<Store> searchForStores(@PathVariable("searchKeyword") String searchKeyword) {

		List<Store> stores = storeService.searchForStores(searchKeyword);

		return stores;

	}

}