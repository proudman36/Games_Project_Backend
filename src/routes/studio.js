const express = require('express')
const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
router.use(express.json());

const path = 'studio'

router.post(`/${path}`, async (req,res)=>{
    try {
        const {name,games,foundation_year} = req.body;
    const studio = await prisma.studio.create({
        data: {
            name:name,
            games:games,
            foundation_year:foundation_year
        }
    });
    res.json({studio})
    } catch (error) {
        res.json({msg:"There has been an error"})
    }
    
})

router.get(`/${path}`,async (req,res)=>{
    try {
        const studios = await prisma.studio.findMany();
        res.json({studios})
    } catch (error) {
        res.json({msg:"There has been an error"})
    }
   
})

router.get(`/${path}/:id`, async (req,res)=>{
    try {
        const id = req.params.id;
        const studio = await prisma.studio.findUnique({
        where:{
            studio_id: Number(id)
        }
    })
    res.json({studio});
    } catch (error) {
        res.json({msg:"There has been an error."})
    }
    
})

router.put(`/${path}/`, async (req,res)=>{
    try {
        const {studio_id,name,games,foundation_year} = req.body;
        const studio = await prisma.studio.update({
        where:{
            studio_id: studio_id
        },
        data:{
            name:name,
            games:games,
            foundation_year:foundation_year
        }
    })
    res.json({studio});
    } catch (error) {
        res.json({msg:"There has been an error"});
    }
})

router.delete(`/${path}/:id`, async (req,res)=>{
    try{
    const id = req.params.id;
    const studio = await prisma.studio.delete({
        where:{
            studio_id: Number(id)
        }
    })
    res.json({studio});
}
    catch{
        res.json({msg:"There has been an error."})
}
})

module.exports = router;