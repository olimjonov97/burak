import express from "express";
import restaurantController from "./controllers/restaurant.controller";

const routerAdmin = express.Router();

/* Restaurant */

routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignUp);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);


/* Product*/ 


/* User*/
export default routerAdmin;
