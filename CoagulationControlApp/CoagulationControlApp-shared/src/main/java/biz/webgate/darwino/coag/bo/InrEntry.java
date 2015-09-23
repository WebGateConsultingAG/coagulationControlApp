package biz.webgate.darwino.coag.bo;

import java.util.Date;

import com.darwino.commons.json.binding.PojoBaseImpl;
import com.darwino.commons.json.binding.annotations.JsonEntity;
import com.darwino.commons.json.binding.annotations.JsonObject;

@JsonObject(pojoObjectType = "biz.webgate.darwino.coag.bo.InrEntry")
public class InrEntry extends PojoBaseImpl {
	
	@JsonEntity(jsonProperty = "inrvalue")
	private double inrvalue;
	@JsonEntity(jsonProperty = "measuredate")
	private Date measuredate;
	@JsonEntity(jsonProperty = "creationdate")
	private Date creationdate;
	@JsonEntity(jsonProperty = "username")
	private String userName;

	public double getInrvalue() {
		return inrvalue;
	}

	public void setInrvalue(double inrvalue) {
		this.inrvalue = inrvalue;
	}

	public Date getMeasuredate() {
		return measuredate;
	}

	public void setMeasuredate(Date measuredate) {
		this.measuredate = measuredate;
	}

	public Date getCreationdate() {
		return creationdate;
	}

	public void setCreationdate(Date creationdate) {
		this.creationdate = creationdate;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}
