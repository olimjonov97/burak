import express from "express";
import memberController from "./controllers/mebmer.controller";
import uploader from "./libs/utils/uploader";
const router = express.Router();

/*Member*/
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail
);
router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single("memberImage"),
  memberController.updateMember
);

/*Product*/

/*Order */

export default router;
