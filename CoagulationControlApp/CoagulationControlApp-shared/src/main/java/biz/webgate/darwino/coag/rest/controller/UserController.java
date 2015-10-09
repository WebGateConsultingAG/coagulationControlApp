package biz.webgate.darwino.coag.rest.controller;

import biz.webgate.darwino.coag.app.AppManifest;
import biz.webgate.darwino.coag.bo.UserEntry;
import biz.webgate.darwino.coag.dao.UserStorageService;
import biz.webgate.darwino.coag.rest.RestResult;

import com.darwino.commons.json.JsonException;
import com.darwino.commons.json.JsonObject;
import com.darwino.commons.services.HttpServiceContext;
import com.darwino.jsonstore.JsonDBException;

public class UserController extends EndpointController<UserEntry> {
	
	private UserStorageService service = null;
	
	public UserController() {
		this.service = new UserStorageService();
	}

	@Override
	public void getOne(HttpServiceContext context, String unid) {
		UserEntry entry = null;

		try {
			
			RestResult result = new RestResult();
			try {
				entry = service.getObjectByUNID(unid,
						AppManifest.getDatabase());
				result.setUserData(entry);
				result.setStatus("ok");
			} catch (JsonDBException jex) {
				result.setStatus("error");
			}
			processToJson(context, result);

		} catch (JsonException e) {
			e.printStackTrace();
		}
		
	}

	@Override
	public void getMany(HttpServiceContext context) {
		try{
			RestResult result = new RestResult();
			
			result.setStatus("error");
			result.setError("User does not support query requests");
			
			processToJson(context, result);
		} catch( JsonException ex) {
			ex.printStackTrace();
		}
	}

	@Override
	public void create(HttpServiceContext context) {
		UserEntry entry = new UserEntry();
		JsonObject result = new JsonObject();
		try {
			entry = (UserEntry) processFromJson(context, entry);
			entry.initUnid();
			
			service.saveObject(entry, AppManifest.getDatabase());
			result.put("status", "ok");
			result.put("unid", entry.getUnid());
			
		} catch (JsonException e) {
			e.printStackTrace();
			result.put("status", "error");
		}
		
		context.emitJson(result);
	}

	@Override
	public void remove(HttpServiceContext context, String unid) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(HttpServiceContext context) {
		// TODO Auto-generated method stub
		
	}

}
