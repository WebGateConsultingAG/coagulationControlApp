package biz.webgate.darwino.coag.rest.controller;

import java.util.List;
import java.util.Map;

import biz.webgate.darwino.coag.app.AppManifest;
import biz.webgate.darwino.coag.bo.InrEntry;
import biz.webgate.darwino.coag.dao.InrStorageService;
import biz.webgate.darwino.coag.rest.RestResult;

import com.darwino.commons.json.JsonException;
import com.darwino.commons.json.JsonObject;
import com.darwino.commons.services.HttpServiceContext;
import com.darwino.jsonstore.JsonDBException;

public class InrController extends EndpointController<InrEntry>{

	private InrStorageService service = null;
	
	public InrController() {
		this.service = new InrStorageService();
	}

	@Override
	public void getOne(HttpServiceContext context, String unid) {
		try {

			InrEntry entry = new InrEntry();
			RestResult result = new RestResult();
			
			try {
				entry = service.getObjectByUNID(unid, AppManifest.getDatabase());
				result.setInrEntry(entry);
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
			
			List<InrEntry> inrList = null;
			RestResult result = new RestResult();
			try{
				
				String query = buildQueryFromParams(params);
				inrList = service.selectObject(AppManifest.getDatabase(), query, "measuredate desc", 200);

				
				System.out.println(inrList);
				
				result.setStatus("ok");
				result.setInrEntries(inrList);
				
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
		
		InrEntry entry = new InrEntry();
		JsonObject result = new JsonObject();
		
		try {
			entry = (InrEntry) processFromJson(context, entry);
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
