// import lib
import express from "express";

// import custom modules 
import {fun1, fun2, fun3} from "@helpers";
import controller from "@controllers/controller"

// create new express app 
const app = express();

// routing 
app.get("/", fun1, fun2, fun3, controller);


// start server 
app.listen(3000, _ => console.log("Server up and running on 3000"));