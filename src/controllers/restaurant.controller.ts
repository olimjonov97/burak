import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
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
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) {
    console.log(" Error On Signup");
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log(" Error On Login");
  }
};

restaurantController.processSignUp = async (req: Request, res: Response) => {
  try {
    console.log("processSignUp");
    console.log("body ", req.body);
// TODO SESSIONS Authentication
    const newMember: MemberInput = req.body;
    const memberService = new MemberService();
    newMember.memberType = MemberType.RESTAURANT;

    const result = await memberService.processSignUp(newMember);
    res.send(result);
  } catch (err) {
    console.log(" Error On processSignUp", err);
    res.send(err);
  }
};
restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body=> ", req.body);
    const input: LoginInput = req.body;
    const memberService = new MemberService();
    const result = await memberService.processLogin(input);
    // TODO SESSIONS Authentication

    res.send(result);
  } catch (err) {
    console.log(" Error On processLogin", err);
    res.send(err);
  }
};

export default restaurantController;
