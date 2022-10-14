const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "Jr5SADw8dJ010Yziepxf3akKG",
    appSecret: "qptnid3T3qrSFsqxznJHT2EIFPufmvlNBVDzQusPb6VwnfVxQi",
    accessToken: "3287411117-TtAYq01EoPNc9NAQ4unIk2PryI56tE3pcCOQZkP",
    accessSecret: "X4WoA0UwPzcSwyPvdYijUNfk664oq4I59OgJGjquO4c3o"
})

const rwClient = client.readWrite

module.exports = rwClient