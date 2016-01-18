package biz.webgate.darwino.coag.rest.controller;

import java.util.List;
import java.util.Map;

import biz.webgate.darwino.coag.app.AppManifest;
import biz.webgate.darwino.coag.bo.OrderEntry;
import biz.webgate.darwino.coag.dao.OrderStorageService;
import biz.webgate.darwino.coag.rest.RestResult;

import com.darwino.commons.json.JsonException;
import com.darwino.commons.json.JsonObject;
import com.darwino.commons.services.HttpServiceContext;
import com.darwino.jsonstore.JsonDBException;
import com.darwino.jsonstore.Store;

public class OrderController extends EndpointController<OrderEntry> {

	private OrderStorageService service = null;

	public OrderController() {
		this.service = new OrderStorageService();
	}

	@Override
	public void getOne(HttpServiceContext context, String unid) {
		try {
			OrderEntry entry = null;
			RestResult result = new RestResult();
			try {
				entry = service.getObjectByUNID(unid, AppManifest.getDatabase());
				result.setOrderEntry(entry);
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

		try {
			Map<String, String> params = removeDefaultParams(context.getQueryParameterMap());

			List<OrderEntry> OrderList = null;
			RestResult result = new RestResult();
			try {

				String query = buildQueryFromParams(params);

				OrderList = service.selectObject(AppManifest.getDatabase(), query, null, 200);

				result.setOrderEntries(OrderList);
				result.setStatus("ok");

			} catch (JsonException jex) {
				jex.printStackTrace();
				result.setStatus("error");
				result.setTrace(jex.toString());
			}

			processToJson(context, result);
		} catch (JsonException ex) {
			ex.printStackTrace();
		}
	}

	@Override
	public void create(HttpServiceContext context) {
		OrderEntry entry = new OrderEntry();
		JsonObject result = new JsonObject();
		try {
			entry = (OrderEntry) processFromJson(context, entry);
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
		JsonObject result = new JsonObject();
		try {
			Store Order = AppManifest.getDatabase().getStore("OrderStore");
			
			if ( unid == null || unid.isEmpty() ){
				unid = ((JsonObject) context.getContentAsJson()).getString("unid");
			}

			if (Order.documentExists(unid)) {
				Order.deleteDocument(unid);
				if (Order.documentDeleted(unid)) {
					result.put("status", "ok");
				} else {
					result.put("status", "nok");
					result.put("error", "Document has not been found but NOT deleted");
				}
			} else {
				result.put("status", "nok");
				result.put("error", "Document not found");
			}
		} catch (JsonException je) {
			je.printStackTrace();
		}
		context.emitJson(result);
	}

	@Override
	public void update(HttpServiceContext context, String unid) {
		OrderEntry entry = new OrderEntry();
		JsonObject result = new JsonObject();
		try {
			entry = (OrderEntry) processFromJson(context, entry);
			
			service.saveObject(entry, AppManifest.getDatabase());
			
			result.put("status", "ok");

		} catch (JsonException e) {
			e.printStackTrace();
			result.put("status", "error");
		}
		context.emitJson(result);

	}
	

	
	public void getOpenOrder(HttpServiceContext context, String unid) {
		try {
			
			OrderEntry entry = new OrderEntry();
			RestResult result = new RestResult();

			try {
				entry = service.getObjectByUNID(unid, AppManifest.getDatabase());
				result.setOrderEntry(entry);
				result.setStatus("ok");
			} catch (JsonDBException jex) {
				result.setStatus("error");
			}
			processToJson(context, result);

		} catch (JsonException e) {
			e.printStackTrace();
		}
	}

}
