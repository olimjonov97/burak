import { T } from "../libs/types/common";
import { Request, Response } from "express";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
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

export default restaurantController;