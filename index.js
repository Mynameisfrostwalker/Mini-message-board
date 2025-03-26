const express = require("express");
const dotenv = require("dotenv");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const messageRouter = require("./routes/messageRouter")

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.use("/messages", messageRouter);
app.use("/new", newMessageRouter);
app.use("/", indexRouter);


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500 || err.statusCode).send(err.message);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);       
});
