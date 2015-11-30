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

import biz.webgate.darwino.coag.rest.controller.EndpointController;
import biz.webgate.darwino.coag.rest.controller.InrController;
import biz.webgate.darwino.coag.rest.controller.MediController;
import biz.webgate.darwino.coag.rest.controller.ItemController;
import biz.webgate.darwino.coag.rest.controller.UserController;
import biz.webgate.darwino.coag.rest.controller.OrderController;



import com.darwino.commons.json.binding.PojoBaseImpl;
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

			String type = context.getQueryParameterString("type");
			String action = context.getQueryParameterString("action");
			String unid = context.getQueryParameterString("unid");

			EndpointController<? extends PojoBaseImpl> ctrl = null;

			if ("inr".equalsIgnoreCase(type)) {
				ctrl = new InrController();
			} else if ("medi".equalsIgnoreCase(type)) {
				ctrl = new MediController();
			} else if ("user".equalsIgnoreCase(type)) {
				ctrl = new UserController();
			}else if ("Item".equalsIgnoreCase(type)) {
				ctrl = new ItemController();
			}else if ("Order".equalsIgnoreCase(type)) {
			ctrl = new OrderController();
		}

			if (action != null && !action.isEmpty()) {
				if (action.equals("delete")) {
					ctrl.remove(context, unid);
				} else if (action.equals("update")) {
					ctrl.update(context, unid);
				}
			} else if (context.isGet()) {
				if (unid != null) {
					ctrl.getOne(context, unid);
				} else {
					ctrl.getMany(context);
				}
			} else if (context.isPost()) {
				ctrl.create(context);
			}
		}

	}

	public CoagServiceFactory() {
		super("api/coag");
	}

	@Override
	protected void createServicesBinders(List<RestServiceBinder> binders) {
		// ///////////////////////////////////////////////////////////////////////////////
		// INFORMATION
		binders.add(new RestServiceBinder() {
			@Override
			public HttpService createService(HttpServiceContext context, String[] parts) {
				return new CoagRestService();
			}
		});
	}
}
