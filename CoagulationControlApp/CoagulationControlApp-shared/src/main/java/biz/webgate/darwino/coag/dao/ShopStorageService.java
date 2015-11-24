package biz.webgate.darwino.coag.dao;

import biz.webgate.darwino.coag.app.AppDatabaseDef;
import biz.webgate.darwino.coag.bo.InrEntry;
import biz.webgate.darwino.coag.bo.ShopEntry;

import com.darwino.jsonstore.pojo.AbstractPojoStorageService;

public class ShopStorageService extends AbstractPojoStorageService<ShopEntry> {

	@Override
	protected ShopEntry createPlainObject() {
		return new ShopEntry();
	}

	@Override
	public String getStoreName() {
		return AppDatabaseDef.SHOP_STORE;
	}

}