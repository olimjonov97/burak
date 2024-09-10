import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("GoHome");
    //LOGIC
    //SERVICE MODEL
    //...
    //resposnse types
    /* send | json |redirect| end |  render*/
    res.send("You are on HomePage");
  } catch (err) {
    console.log(" Error On GOHOME");
  }
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
restaurantController.processSignUp = async (req: Request, res: Response) => {
  try {
    console.log("processSignUp");
    console.log("body ", req.body);

    const newMember: MemberInput = req.body;
    const memberService = new MemberService();
    newMember.memberType = MemberType.RESTAURANT;  

    const result = await memberService.processSignUp(newMember);
    res.send(result);
  } catch (err) {
    console.log(" Error On processSignUp", err);
    res.send(err)
  }
};

export default restaurantController;
