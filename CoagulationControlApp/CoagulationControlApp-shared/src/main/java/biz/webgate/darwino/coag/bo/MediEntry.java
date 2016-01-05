package biz.webgate.darwino.coag.bo;

import java.sql.Time;
import java.util.Date;

import com.darwino.commons.json.binding.PojoBaseImpl;
import com.darwino.commons.json.binding.annotations.JsonEntity;
import com.darwino.commons.json.binding.annotations.JsonObject;

@JsonObject(pojoObjectType = "biz.webgate.darwino.coag.bo.MediEntry")
public class MediEntry extends PojoBaseImpl {

	@JsonEntity(jsonProperty = "medivalue")
	private double medivalue;
	@JsonEntity(jsonProperty = "notificationtime")
	private Date notificationtime;
	@JsonEntity(jsonProperty = "notificationdate")
	private Date notificationdate;
	@JsonEntity(jsonProperty = "mediname")
	private String mediname;
	@JsonEntity(jsonProperty = "notificationtype")
	private String notificationtype;
	@JsonEntity(jsonProperty = "notificationday")
	private String notificationday;

	public double getMedivalue() {
		return medivalue;
	}

	public void setMedivalue(double medivalue) {
		this.medivalue = medivalue;
	}

	public Date getNotificationtime() {
		return notificationtime;
	}

	public void setNotificationtime(Date notificationtime) {
		this.notificationtime = notificationtime;
	}

	public Date getNotificationdate() {
		return notificationdate;
	}

	public void setNotificationdate(Date notificationdate) {
		this.notificationdate = notificationdate;
	}

	public String getMediname() {
		return mediname;
	}

	public void setMediname(String mediname) {
		this.mediname = mediname;
	}

	public String getNotificationtype() {
		return notificationtype;
	}

	public void setNotificationtype(String notificationtype) {
		this.notificationtype = notificationtype;
	}

	public String getNotificationday() {
		return notificationday;
	}

	public void setNotificationday(String notificationday) {
		this.notificationday = notificationday;
	}

}
