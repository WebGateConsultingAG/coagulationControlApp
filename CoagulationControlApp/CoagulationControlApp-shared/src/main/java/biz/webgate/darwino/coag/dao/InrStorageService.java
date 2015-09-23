package biz.webgate.darwino.coag.dao;

import biz.webgate.darwino.coag.app.AppDatabaseDef;
import biz.webgate.darwino.coag.bo.InrEntry;

import com.darwino.jsonstore.pojo.AbstractPojoStorageService;

public class InrStorageService extends AbstractPojoStorageService<InrEntry> {

	@Override
	protected InrEntry createPlainObject() {
		return new InrEntry();
	}

	@Override
	public String getStoreName() {
		return AppDatabaseDef.INR_STORE;
	}

}
