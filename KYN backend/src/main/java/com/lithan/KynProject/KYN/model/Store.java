package com.lithan.KynProject.KYN.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@Entity
@EnableAutoConfiguration
public class Store {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int storeId;
	private String storeName;
	private String storePhoneNo;
	private String storeEmail;
	private String storeAddress;

	public int getStoreId() {
		return storeId;
	}

	public void setStoreId(int storeId) {
		this.storeId = storeId;
	}

	public String getStoreName() {
		return storeName;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public String getStorePhoneNo() {
		return storePhoneNo;
	}

	public void setStorePhoneNo(String storePhoneNo) {
		this.storePhoneNo = storePhoneNo;
	}

	public String getStoreEmail() {
		return storeEmail;
	}

	public void setStoreEmail(String storeEmail) {
		this.storeEmail = storeEmail;
	}

	public String getStoreAddress() {
		return storeAddress;
	}

	public void setStoreAddress(String storeAddress) {
		this.storeAddress = storeAddress;
	}

	public Store(int storeId, String storeName, String storePhoneNo, String storeEmail, String storeAddress) {
		super();
		this.storeId = storeId;
		this.storeName = storeName;
		this.storePhoneNo = storePhoneNo;
		this.storeEmail = storeEmail;
		this.storeAddress = storeAddress;
	}
	
	public Store() {
		
	}
	
	
}