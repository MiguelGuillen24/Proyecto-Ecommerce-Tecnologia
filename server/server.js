require("dotenv").config();
const express = require("express");
const app = express();

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is up and listening on port ${port}`);
});