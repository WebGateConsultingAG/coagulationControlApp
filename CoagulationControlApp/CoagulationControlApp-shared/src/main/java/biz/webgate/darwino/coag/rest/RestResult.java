package biz.webgate.darwino.coag.rest;

import java.util.List;

import com.darwino.commons.json.binding.annotations.JsonEntity;
import com.darwino.commons.json.binding.annotations.JsonObject;

import biz.webgate.darwino.coag.bo.InrEntry;
import biz.webgate.darwino.coag.bo.MediEntry;
import biz.webgate.darwino.coag.bo.ShopEntry;
import biz.webgate.darwino.coag.bo.UserEntry;

@JsonObject(pojoObjectType="restesult")

public class RestResult {

	@JsonEntity(jsonProperty="status")
	private String status;
	@JsonEntity(jsonProperty="error")
	private String error;
	@JsonEntity(jsonProperty="trace")
	private String trace;
	
	@JsonEntity(jsonProperty="inrentries", showEmptyValue=true)
	private List<InrEntry> inrEntries;
	
	@JsonEntity(jsonProperty="inrentry")
	private InrEntry inrEntry;
	
	@JsonEntity(jsonProperty="medientries")
	private List<MediEntry> mediEntries;
	
	@JsonEntity(jsonProperty="medientry")
	private MediEntry mediEntry;
	
	

	@JsonEntity(jsonProperty="shopentries")
	private List<ShopEntry> shopEntries;
	@JsonEntity(jsonProperty="shopentry")
	private ShopEntry shopEntry;
	
	@JsonEntity(jsonProperty="userData")
	private UserEntry userData;
	
	



	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public String getError() {
		return error;
	}


	public void setError(String error) {
		this.error = error;
	}


	public String getTrace() {
		return trace;
	}


	public void setTrace(String trace) {
		this.trace = trace;
	}


	public List<InrEntry> getInrEntries() {
		return inrEntries;
	}


	public void setInrEntries(List<InrEntry> inrEntries) {
		this.inrEntries = inrEntries;
	}


	public InrEntry getInrEntry() {
		return inrEntry;
	}


	public void setInrEntry(InrEntry inrEntry) {
		this.inrEntry = inrEntry;
	}


	public List<MediEntry> getMediEntries() {
		return mediEntries;
	}


	public void setMediEntries(List<MediEntry> mediEntries) {
		this.mediEntries = mediEntries;
	}


	public MediEntry getMediEntry() {
		return mediEntry;
	}


	public void setMediEntry(MediEntry mediEntry) {
		this.mediEntry = mediEntry;
	}
	
	
	
	public List<ShopEntry> getShopEntries() {
		return shopEntries;
	}


	public void setShopEntries(List<ShopEntry> shopEntries) {
		this.shopEntries = shopEntries;
	}

	
	public ShopEntry getShopEntry() {
		return shopEntry;
	}


	public void setShopEntry(ShopEntry shopEntry) {
		this.shopEntry = shopEntry;
	}
	


	public UserEntry getUserData() {
		return userData;
	}


	public void setUserData(UserEntry userData) {
		this.userData = userData;
	}
	
	
}