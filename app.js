import express from "express";
import cookieParser from "cookie-parser";
import dbConnection from "./DB/connection.js";
import bodyParser from "body-parser";
import { addUser } from "./controller/userController.js";
import { getCreatePage } from "./controller/userController.js";

const app = express();
app.set("view-engine", "ejs");

app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.get("/", getCreatePage);
app.post("/addUser", addUser);

dbConnection();

app.listen(8081, () => console.log("app running on port 8081"));
