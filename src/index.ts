import express from "express"

const app = express();

// when it receives string it doesn't parse it as string it parses it as json 

app.use(express.json());


// our first api endpoint
app.get('/', (req,res)=>{
    res.send("Hello world");
});

// listen to request 

app.listen(3000,()=>{
    console.log("server is running");
})