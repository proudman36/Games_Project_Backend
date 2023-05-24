const express = require('express');
const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
router.use(express.json());
const cors = require('cors')


const path = 'game'

const corsOptions = {
    origin: 'http://localhost:4200'
}

const corsMiddleware = cors(corsOptions)


router.post(`/${path}`, corsMiddleware, async (req,res)=>{
    try {
        const {name,studio,release_year} = req.body;
        const game =  await prisma.game.create({
            data: {
                name: name,
                studio:studio,
                release_year:release_year
            }
        });
        res.json({game}); 
    } catch (error) {
        res.json({msg: "There has been an error"})
    }
    
})

router.get(`/${path}`,corsMiddleware,async (req,res)=>{
    try {
        const games = await prisma.game.findMany();
        res.json({games})
    } catch (error) {
       res.json({msg: "There has been an error"}) 
    }
    
})

router.get(`/${path}/:id`,corsMiddleware,async (req,res)=>{
    try {
        const id = req.params.id;
        const game = await prisma.game.findUnique({
            where:{
                game_id:Number(id)
            }
        })
        res.json({game})
        
    } catch (error) {
        res.json({msg:"There has been an error"})
    }
})

router.put(`/${path}`,corsMiddleware, async (req,res)=>{
    try {
        const {game_id,name,studio,release_year} = req.body;
        const game = await prisma.game.update({
        where:{
            game_id: game_id
        },
        data:{
            name: name,
            studio: studio,
            release_year:release_year
        }
    })
    res.json({game});
    } catch (error) {
        res.json({msg:"There has been an error"});
    }
    
})

router.delete(`/${path}/:id`,corsMiddleware, async (req,res)=>{
    try {
        const id = req.params.id;
        const game = await prisma.game.delete({
        where:{
            game_id: Number(id)
        }
    })
    res.json({game})
    } catch (error) {
        res.json({msg:"There has been an error."})
    }
    
})

module.exports = router;