const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extrended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workout", {
    useNewUrlParser: true,
});

app.use(require("./routes/apiRoutes"));

app.listen(PORT, () => {
    console.log(`Applocation running on PORT ${PORT}`);
})