import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1> HELLO WORLD </h1> ");
})

app.get("/about", (req, res) => {
    res.send("<h1> ABOUT US PAGE </h1> ");
})


app.listen( port , () => {
    console.log(`Server is runnung at ${port}`);
})