import express from "express"
import dotenv from "dotenv"
import databaseconnection from "./config/database.js"
import cookieParser from "cookie-parser"
import userroute from "./routes/userroute.js"
import tweetroute from "./routes/tweetroute.js"
import cors from "cors"

dotenv.config({
    path:".env"
})
databaseconnection();
const app = express()

//middlewares
app.use(express.urlencoded({
    extended:true
}))
const corsoption={
    origin:"*",
    credentials:true
}
app.use(cors(corsoption))
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user",userroute)
app.use("/api/v1/tweet",tweetroute)

app.get("/hme",(req,res)=>{
    res.send("hello")
})

app.listen(process.env.PORT||8080,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})
