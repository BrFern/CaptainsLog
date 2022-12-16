require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Logs = require("./models/logs")



app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//MIDDLEWARE

// app.use(express.urlencoded({ extended: false }));

// app.use(methodOverride("_method"));

//Connection to Mongoose/Remove Deprication warnings
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//Index
app.get("/index", (req, res) => {
    Logs.find({}, (error, allLogs) => {
        res.render("Index", {
            logs: allLogs,
        });
    });
});



//New Route

app.get("/", (req, res) => {
    res.render("New");
});


//Create Route
app.post("/logs", (req,res) => {
    Logs.create(req.body, (error, createdLog)=> {
        res.send(req.body);
    })
   
});

app.listen(3000, () => {
    console.log("Listening");
});
