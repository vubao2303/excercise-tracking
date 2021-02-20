const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const db = require("./seeders");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/myFirstDatabase", { useNewUrlParser: true });
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/myFirstDatabase',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Requiring routes
require("./routes/html-routes.js")(app);
app.use(require("./routes/api-routes.js"));

// code here 



// db.User.find({})

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});