import { Request, RequestHandler, Response } from "express";
import blogModel from "../models/auth.model";


export const register:RequestHandler = (req:Request, res:Response) => {
    console.log('req',req);
    res.status(200).json({
        message: 'Login Success',
        status: "200"
    })
}

export const login:RequestHandler = (req:Request, res:Response) => {
    console.log('req',req);
    res.status(200).json({
        message: 'Login Success',
        status: "200"
    })
}

export const refreshToken:RequestHandler = (req:Request, res:Response) => {
    console.log('req',req);
    res.status(200).json({
        message: 'Login Success',
        status: "200"
    })
}

export const logout:RequestHandler = (req:Request, res:Response) => {
    console.log('req',req);
    res.status(200).json({
        message: 'Login Success',
        status: "200"
    })
}