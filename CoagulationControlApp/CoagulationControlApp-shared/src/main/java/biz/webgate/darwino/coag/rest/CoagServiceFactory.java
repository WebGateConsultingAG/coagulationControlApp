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

import biz.webgate.darwino.coag.rest.controller.InrController;
import biz.webgate.darwino.coag.rest.controller.MediController;
import biz.webgate.darwino.coag.rest.controller.UserController;

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

			if (context.isGet()) {
				
				String unid = context.getQueryParameterString("unid");
				
				if ( unid != null){
					// get one
					if ("inr".equalsIgnoreCase(type)) {
						InrController ic = new InrController();
						ic.getOne(context, unid);
					} else if ("medi".equalsIgnoreCase(type)) {
						MediController mc = new MediController();
						mc.getOne(context, unid);
					} else if ("user".equalsIgnoreCase(type)) {
						UserController uc = new UserController();
						uc.getOne(context, unid);
					}
				} else {
					//query
					if ("inr".equalsIgnoreCase(type)) {
						System.out.println("query INR");
						InrController ic = new InrController();
						ic.getMany(context);
					} else if ("medi".equalsIgnoreCase(type)) {
						MediController mc = new MediController();
						mc.getMany(context);
					} else if ("user".equalsIgnoreCase(type)) {
						UserController uc = new UserController();
						uc.getMany(context);
					}
					
					
				}

			} else if (context.isPost()) {
				if ("inr".equalsIgnoreCase(type)) {

					InrController ic = new InrController();
					ic.create(context);

				} else if ("medi".equalsIgnoreCase(type)) {

					MediController mc = new MediController();
					mc.create(context);

				} else if ("user".equalsIgnoreCase(type)) {

					UserController uc = new UserController();
					uc.create(context);
				}

			} else if (context.isDelete()){
				//TODO: implement remove fn on controller and wire up
				
				
			} else if ( context.isPut()){
				//TODO: implement update fn on controller and wire up
				
				
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
			public HttpService createService(HttpServiceContext context,
					String[] parts) {
				return new CoagRestService();
			}
		});
	}
}
