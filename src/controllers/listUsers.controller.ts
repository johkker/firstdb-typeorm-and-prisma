import { Request, Response } from "express";
import { listUsersSVC } from "../services";

const listUsersCTRL = (req: Request, res: Response) => {
  try {
    const users = listUsersSVC();
    return res.status(200).send(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default listUsersCTRL;
