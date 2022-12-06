const mongoose = require("mongoose");
require("dotenv").config();

//const uri = "mongodb+srv://testdb:testdb@<your-cluster-url>/test?retryWrites=true&w=majority";

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/googlebooks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
