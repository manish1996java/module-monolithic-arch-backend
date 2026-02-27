import { Request, Response, RequestHandler } from "express";


export const login:RequestHandler = (req:Request, res:Response) => {
    console.log('req',req);
    res.status(200).json({
        message: 'Login Success',
        status: "200"
    })
}

export const createUser:RequestHandler = (req:Request, res:Response) => {
    console.log('req',req);
    res.status(200).json({
        message: 'Login Success',
        status: "200"
    })
}

export const getUsers:RequestHandler = (req:Request, res:Response) => {
    console.log('req',req);
    res.status(200).json({
        message: 'Login Success',
        status: "200"
    })
}

export const getUserById:RequestHandler = (req:Request, res:Response) => {
    console.log('req',req);
    res.status(200).json({
        message: 'Login Success',
        status: "200"
    })
}

export const updateUser:RequestHandler = (req:Request, res:Response) => {
    console.log('req',req);
    res.status(200).json({
        message: 'Login Success',
        status: "200"
    })
}


export const deleteUser:RequestHandler = (req:Request, res:Response) => {
    console.log('req',req);
    res.status(200).json({
        message: 'Login Success',
        status: "200"
    })
}




