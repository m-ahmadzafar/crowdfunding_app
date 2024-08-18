const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    title: String,
    description: String,
    amountRaised: Number,
    goal: Number,
    contributors: Number,
    paymentMethods: [String],
    duration: Number,
    type: [String],
    img_URL: String,
    vid_URL: String,
    rewards: String,
});

module.exports = mongoose.model('Campaign', CampaignSchema);
