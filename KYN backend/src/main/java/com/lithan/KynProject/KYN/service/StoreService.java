package com.lithan.KynProject.KYN.service;

import java.util.List;
import java.util.Optional;

import com.lithan.KynProject.KYN.model.Store;

public interface StoreService {

	public Store addStore(Store store);
	
	public List<Store> getStores();
	
	public Optional<Store> findStoreById(int id);
	
	public void  deleteStoreById(int storeId);
	
	public List<Store> searchForStores(String searchKeyword);
	
	
}