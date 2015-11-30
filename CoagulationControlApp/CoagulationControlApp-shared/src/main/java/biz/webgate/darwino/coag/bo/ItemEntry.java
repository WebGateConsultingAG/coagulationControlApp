package biz.webgate.darwino.coag.bo;

import java.util.Date;

import com.darwino.commons.json.binding.PojoBaseImpl;
import com.darwino.commons.json.binding.annotations.JsonEntity;
import com.darwino.commons.json.binding.annotations.JsonObject;
@JsonObject(pojoObjectType = "biz.webgate.darwino.coag.bo.ItemEntry")
public class ItemEntry extends PojoBaseImpl {
	@JsonEntity(jsonProperty = "item")
	private String item;
	@JsonEntity(jsonProperty = "itemDate")
	private Date itemdate;
	@JsonEntity(jsonProperty = "orderId")
	private String orderid;
	@JsonEntity(jsonProperty = "quantity")
	private int quantity;
	@JsonEntity(jsonProperty = "itemPrice")
	private int price;


	public String getOrderId() {
		return orderid;
	}
	public void setOrderId(String orderId) {
		this.orderid = orderId;
	}
	public String getOrderid() {
		return orderid;
	}
	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public Date getItemdate() {
		return itemdate;
	}
	public void setItemdate(Date itemdate) {
		this.itemdate = itemdate;
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
