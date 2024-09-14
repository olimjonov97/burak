import express from "express";
import memberController from "./controllers/mebmer.controller";

const router = express.Router();

router.post("/login", memberController.login);
router.post("/signup", memberController.signup);

export default router;
 