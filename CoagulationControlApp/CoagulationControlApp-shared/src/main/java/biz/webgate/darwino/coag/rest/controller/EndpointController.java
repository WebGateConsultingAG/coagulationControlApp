package biz.webgate.darwino.coag.rest.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.darwino.commons.json.JsonException;
import com.darwino.commons.json.JsonObject;
import com.darwino.commons.json.binding.JsonPojoDeserializer;
import com.darwino.commons.json.binding.JsonPojoSerializer;
import com.darwino.commons.json.binding.annotations.JsonEntityScope;
import com.darwino.commons.json.serialization.JsonWriter;
import com.darwino.commons.model.PojoJsonIntrospectorAnotationImpl;
import com.darwino.commons.services.HttpServiceContext;

public abstract class EndpointController<T> {

	public abstract void getOne( HttpServiceContext context, String unid);
	
	public abstract void getMany( HttpServiceContext context);
	
	public abstract void create( HttpServiceContext context);
	
	public abstract void remove( HttpServiceContext context, String unid);
	
	public abstract void update( HttpServiceContext context);
	
	protected Object processFromJson(HttpServiceContext context, Object targetObject) throws JsonException {

		JsonObject jsonObject = (JsonObject) context.getContentAsJson();

		JsonPojoDeserializer jsonPojoDeserializer = new JsonPojoDeserializer( new PojoJsonIntrospectorAnotationImpl());

		jsonPojoDeserializer.processJson2Object(jsonObject, targetObject, JsonEntityScope.WEB);

		return targetObject;
	}

	protected void processToJson(HttpServiceContext context,
			Object targetObject) throws JsonException {

		JsonWriter jsonWriter = context.getJsonWriter();

		JsonPojoSerializer jsonPojoserializer = new JsonPojoSerializer( new PojoJsonIntrospectorAnotationImpl());

		jsonPojoserializer.process2JSON(jsonWriter, targetObject, JsonEntityScope.WEB);

	}
	
	protected Map<String, String> removeDefaultParams(Map<String, String> params){
		
		List<String> defaultTypes = new ArrayList<String>();
		
		defaultTypes.add("type");
		defaultTypes.add("action");
		
		for ( String type: defaultTypes){
			if ( params.containsKey(type)){
				params.remove(type);
			};
		};
		
		return params;
	}
	
	protected String buildQueryFromParams(Map<String, String> params){
		StringBuilder query = new StringBuilder();
		String result = null;
		try{
			// Serializing the data with jsonObject was not possible, wrong annotation
			query.append("{");
			int count = 0;
			String val = null;
			
			for ( String propt: params.keySet()){
				count++;
				query.append(propt);
				query.append(":");
				
				val = params.get(propt);
				if (isDouble(val)){
					query.append(val);
				} else {
					query.append("'");
					query.append(val);
					query.append("'");
				}
				if ( count != params.keySet().size()){
					query.append(",");
				}
			}
			query.append("}");
			result = query.toString();
		
		} catch( Exception e) {
			e.printStackTrace();
			result = "{}";
		}
		if ( result == null){
			result = "{}";
		}
		return result;
	}
	
	private boolean isDouble(String str){
		try{
			Double.parseDouble(str);
			return true;
		} catch(NumberFormatException nfe){}
		return false;
	}
}
