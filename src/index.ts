import express from "express"
import userRoutes from "./routes/userRoutes"

const app = express();

// when it receives string it doesn't parse it as string it parses it as json 

app.use(express.json());
// mount route under the applicatoin
// for all routes starting with user mount there
app.use("/user",userRoutes);


// our first api endpoint
app.get('/', (req,res)=>{
    res.send("Hello world");
});

//app.METHOD(PATH,HANDLER)


// we will have two crud endpoints one for user and one for tweets 
//

// listen to request 

app.listen(3000,()=>{
    console.log("server is running");
});