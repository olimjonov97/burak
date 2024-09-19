import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { Message } from "../libs/Errors";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("GoHome");
    //LOGIC
    //SERVICE MODEL
    //...
    //resposnse types
    /* send | json |redirect| end |  render*/
    res.render("home");
  } catch (err) {
    console.log(" Error On GOHOME");
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("signup");
  } catch (err) {
    console.log(" Error On Signup");
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(" Error On Login");
  }
};

restaurantController.processSignUp = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processSignUp");
    console.log("body ", req.body);
    const newMember: MemberInput = req.body;
    const memberService = new MemberService();
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignUp(newMember);
    // TODO SESSIONS Authentication

    req.session.member = result;

    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log(" Error On processSignUp", err);
    res.send(err);
  }
};
restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processLogin");
    console.log("body=> ", req.body);
    const input: LoginInput = req.body;
    const memberService = new MemberService();
    const result = await memberService.processLogin(input);
    // TODO SESSIONS Authentication
    req.session.member = result;

    req.session.save(function () {
      res.send(result);
    });
    
  } catch (err) {
    console.log(" Error On processLogin", err);
    res.send(err);
  }
};
restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession"); 
 if(req.session.member)res.send(`<script> alert("${req.session.member.memberNick}" ) </script>`);
  else res.send(`<script> alert("${ Message.NOT_AUTHENTICATED}" ) </script>`);
  } catch (err) {
    console.log(" Error On processLogin", err);
    res.send(err);
  }
};

export default restaurantController;
;