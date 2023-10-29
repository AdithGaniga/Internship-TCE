const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/route");
const app = express();
app.use(express.json());
app.use("/", routes);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://testerguy09:p3VaI6M0w9Jfz6CC@cluster0.qrn7unt.mongodb.net/?retryWrites=true&w=majority');
  
}
  const kittySchema = new mongoose.Schema({
    name: String,
  });
  const Kitten = mongoose.model("Kitten", kittySchema);
  const silence = new Kitten({ name: "Silence" });
  console.log(silence.name);
  // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled


app.get("/", (req, res) => {
  res.json("running ");
});

app.listen("5555", () => {
  console.log("server is running in 5555");
});