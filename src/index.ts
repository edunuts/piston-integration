import { Router, Request, Response } from "express";

const route = Router();

route.get("/hello", (req: Request, res: Response) => {
    res.send("hey there");
});

export default () => {
    return route;
};
