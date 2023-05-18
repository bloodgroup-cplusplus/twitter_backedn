import {Router} from "express";

const router = Router();

// Tweet Crud


// Create Tweet 

router.post("/", (req,res)=>{
    res.status(501).json({error:'Not Implemented'});
})

//List tweet


router.get('/',(req,res)=>{
    res.status(501).json({error:'Not Implemented'});
})


// Get one Tweet 
router.get('/:id',(req,res)=>{
    const{id} = req.params;
    res.status(501).json({error:`Not implmented:${id}`});
})

// update Tweet 

router.put('/id', (req,res)=>{
    const{id} = req.params;
    res.status(501).json({error:`Not Implemented :${id}`})
});


// delete tweet 

router.delete('/:id', (req,res)=>{
    const{id} = req.params;
    res.status(501).json({error:`Not Implemented:${id}`});

});


export default router;




