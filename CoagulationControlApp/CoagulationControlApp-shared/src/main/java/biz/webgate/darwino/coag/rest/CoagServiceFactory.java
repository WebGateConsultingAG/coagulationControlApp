/*!COPYRIGHT HEADER! - CONFIDENTIAL 
 *
 * Darwino Inc Confidential.
 *
 * (c) Copyright Darwino Inc 2014-2015.
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has been
 * deposited with the U.S. Copyright Office.     
 */

package biz.webgate.darwino.coag.rest;

import java.util.List;

import biz.webgate.darwino.coag.app.AppManifest;
import biz.webgate.darwino.coag.bo.InrEntry;
import biz.webgate.darwino.coag.bo.MediEntry;
import biz.webgate.darwino.coag.bo.UserEntry;
import biz.webgate.darwino.coag.dao.InrStorageService;
import biz.webgate.darwino.coag.dao.MediStorageService;
import biz.webgate.darwino.coag.dao.UserStorageService;

import com.darwino.commons.json.JsonException;
import com.darwino.commons.json.JsonObject;
import com.darwino.commons.json.binding.JsonPojoDeserializer;
import com.darwino.commons.json.binding.JsonPojoSerializer;
import com.darwino.commons.json.binding.annotations.JsonEntityScope;
import com.darwino.commons.json.serialization.JsonWriter;
import com.darwino.commons.model.PojoJsonIntrospectorAnotationImpl;
import com.darwino.commons.services.HttpService;
import com.darwino.commons.services.HttpServiceContext;
import com.darwino.commons.services.rest.RestServiceBinder;
import com.darwino.commons.services.rest.RestServiceFactory;
import com.darwino.jsonstore.JsonDBException;

/**
 * Application Service Factory.
 * 
 * This is the place where to define custom application services.
 * 
 * @author Philippe Riand
 */
public class CoagServiceFactory extends RestServiceFactory {

	public class CoagRestService extends HttpService {
		@Override
		public void service(HttpServiceContext context) {
			
			if (context.isGet()) {

				if ("inr".equalsIgnoreCase(context
						.getQueryParameterString("type"))) {

					InrEntry entry = null;

					try {

						String unid = context.getQueryParameterString("unid");

						InrStorageService service = new InrStorageService();
						
						RestResult result = new RestResult();
						try {
							entry = service.getObjectByUNID(unid,
									AppManifest.getDatabase());
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

				if ("medi".equalsIgnoreCase(context
						.getQueryParameterString("type"))) {

					MediEntry entry = null;

					try {
						String unid = context.getQueryParameterString("unid");
						MediStorageService service = new MediStorageService();
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

				if ("user".equalsIgnoreCase(context
						.getQueryParameterString("type"))) {

					UserEntry entry = null;

					try {

						String unid = context.getQueryParameterString("unid");

						UserStorageService service = new UserStorageService();
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

			}

			if (context.isPost()) {
				if ("inr".equalsIgnoreCase(context
						.getQueryParameterString("type"))) {
					InrEntry entry = new InrEntry();
					try {
						entry = (InrEntry) processFromJson(context, entry);
						InrStorageService service = new InrStorageService();
						entry.initUnid();
						service.saveObject(entry, AppManifest.getDatabase());
						JsonObject result = new JsonObject();
						result.put("status", "ok");
						result.put("unid", entry.getUnid());
						context.emitJson(result);
					} catch (JsonException e) {
						e.printStackTrace();
					}
				}

				if ("medi".equalsIgnoreCase(context
						.getQueryParameterString("type"))) {
					MediEntry entry2 = new MediEntry();
					try {
						entry2 = (MediEntry) processFromJson(context, entry2);
						MediStorageService service2 = new MediStorageService();
						entry2.initUnid();
						service2.saveObject(entry2, AppManifest.getDatabase());
						JsonObject result2 = new JsonObject();
						result2.put("status", "ok");
						result2.put("unid", entry2.getUnid());
						context.emitJson(result2);
					} catch (JsonException e) {
						e.printStackTrace();
					}
				}

				if ("user".equalsIgnoreCase(context
						.getQueryParameterString("type"))) {
					UserEntry entry = new UserEntry();
					try {
						entry = (UserEntry) processFromJson(context, entry);
						UserStorageService service = new UserStorageService();
						entry.initUnid();
						service.saveObject(entry, AppManifest.getDatabase());
						JsonObject result = new JsonObject();
						result.put("status", "ok");
						result.put("unid", entry.getUnid());
						context.emitJson(result);
					} catch (JsonException e) {
						e.printStackTrace();
					}
				}

			}
		}

		protected Object processFromJson(HttpServiceContext context,
				Object targetObject) throws JsonException {

			JsonObject jsonObject = (JsonObject) context.getContentAsJson();

			JsonPojoDeserializer jsonPojoDeserializer = new JsonPojoDeserializer(
					new PojoJsonIntrospectorAnotationImpl());

			jsonPojoDeserializer.processJson2Object(jsonObject, targetObject,
					JsonEntityScope.WEB);

			return targetObject;
		}

		protected void processToJson(HttpServiceContext context,
				Object targetObject) throws JsonException {

			JsonWriter jsonWriter = context.getJsonWriter();

			JsonPojoSerializer jsonPojoserializer = new JsonPojoSerializer(
					new PojoJsonIntrospectorAnotationImpl());

			jsonPojoserializer.process2JSON(jsonWriter, targetObject,
					JsonEntityScope.WEB);

		}

	}

	public CoagServiceFactory() {
		super("api/coag");
	}

	@Override
	protected void createServicesBinders(List<RestServiceBinder> binders) {
		// ///////////////////////////////////////////////////////////////////////////////
		// INFORMATION
		binders.add(new RestServiceBinder() {
			@Override
			public HttpService createService(HttpServiceContext context,
					String[] parts) {
				return new CoagRestService();
			}
		});
	}
}
