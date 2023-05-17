import { Router } from "express";

const router = Router();
//USER CRUD ENDPOINTS 

//creating a user using post request 
router.post('/user', (req,res)=>{
    res.status(501).json({error:"Not implemented"});
})


// List users 
router.get('/user', (req,res)=>{
    res.status(501).json({error:"Not implemented"})
});


// get one user via user id from request params 
router.get('/user/:id', (req,res)=>{
    res.status(501).json({error:"Not implemented for single user"});
});


// update a user 
router.put('/user/:id', (req,res)=>{
    const{id} = req.params; 
    res.status(501).json({error:`Not implmented:${id}`})

})

// delete user 
router.delete('user/:id', (req,res)=>{
    const{id} = req.params ; 
    res.status(501).json({error:`Not implemented :${id}`});
})












export default router;