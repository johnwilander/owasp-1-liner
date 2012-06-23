package org.owasp.oneliner.rest.vulnerable;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.Response;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Map;

/**
 * Created by IntelliJ IDEA.
 * User: johnwilander
 * Date: 2011-12-27
 * Time: 14.40
 * To change this template use File | Settings | File Templates.
 */
@Path("/vulnerable/checkout")
@Component
public class CheckOutResources {
    private static final Log logger = LogFactory.getLog(CheckOutResources.class);

    private Purchase purchase = new Purchase();

    @POST
    @Path("/basket")
    public Response basketCheckout(
            @CookieParam("nickNameVulnerable") String nickNameCookie,
            @FormParam("nickName") String nickNameParam,
            @FormParam("product") String product
    ) {
        if(nickNameCookie!= null && !nickNameCookie.equals(nickNameParam)) {
            logger.warn("Purchase data not OK, nicknames don't match. Nickname cookie = " + nickNameCookie + ", nickname in form = " + nickNameParam);
            return Response.status(Response.Status.BAD_REQUEST).build();
        } else {
            synchronized (purchase) {
                purchase.setProduct(product);
            }
            return Response.ok().build();
        }
    }

    @POST
    @Path("/billingAddress")
    public Response billingAddress(
            @CookieParam("nickNameVulnerable") String nickNameCookie,
            @FormParam("nickName") String nickNameParam,
            @FormParam("billingAddressLine1") String billingAddressLine1,
            @FormParam("billingAddressLine2") String billingAddressLine2
    ) {
        if(nickNameCookie!= null && !nickNameCookie.equals(nickNameParam)) {
            logger.warn("Purchase data not OK, nicknames don't match. Nickname cookie = " + nickNameCookie + ", nickname in form = " + nickNameParam);
            return Response.status(Response.Status.BAD_REQUEST).build();
        } else {
            synchronized (purchase) {
                purchase.setBillingAddressLine1(billingAddressLine1);
                purchase.setBillingAddressLine2(billingAddressLine2);
            }
            return Response.ok().build();
        }
    }

    @POST
    @Path("/shippingAddress")
    public Response shippingAddress(
            @CookieParam("nickNameVulnerable") String nickNameCookie,
            @FormParam("nickName") String nickNameParam,
            @FormParam("shippingAddressLine1") String shippingAddressLine1,
            @FormParam("shippingAddressLine2") String shippingAddressLine2
    ) {
        if(nickNameCookie!= null && !nickNameCookie.equals(nickNameParam)) {
            logger.warn("Purchase data not OK, nicknames don't match. Nickname cookie = " + nickNameCookie + ", nickname in form = " + nickNameParam);
            return Response.status(Response.Status.BAD_REQUEST).build();
        } else {
            synchronized (purchase) {
                purchase.setShippingAddressLine1(shippingAddressLine1);
                purchase.setShippingAddressLine2(shippingAddressLine2);
            }
            return Response.ok().build();
        }
    }

    @POST
    @Path("/acceptTerms")
    public Response acceptTerms(
            @CookieParam("nickNameVulnerable") String nickNameCookie,
            @FormParam("nickName") String nickNameParam,
            @FormParam("acceptTerms") boolean acceptTerms
    ) {
        if(nickNameCookie!= null && !nickNameCookie.equals(nickNameParam)) {
            logger.warn("Purchase data not OK, nicknames don't match. Nickname cookie = " + nickNameCookie + ", nickname in form = " + nickNameParam);
            return Response.status(Response.Status.BAD_REQUEST).build();
        } else {
            synchronized (purchase) {
                purchase.setAcceptedTerms(acceptTerms);
            }
            return Response.ok().build();
        }
    }

    @GET
    @Path("/purchases")
    public Response getPurchase() {
        GenericEntity entity = new GenericEntity<Purchase>(purchase) {};
        return Response.ok(entity).build();
    }

    @POST
    @Path("/reset")
    public Response resetPurchases() {
        synchronized (purchase) {
            purchase = new Purchase();
        }
        return Response.ok().build();
    }

//    @XmlAccessorType(XmlAccessType.FIELD)
//    @XmlRootElement
//    public class Product {
//        private String product;
//        public Product(String product) {
//            this.product = product;
//        }
//    }

    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlRootElement
    public static class Purchase {
        String product;
        String billingAddressLine1;
        String billingAddressLine2;
        String shippingAddressLine1;
        String shippingAddressLine2;
        boolean acceptedTerms;

        public String getProduct() {
            return product;
        }

        public void setProduct(String product) {
            this.product = product;
        }

        public void setBillingAddressLine1(String billingAddressLine1) {
            this.billingAddressLine1 = billingAddressLine1;
        }

        public void setBillingAddressLine2(String billingAddressLine2) {
            this.billingAddressLine2 = billingAddressLine2;
        }

        public void setShippingAddressLine1(String shippingAddressLine1) {
            this.shippingAddressLine1 = shippingAddressLine1;
        }

        public void setShippingAddressLine2(String shippingAddressLine2) {
            this.shippingAddressLine2 = shippingAddressLine2;
        }

        public void setAcceptedTerms(boolean acceptedTerms) {
            this.acceptedTerms = acceptedTerms;
        }

        public Purchase() {}

    }
}
