const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://ashu:1234@nodeexpress.fuqyyju.mongodb.net/Ecart-testing?retryWrites=true&w=majority")
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));
