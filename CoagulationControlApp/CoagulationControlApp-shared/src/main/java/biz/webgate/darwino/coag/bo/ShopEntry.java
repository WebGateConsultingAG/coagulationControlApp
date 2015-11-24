package biz.webgate.darwino.coag.bo;

import java.util.Date;

import com.darwino.commons.json.binding.PojoBaseImpl;
import com.darwino.commons.json.binding.annotations.JsonEntity;
import com.darwino.commons.json.binding.annotations.JsonObject;
@JsonObject(pojoObjectType = "biz.webgate.darwino.coag.bo.ShopEntry")
public class ShopEntry extends PojoBaseImpl {
	@JsonEntity(jsonProperty = "order")
	private String order;
	@JsonEntity(jsonProperty = "orderDate")
	private Date orderdate;
	@JsonEntity(jsonProperty = "userId")
	private String userid;
	@JsonEntity(jsonProperty = "quantity")
	private int quantity;
	@JsonEntity(jsonProperty = "price")
	private int price;
	@JsonEntity(jsonProperty = "address")
	private String address;
	
	
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
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
}
