const express = require("express");

const path = require("path");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello");
});
console.log("sachin is here")
// app.get("/products", (req, res) => {
//   res.send([
//     {
//       category: "men's clothing",
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       id: 1,
//       image: "abc",
//       price: 109.95,
//       rating: { rate: 3.9, count: 120 },
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     },
//     {
//       category: "men's clothing",
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       id: 2,
//       image: "",
//       price: 109.95,
//       rating: { rate: 3.9, count: 120 },
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     },
//     {
//       category: "men's clothing",
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       id: 3,
//       image: "",
//       price: 109.95,
//       rating: { rate: 3.9, count: 120 },
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     },
//     {
//       category: "men's clothing",
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       id: 4,
//       image: "",
//       price: 109.95,
//       rating: { rate: 3.9, count: 120 },
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     },
//   ]);
// });

app.listen(process.env.PORT || 8080, () => {
  console.log("Server Started");
});
