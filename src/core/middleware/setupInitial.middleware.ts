import path from "path";
import express,{Express} from "express";
import helmet from "helmet";
import { config } from 'dotenv'

export const setupInitialMiddlewares = (app:Express) => {
    config({path:path.join(process.cwd(),".env")})
    app.use("/static", express.static(path.join(process.cwd(),"public")));
    app.use(express.json());
    app.use(helmet());
}