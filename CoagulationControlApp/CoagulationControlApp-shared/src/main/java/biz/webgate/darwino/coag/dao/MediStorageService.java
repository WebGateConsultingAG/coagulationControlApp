package biz.webgate.darwino.coag.dao;

import biz.webgate.darwino.coag.app.AppDatabaseDef;
import biz.webgate.darwino.coag.bo.MediEntry;

import com.darwino.jsonstore.pojo.AbstractPojoStorageService;

public class MediStorageService extends AbstractPojoStorageService<MediEntry> {

	@Override
	protected MediEntry createPlainObject() {
		return new MediEntry();
	}

	@Override
	public String getStoreName() {
		return AppDatabaseDef.MEDI_STORE;
	}

}
