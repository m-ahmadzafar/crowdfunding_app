const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());
require('dotenv').config();

const mongoString = process.env.MONGO_KEY;
const PORT =  3000;
//models
const User = require("./models/User");
const Campaign = require("./models/Campaign");


//abdullah db
mongoose
  .connect(mongoString)
.then(() => {
      app.listen(PORT, () => {
        console.log("Node API running");

      });
    console.log("Connected to the Database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });


//routers


app.get("/campaigns/", (req,res)=> {
    res.send("twat");
})

app.get('/campaigns/:id', async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        if (!campaign) {
            return res.status(404).send({ message: 'Campaign not found' });
        }
        res.json(campaign);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving campaign', error: error.message });
    }
});