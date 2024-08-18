const express = require("express");
const cors = require("cors");
// const path = require("path");

const mongoose = require("mongoose");
// const { mongoUrl } = require("./keys");

const app = express();
const port = 5000;

app.use(cors());

// require('./models/admin')
require("./modals/posts");

app.use(express.json());
// app.use(require('./routes/activities'))
app.use(require("./routes/activity"));

mongoose
  .connect("mongodb+srv://anujsinghjee1:o9JquRtaSE1808dK@cluster0.wbtvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then((data) => {
    console.log(`Mongodb Connected with Server : ${data.connection.host}`);
  })
  .catch((err) => {
    console.log("some errrrrror" + err);
  });

app.listen(port, () => {
  console.log("Server is running on " + port);
});

// ----------------------------------------------------------------------

// mongoose.connect(mongoUrl);

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });

// mongoose.connection.on("error", () => {
//   console.log("Not Connected to mongDB");
// });

// app.get('/' , (req,res)=> {
//     console.log("Hello")
//     res.json("Hello shubh")

// })
