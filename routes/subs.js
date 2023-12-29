const express = require('express')
const router = express.Router()
const Sub = require('../models/sub')

// Getting all 
router.get('/', async (req,res) => {
    try{
        const subs = await Sub.find()
        res.status(200).json(subs)
    } catch (err) {
        res.status(500).json({ message : err.message})
    }
})
// Getting One
router.get('/:id', getSub, (req,res) => {
    res.json(res.sub) 
})
// Creating One 
router.post('/', async (req,res) => {
    const sub = new Sub({
        name : req.body.name,
        subscribedToChanel : req.body.subscribedToChanel
    })
    try {
        const newSub = await sub.save()
        res.status(201).json(newSub)
    } catch (err) {
        res.status(400).json({ message : err.message})
    }
})
// Updating One
router.patch('/:id', getSub, async (req,res) => {
    if (req.body.name != null){
        res.sub.name = req.body.name
    }
    if (req.body.subscribedToChanel != null){
        res.sub.subscribedToChanel = req.body.subscribedToChanel
    }
    try {
        const updatedSub = await res.sub.save()
        res.json(updatedSub)
    } catch (err) {
        res.status(400).json({ message : err.message})
    }
})
// Deleting One 
router.delete('/:id', getSub, async (req,res) => {
    try {
        await res.sub.deleteOne()
        res.json({message : `${res.sub.name} Deleted !`})
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

// Middleware to get subscriber by ID
async function getSub (req, res, next) {
    let sub
    try {
        sub = await Sub.findById(req.params.id)
        if (sub == null) {
            return res.status(404).json({ message : 'Cannot find subscriber'})}
    } catch (err) {
        return res.status(500).json({message : err.message})
    }
    res.sub = sub
    next()
}

module.exports = router