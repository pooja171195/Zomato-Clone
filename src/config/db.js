const mongoose = require('mongoose')


module.exports = () =>{


    return mongoose.connect(
        "mongodb+srv://suraj:suraj_123@cluster0.qbfvr.mongodb.net/zomato?retryWrites=true&w=majority"
    )
}

