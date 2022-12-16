const express = require('express');
const app = express();



app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
//New Route

app.get("/", (req, res) => {
    res.render("New");
});






app.listen(3000, () => {
    console.log("Listening");
});
