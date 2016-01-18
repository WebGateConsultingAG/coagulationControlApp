package biz.webgate.darwino.coag.bo;

import java.util.Date;
import com.darwino.commons.json.binding.PojoBaseImpl;
import com.darwino.commons.json.binding.annotations.JsonEntity;
import com.darwino.commons.json.binding.annotations.JsonObject;
@JsonObject(pojoObjectType = "biz.webgate.darwino.coag.bo.OrderEntry")
public class OrderEntry extends PojoBaseImpl {
	@JsonEntity(jsonProperty = "order")
	private String order;
	@JsonEntity(jsonProperty = "orderDate")
	private Date orderdate;
	@JsonEntity(jsonProperty = "creationDate")
	private Date creationdate;
	@JsonEntity(jsonProperty = "userId")
	private String userid;
	@JsonEntity(jsonProperty = "quantity")
	private int quantity;
	@JsonEntity(jsonProperty = "priceAll")
	private int priceall;
	@JsonEntity(jsonProperty = "address")
	private String address;
	@JsonEntity(jsonProperty = "status")
	private String status;


	



	public Date getCreationdate() {
		return creationdate;
	}
	public void setCreationdate(Date creationdate) {
		this.creationdate = creationdate;
	}

	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	public Date getOrderdate() {
		return orderdate;
	}
	public void setOrderdate(Date orderdate) {
		this.orderdate = orderdate;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getpriceAll() {
		return priceall;
	}
	public void setPrice(int priceall) {
		this.priceall = priceall;
	}
	public int getPriceall() {
		return priceall;
	}
	public void setPriceall(int priceall) {
		this.priceall = priceall;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
