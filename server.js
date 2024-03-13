const express = require("express");
const cors = require("cors");
const { DB_NAME } = require("./constants");

// const userlogin = require("./routes/userlogin.js");
// const userregister = require("./routes/userregister.js");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");




const app = express();

// Cross Origin Resource Sharing
app.use(cors());



(async () => {
  try {
    await mongoose.connect(`mongodb+srv://harshdhabekar20001:Abc123@cluster0.yktqw4f.mongodb.net/${DB_NAME} `, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("ERROR: ", error);
  }
})();



// app.use(express.json());

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// require("./models/index.js");

// Backend routes
// app.use("/api/register", userregister);
// app.use("/api/auth", userlogin);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
