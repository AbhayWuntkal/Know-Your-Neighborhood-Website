package com.lithan.KynProject.KYN.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithan.KynProject.KYN.model.Store;
import com.lithan.KynProject.KYN.repository.StoreRepository;

@Service
@Transactional
public class StoreServiceImpl implements StoreService {

	@Autowired
	StoreRepository storeRepo;

	@Override
	public Store addStore(Store store) {
		return storeRepo.save(store);
	}

	@Override
	public List<Store> getStores() {
		List<Store> stores = storeRepo.findAll();
		return stores;
	}

	@Override
	public void deleteStoreById(int storeId) {
		storeRepo.deleteById(storeId);
	}

	@Override
	public Optional<Store> findStoreById(int id) {
		return storeRepo.findById(id);
	}

	@Override
	public List<Store> searchForStores(String searchKeyword) {

		List<Store> stores = storeRepo.searchForStores(searchKeyword);
		return stores;

	}

}