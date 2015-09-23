package biz.webgate.darwino.coag.bo;


import java.util.Date;

import com.darwino.commons.json.binding.PojoBaseImpl;
import com.darwino.commons.json.binding.annotations.JsonEntity;
import com.darwino.commons.json.binding.annotations.JsonObject;

@JsonObject(pojoObjectType = "biz.webgate.darwino.coag.bo.MediEntry")
public class UserEntry extends PojoBaseImpl {
	
	@JsonEntity(jsonProperty = "grender")
	private boolean grender;
	@JsonEntity(jsonProperty = "birthDate")
	private Date birthdate;
	@JsonEntity(jsonProperty = "firstName")
	private String firstname;
	@JsonEntity(jsonProperty = "lastName")
	private String lastname;
	@JsonEntity(jsonProperty = "welcomemsg")
	private int welcomemsg;
	public boolean isGrender() {
		return grender;
	}
	public void setGrender(boolean grender) {
		this.grender = grender;
	}
	public Date getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public int getWelcomemsg() {
		return welcomemsg;
	}
	public void setWelcomemsg(int welcomemsg) {
		this.welcomemsg = welcomemsg;
	}
	

}
