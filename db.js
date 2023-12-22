const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// const User = require('./models/user');

mongoose.connect(process.env.DB_LOCAL_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


