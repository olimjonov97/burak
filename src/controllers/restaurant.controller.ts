import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("GoHome")
    //LOGIC
    //SERVICE MODEL
    //...
       //resposnse types
       /* send | json |redirect| end |  render*/
    res.send("You are on HomePage");
  } catch (err) {console.log(" Error On GOHOME")}
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    
    res.send("Login Page");
  } catch (err) {
    console.log(" Error On Login");
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) { 
    console.log(" Error On Signup");
  }
};
restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("processLogin");
  } catch (err) { 
    console.log(" Error On processLogin");
  }
};
restaurantController.processSignUp = (req: Request, res: Response) => {
  try {
    console.log("processSignUp");
    res.send("DONE");
  } catch (err) {
    console.log(" Error On processSignUp");
  }
};

export default restaurantController;