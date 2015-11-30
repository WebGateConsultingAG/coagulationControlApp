package biz.webgate.darwino.coag.dao;

import biz.webgate.darwino.coag.app.AppDatabaseDef;
import biz.webgate.darwino.coag.bo.ItemEntry;

import com.darwino.jsonstore.pojo.AbstractPojoStorageService;

public class ItemStorageService extends AbstractPojoStorageService<ItemEntry> {

	@Override
	protected ItemEntry createPlainObject() {
		return new ItemEntry();
	}

	@Override
	public String getStoreName() {
		return AppDatabaseDef.ITEM_STORE;
	}

}