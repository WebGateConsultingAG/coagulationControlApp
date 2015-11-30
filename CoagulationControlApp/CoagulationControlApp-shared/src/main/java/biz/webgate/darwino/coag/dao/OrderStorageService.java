package biz.webgate.darwino.coag.dao;

import biz.webgate.darwino.coag.app.AppDatabaseDef;
import biz.webgate.darwino.coag.bo.OrderEntry;

import com.darwino.jsonstore.pojo.AbstractPojoStorageService;

public class OrderStorageService extends AbstractPojoStorageService<OrderEntry> {

	@Override
	protected OrderEntry createPlainObject() {
		return new OrderEntry();
	}

	@Override
	public String getStoreName() {
		return AppDatabaseDef.ORDER_STORE;
	}

}