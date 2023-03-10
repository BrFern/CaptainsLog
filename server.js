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
app.get("/logs", (req, res) => {
    logs.find({}, (error, allLogs) => {
        res.render("Index", {
            logs: allLogs,
        });
    });
});

//New Route

app.get('/logs/new', (req, res) => {
    res.render('New')
})

//Delete Route
app.delete("/logs/:id", (req, res) => {
    Logs.findByIdAndRemove(req.params.id, req.body, (err, deletedLogs) => {
        console.log(updatedLogs)
        res.redirect(`/logs`);
    });
});

//Update Route
app.put("/logs/:id", (req, res) => {
    Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLogs) => {
        console.log(updatedLogs)
        res.redirect(`/logs/${req.params.id}`);
    });
});


//Create Route
// app.post("/logs", (req,res) => {
//     Logs.create(req.body, (error, createdLog)=> {
//         res.redirect('/logs');
//     })
   
// });

app.post('/logs', (req, res) => {
    //DESTRUCTURING to take the request body and save it's properties to individual varaibles 
    // this is so I can process the checkbox
    //curly braces is not creating an object, but telling js to take these properties and assign them to a new
    const {title, entry, shipIsBroken} = req.body
    const logBody = {
        title,
        entry,
        shipIsBroken : !shipIsBroken? false: true
    }
    Logs.create(logBody, (error, createdLog) =>{
        res.redirect('/logs')
    })
})


//Edit Route
app.get("/logs/:id/edit", (req,res) => {
    Logs.findById(req.params.id, (err, foundLogs) => {
        res.render("Edit", {
            logs: foundLogs
        });
    });
});

//Show Route
app.get("/logs/:id", (req, res) => {
    Logs.findById(req.params.id)
    res.render("Show")
});

app.listen(3000, () => {
    console.log("Listening");
});
