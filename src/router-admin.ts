import express from "express";
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";

const routerAdmin = express.Router();

/* Restaurant */

routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignUp);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin.get("/logout", restaurantController.logOut);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);
/* Product*/ 
routerAdmin.get("/product/all", productController.getAllProducts);
routerAdmin.post("/product/create", productController.createNewProduct);
routerAdmin.post("/product/:id", productController.updateChosenProduct);

/* User*/
export default routerAdmin;
