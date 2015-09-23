package biz.webgate.darwino.coag.dao;

import biz.webgate.darwino.coag.app.AppDatabaseDef;
import biz.webgate.darwino.coag.bo.UserEntry;

import com.darwino.jsonstore.pojo.AbstractPojoStorageService;

public class UserStorageService extends AbstractPojoStorageService<UserEntry> {

	@Override
	protected UserEntry createPlainObject() {
		return new UserEntry();
	}

	@Override
	public String getStoreName() {
		return AppDatabaseDef.USER_STORE;
	}

}
