const express = require("express");
const app = express();
var cors = require("cors");
const auth = require("./routes/auth");
const admin = require("./routes/admin");
const post = require("./routes/post");
const mongoose=require("mongoose");
const bodyParser=require("body-parser")

app.use(express.json());


app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.qo4qm.mongodb.net/Crypton?retryWrites=true&w=majority",
    { autoCreate: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Couldn't connect to Atlas: ", err.message));


//routes
app.use("/auth", auth);
app.use("/admin", admin);
app.use("/post", post);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3001, () => {
  console.log("runnning on 3001");
});
