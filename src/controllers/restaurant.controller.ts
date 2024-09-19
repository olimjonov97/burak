import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";

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
    res.redirect("/admin");
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("signup");
  } catch (err) {
    console.log(" Error On Signup");
    res.redirect("/admin");
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(" Error On Login");
    res.redirect("/admin")
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
     const message = err instanceof Errors ? err.message: Message.SOMETHING_WENT_WRONG
     res.send(`<script> alert("${message}" );window.locaion.replace('admin/signup') </script>`);
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
    const message = err instanceof Errors ? err.message: Message.SOMETHING_WENT_WRONG
     res.send(`<script> alert("${message}" );window.locaion.replace('admin/login') </script>`);
  }
};
restaurantController.logOut = async (req: AdminRequest, res: Response) => {
  try {
    console.log("LogOut");
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log(" Error On Logout", err);
    res.redirect("/admin");
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    if (req.session.member)
      res.send(`<script> alert("${req.session.member.memberNick}" ) </script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}" ) </script>`);
  } catch (err) {
    console.log(" Error On processLogin", err);
    res.send(err);
  }
};

export default restaurantController;
