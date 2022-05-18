import { Request, Response } from "express";
import { createUserSVC } from "../services";

const createUserCTRL = (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = createUserSVC({ name, email, password });

    return res.status(200).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default createUserCTRL;
