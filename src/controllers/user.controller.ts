import { Request, Response, RequestHandler } from "express";


export const login:RequestHandler = (req:Request, res:Response) => {
    console.log('req',req);
    res.status(200).json({
        message: 'Login Success',
        status: "200"
    })
}

