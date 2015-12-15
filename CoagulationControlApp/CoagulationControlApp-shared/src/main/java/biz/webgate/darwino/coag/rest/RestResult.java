package biz.webgate.darwino.coag.rest;

import java.util.List;

import biz.webgate.darwino.coag.bo.InrEntry;
import biz.webgate.darwino.coag.bo.ItemEntry;
import biz.webgate.darwino.coag.bo.MediEntry;
import biz.webgate.darwino.coag.bo.OrderEntry;
import biz.webgate.darwino.coag.bo.UserEntry;

import com.darwino.commons.json.binding.annotations.JsonEntity;
import com.darwino.commons.json.binding.annotations.JsonObject;

@JsonObject(pojoObjectType = "restesult")
public class RestResult {

	@JsonEntity(jsonProperty = "status")
	private String status;
	@JsonEntity(jsonProperty = "error")
	private String error;
	@JsonEntity(jsonProperty = "trace")
	private String trace;

	@JsonEntity(jsonProperty = "inrentries")
	private List<InrEntry> inrEntries;

	@JsonEntity(jsonProperty = "inrentry")
	private InrEntry inrEntry;

	@JsonEntity(jsonProperty = "medientries")
	private List<MediEntry> mediEntries;

	@JsonEntity(jsonProperty = "medientry")
	private MediEntry mediEntry;

	@JsonEntity(jsonProperty = "userData")
	private UserEntry userData;
 
	@JsonEntity(jsonProperty = "itementries")
	private List<ItemEntry> itemEntries;

	@JsonEntity(jsonProperty = "itementry")
	private ItemEntry itemEntry;

	@JsonEntity(jsonProperty = "orderentries")
	private List<OrderEntry> orderEntries;

	@JsonEntity(jsonProperty = "orderentry")
	private OrderEntry orderEntry;

	public List<ItemEntry> getItemEntries() {
		return itemEntries;
	}

	public void setItemEntries(List<ItemEntry> itemEntries) {
		this.itemEntries = itemEntries;
	}

	public ItemEntry getItemEntry() {
		return itemEntry;
	}

	public void setItemEntry(ItemEntry itemEntry) {
		this.itemEntry = itemEntry;
	}

	public List<OrderEntry> getOrderEntries() {
		return orderEntries;
	}

	public void setOrderEntries(List<OrderEntry> orderEntries) {
		this.orderEntries = orderEntries;
	}

	public OrderEntry getOrderEntry() {
		return orderEntry;
	}

	public void setOrderEntry(OrderEntry orderEntry) {
		this.orderEntry = orderEntry;
	}

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

	public UserEntry getUserData() {
		return userData;
	}

	public void setUserData(UserEntry userData) {
		this.userData = userData;
	}

}