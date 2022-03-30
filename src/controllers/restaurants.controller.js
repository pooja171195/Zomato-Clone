const express = require('express');
const axios = require('axios')
const Restaurant = require("../models/restaurants.model")
const router =  express.Router();



router.get("",async (req, res) => {

    try {
     

       
        const rest = await Restaurant.find().lean().exec();

        return res.status(201).send(rest)

      
        
    } catch (e) {
        console.log('e:', e)
        return res.status(500).send(e.message)
    }
})


module.exports = router;

