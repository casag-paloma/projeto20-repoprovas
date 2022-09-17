import { NextFunction, Request, Response } from "express";

export function errorHandler(
    err: Error| any,
    req: Request,
    res: Response,
    next: NextFunction
){
    console.log(err);

    return res.sendStatus(500);
}
