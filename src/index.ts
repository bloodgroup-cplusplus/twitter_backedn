import express from "express"

const app = express();

// when it receives string it doesn't parse it as string it parses it as json 

app.use(express.json());


// our first api endpoint
app.get('/', (req,res)=>{
    res.send("Hello world");
});

//app.METHOD(PATH,HANDLER)




//USER CRUD ENDPOINTS 

//creating a user using post request 
app.post('/user', (req,res)=>{
    res.status(501).json({error:"Not implemented"});
})


// List users 
app.get('/user', (req,res)=>{
    res.status(501).json({error:"Not implemented"})
});


// get one user via user id from request params 
app.get('/user/:id', (req,res)=>{
    res.status(501).json({error:"Not implemented for single user"});
});


// update a user 
app.put('/user/:id', (req,res)=>{
    const{id} = req.params; 
    res.status(501).json({error:`Not implmented:${id}`})

})

// delete user 
app.delete('user/:id', (req,res)=>{
    const{id} = req.params ; 
    res.status(501).json({error:`Not implemented :${id}`});
})



// listen to request 

app.listen(3000,()=>{
    console.log("server is running");
});