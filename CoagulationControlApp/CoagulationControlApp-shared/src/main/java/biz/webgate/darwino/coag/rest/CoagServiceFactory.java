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
import biz.webgate.darwino.coag.dao.InrStorageService;

import com.darwino.commons.json.JsonException;
import com.darwino.commons.json.JsonObject;
import com.darwino.commons.json.binding.JsonPojoDeserializer;
import com.darwino.commons.json.binding.annotations.JsonEntityScope;
import com.darwino.commons.model.PojoJsonIntrospectorAnotationImpl;
import com.darwino.commons.services.HttpService;
import com.darwino.commons.services.HttpServiceContext;
import com.darwino.commons.services.rest.RestServiceBinder;
import com.darwino.commons.services.rest.RestServiceFactory;


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
			if(context.isGet()) {
			} 
			if (context.isPost()) {
				InrEntry entry = new InrEntry();
				try {
					entry = (InrEntry)processFromJson(context, entry);
					InrStorageService service = new InrStorageService();
					entry.initUNID();
					service.saveObject(entry, AppManifest.getDatabase());
					context.emitEmptyJson();
				} catch (JsonException e) {
					e.printStackTrace();
				}
			} 
		}
		
		protected Object processFromJson(HttpServiceContext context, Object targetObject) throws JsonException {
			JsonObject jsonObject = (JsonObject) context.getContentAsJson();
			JsonPojoDeserializer jsonPojoDeserializer = new JsonPojoDeserializer(new PojoJsonIntrospectorAnotationImpl());
			jsonPojoDeserializer.processJson2Object(jsonObject, targetObject, JsonEntityScope.WEB);
			return targetObject;
		}

	}
	
	public CoagServiceFactory() {
		super("api/coag");
	}
	
	@Override
	protected void createServicesBinders(List<RestServiceBinder> binders) {
		/////////////////////////////////////////////////////////////////////////////////
		// INFORMATION
		binders.add(new RestServiceBinder() {
			@Override
			public HttpService createService(HttpServiceContext context, String[] parts) {
				return new CoagRestService();
			}
		});
	}	
}
