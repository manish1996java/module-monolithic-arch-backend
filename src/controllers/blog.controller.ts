import { Request, RequestHandler, Response } from "express";
import Blog from "models/blog.model";

export const addBlog:RequestHandler = async (req,res) => { 
    let {title,description} = req.body;
    if(!title && !description){

    }
    try{
        const blog = new Blog({title:""});
        const saveBlog = await blog.save();
        res.status(201).json({
            message:"created Successfully",
            saveBlog
        })
    }catch(error){
        if(error instanceof Error){
            res.status(500).json({
                message: error.message
            })
        }

        res.status(500).json({
            message: "something went wrong"
        })
    }
}


export const getOneBlogById:RequestHandler = async (req,res) => {

}


export const updateBlog:RequestHandler = async (req,res) => {

}

export const deleteBlog:RequestHandler = async (req,res) => {
    
}

export const getAllBlog:RequestHandler = async (req,res) => {
    
}

