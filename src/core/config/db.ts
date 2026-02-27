import mongoose from "mongoose"

let isConnected = false;

export const connectDB = async () => {
    if(isConnected){
        console.log("DB is alread connected");
        return;
    }

    const dbURI = String(process.env.DB_CONNECTION_URL);

    try{
        const connection = await mongoose.connect(dbURI);
        isConnected = true;
        console.log("connected successfully");
        return connection;
    }catch(err){
        console.log("connection fail",err);
        process.exit(1);
    }
}