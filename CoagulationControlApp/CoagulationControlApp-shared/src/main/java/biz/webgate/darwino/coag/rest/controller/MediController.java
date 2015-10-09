package biz.webgate.darwino.coag.rest.controller;

import java.util.List;
import java.util.Map;

import biz.webgate.darwino.coag.app.AppManifest;
import biz.webgate.darwino.coag.bo.MediEntry;
import biz.webgate.darwino.coag.dao.MediStorageService;
import biz.webgate.darwino.coag.rest.RestResult;

import com.darwino.commons.json.JsonException;
import com.darwino.commons.json.JsonObject;
import com.darwino.commons.services.HttpServiceContext;
import com.darwino.jsonstore.JsonDBException;

public class MediController extends EndpointController<MediEntry> {
	
	private MediStorageService service = null;
	
	public MediController() {
		this.service = new MediStorageService();
	}

	@Override
	public void getOne(HttpServiceContext context, String unid) {
		try {
			MediEntry entry = null;
			RestResult result = new RestResult();
			try {
				entry = service.getObjectByUNID(unid,
						AppManifest.getDatabase());
				result.setMediEntry(entry);
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
			Map<String, String> params = removeDefaultParams(context.getQueryParameterMap());
			
			List<MediEntry> medList = null;
			RestResult result = new RestResult();
			try{
				
				String query = buildQueryFromParams(params);
				
				medList = service.selectObject(AppManifest.getDatabase(), query, null, 200);
				
				result.setStatus("ok");
				result.setMediEntries(medList);
				
			} catch ( JsonException jex){
				jex.printStackTrace();
				result.setStatus("error");
				result.setTrace(jex.toString());
			}
			
			
			processToJson(context, result);
		} catch( JsonException ex) {
			ex.printStackTrace();
		}
	}

	@Override
	public void create(HttpServiceContext context) {
		MediEntry entry = new MediEntry();
		JsonObject result = new JsonObject();
		try {
			entry = (MediEntry) processFromJson(context, entry);
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
