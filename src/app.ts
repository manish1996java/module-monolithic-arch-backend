import express, { Express, Request, Response } from "express";
import routes from "./routing/index";
import { startServer } from "./server/startServer";
import { setupInitialMiddlewares } from "./middlerware/setupInitial.middleware";
import { connectDB } from "@config/db";

const app: Express = express();

setupInitialMiddlewares(app);

const port = process.env.PORT || 3000;

app.get("/",(req:Request,res:Response,next)=>{
  res.status(200).send({
    message:"server is running"
  })
})
app.use("/", routes);


const appStart = async () =>{
  await connectDB();
  startServer(app,port);
}

appStart();