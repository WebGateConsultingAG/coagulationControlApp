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

package biz.webgate.darwino.coag.app;

import com.darwino.commons.json.JsonException;
import com.darwino.commons.util.StringUtil;
import com.darwino.jsonstore.impl.DatabaseFactoryImpl;
import com.darwino.jsonstore.meta._Database;
import com.darwino.jsonstore.meta._Store;

/**
 * Database Definition.
 * 
 * @author Philippe Riand
 */
public class AppDatabaseDef extends DatabaseFactoryImpl {

	public static final int DATABASE_VERSION = 6;
	public static final String DATABASE_NAME = "coag";
	public static final String INR_STORE = "InrStore";
	public static final String MEDI_STORE = "MediStore";
	public static final String USER_STORE = "UserStore";
	public static final String SHOP_STORE = "ShopStore";

	@Override
	public int getDatabaseVersion(String databaseName) throws JsonException {
		return DATABASE_VERSION;
	}

	@Override
	public _Database loadDatabase(String databaseName) throws JsonException {
		if (!StringUtil.equals(databaseName, DATABASE_NAME)) {
			return null;
		}
		_Database db = new _Database(DATABASE_NAME, "Coagulation Control",
				DATABASE_VERSION);

		db.setReplicationEnabled(true);
		db.setInstanceEnabled(false);

		_Store store = db.addStore(INR_STORE);
		store.setLabel("INR Store");
		_Store store1 = db.addStore(MEDI_STORE);
		store1.setLabel("MEDI Store");
		_Store store2 = db.addStore(USER_STORE);
		store2.setLabel("USER Store");
		_Store store3 = db.addStore(SHOP_STORE);
		store3.setLabel("SHOP Store");
		// store.setFtSearchEnabled(true);

		// // Search the whole document (all fields)
		// _FtSearch ft = (_FtSearch) store.setFTSearch(new _FtSearch());
		// ft.setFields("$");

		return db;
	}
}
