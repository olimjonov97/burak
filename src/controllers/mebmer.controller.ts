// REACT
import { json, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

const memberController: T = {};
const memberService = new MemberService();
memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("Signup");
    // console.log("body ", req.body);
    //TODO TOKENS Authentication
    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);

    res.json({ member: result });
    console.log({ member: result });
  } catch (err) {
      console.log(" Error On SignUp", err);
    if(err instanceof Errors)res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard)
  }
};
memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    console.log("body=> ", req.body);
    const input: LoginInput = req.body,
      result = await memberService.login(input);
    //TODO TOKENS Authentication

    res.json({ member: result });
  } catch (err) {
    console.log(" Error On Login", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
