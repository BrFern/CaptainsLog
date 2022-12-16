require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Logs = require("./models/logs");
const logs = require('./models/logs');




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
    logs.find({}, (error, allLogs) => {
        res.render("Index", {
            logs: allLogs,
        });
    });
});

//Show Route
app.get("/logs", (req, res) => {
    logs.findById(req.params.id)
    res.render("Show")
});

//New Route

app.get("/logs/new", (req, res) => {
    res.render("New");
});


//Create Route
app.post("/logs", (req,res) => {
    Logs.create(req.body, (error, createdLog)=> {
        res.send(createdLog);
    })
   
});

//Edit Route
app.get("/logs/:id/edit", (req,res) => {
    Logs.findById(req.params.id, (err, found) => {
        res.render("/logs/Edit", {
            logs: foundLogs
        });
    });
});

//Update Route
app.put("/logs/:id", (req, res) => {
    Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLogs) => {
        console.log(updatedLogs)
        res.redirect(`/logs/${req.params.id}`);
    });
});

//Delete Route
app.delete("/logs/:id", (req, res) => {
    Logs.findByIdAndremove(req.params.id, req.body, (err, deletedLogs) => {
        console.log(updatedLogs)
        res.redirect(`/logs`);
    });
});


app.listen(3000, () => {
    console.log("Listening");
});
