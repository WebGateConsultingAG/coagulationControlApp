package biz.webgate.darwino.coag.rest.controller;

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

	
	
}
