import { Router } from "express";
import { createUserCTRL, listUsersCTRL } from "../controllers";

const routes = Router();

routes.post("/signup", createUserCTRL);
routes.get("", listUsersCTRL);

export default routes;
