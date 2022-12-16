const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
//New Route

app.get("/", (req, res) => {
    res.render("New");
});


//Create Route
app.post("/logs", (req,res) => {
    Log.create(req.body, (error, createdLog)=> {
        res.send(req.body);
    })
   
});





app.listen(3000, () => {
    console.log("Listening");
});
