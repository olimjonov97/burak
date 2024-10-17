// REACT
import { json, NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { ExtendedRequest, LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";

const memberController: T = {};

const memberService = new MemberService();

const authService = new AuthService();

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("Signup");

    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input),
      //TODO TOKENS Authentication
      token = await authService.createToken(result);
    console.log("sign up token", token);
    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 3600 * 1000,
      httpOnly: false,
    });

    res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
  } catch (err) {
    console.log(" Error On SignUp", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
      result = await memberService.login(input),
      //TODO TOKENS Authentication
      token = await authService.createToken(result);
    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 3600 * 1000,
      httpOnly: false,
    });

    res.status(HttpCode.OK).json({ member: result, accessToken: token });
  } catch (err) {
    console.log(" Error On Login", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
memberController.logout=(req:ExtendedRequest, res:Response)=>{
try {
  console.log("logout")
  res.cookie("accessToken",null,{maxAge:0,httpOnly:true});
  res.status(HttpCode.OK).json({logout:true})
} catch (err) {
  console.log(" Error On logout", err);
  if (err instanceof Errors) res.status(err.code).json(err);
  else res.status(Errors.standard.code).json(Errors.standard);
}

}
memberController.verifyAuth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {

    const token = req.cookies["accessToken"]; //this is obj and we get the value by dynamic call
    console.log("cookies", req.cookies);
    if (token) req.member = await authService.checkAuth(token);
    if (!req.member)
      throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);
    console.log("member", req.member);
   next();
  } catch (err) {
    console.log(" Error On verifyAuth", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
memberController.retrieveAuth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies["accessToken"]; //this is obj and we get the value by dynamic call
    if (token) req.member = await authService.checkAuth(token);
    next();
  } catch (err) {
    console.log(" Error On retrieveAuth", err);
    next();
  }
};

export default memberController;
