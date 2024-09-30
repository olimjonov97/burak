import { T } from "../libs/types/common";
import { NextFunction, Request, Response } from "express";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";

const memberService = new MemberService();
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("GoHome");
    console.log(req.body, "Home page");
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
    console.log("getSign UP executed")
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
    res.redirect("/admin");
  }
};

restaurantController.processSignUp = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    const file = req.file;
    console.log("processSignUp executed");

    if (!file)
      throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
    const newMember: MemberInput = req.body;
    newMember.memberImage = file?.path;

    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignUp(newMember);

    req.session.member = result;

    req.session.save(function () {
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.log(" Error On processSignUp", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}" ); window.location.replace('/admin/signup') </script>`
    );
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
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.log(" Error On processLogin", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}" ); window.location.replace('/admin/login') </script>`
    );
  }
};
restaurantController.logOut = async (req: AdminRequest, res: Response) => {
  try {
    console.log("LogOut");
    // console.log("req.session", req.session);
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log(" Error On Logout", err);
    res.redirect("/admin");
  }
};
restaurantController.getUsers = async (req: Request, res: Response) => {
  try {
    console.log("getUsers");

    const result = await memberService.getUsers();
    res.render("users", { users: result });
    console.log("result", result);
    // res.render("users", { users: result });
  } catch (err) {
    console.log(" Error On getUsers", err);
    res.redirect("/admin/login");
  }
};

restaurantController.updateChosenUser = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenUser");
    const result = await memberService.updateChosenUser(req.body);

    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log(" Error On updateChosenUser", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
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
restaurantController.verifyRestaurant = (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member = req.session.member;
    next();
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/login'); </script>`
    );
  }
};

export default restaurantController;
