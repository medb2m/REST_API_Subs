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
router.get('/:id', (req,res) => {
    res.send(req.params.id) 
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
router.patch('/:id', (req,res) => {
    
})
// Deleting One 
router.delete('/:id', (req,res) => {
    
})

module.exports = router