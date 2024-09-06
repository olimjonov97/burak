import { T } from "../libs/types/common";
import { Request, Response } from "express";

const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
  try {
    res.send("You are on HomePage");
  } catch (err) {console.log(" Error On GOHOME")}
};
memberController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log(" Error On Login");
  }
};
memberController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) {
    console.log(" Error On Signup");
  }
};

export default memberController;