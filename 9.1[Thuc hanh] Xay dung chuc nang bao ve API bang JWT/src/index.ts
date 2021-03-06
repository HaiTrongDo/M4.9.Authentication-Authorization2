import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./router/router";

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
const DB_URL = 'mongodb+srv://root:Password@nodeexpressprojects.mhhzvbj.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB_URL).then(() => console.log('DB Connected!')).catch(error => console.log('DB connection error:', error.message));

app.use("/api", router);

app.listen(PORT, () => {
    console.log("App running on port: " + PORT)
})