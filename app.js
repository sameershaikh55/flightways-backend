const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("IT WORKED");
});
app.get("/new", function (req, res) {
  res.send("New also worked");
});

app.listen(process.env.PORT || 5000);
module.exports = app;


// const express = require("express");
// require("dotenv").config();
// const { Duffel } = require("@duffel/api");

// const app = express();

// const duffel = new Duffel({
//   // Store your access token in an environment variable, keep it secret and only readable on your server
//   token: "duffel_live_phBmqeLbtMWfCQpsrHLw6zxXEMZMZ_-VCuG5u0Vhc1Y",
// });

// app.get("/", (req, res) => {
//   res.send("Hello it is working");
// });

// app.get("/flights-list", async (req, res) => {
//   const airlines = await duffel.airlines.list();
//   res.json(airlines);
// });

// app.get("/search-flights-oneway", async (req, res) => {
//   const offerRequest = await duffel.offerRequests.create({
//     slices: [
//       {
//         origin: req.query.origin,
//         destination: req.query.destination,
//         departure_date: req.query.departure_date,
//       },
//     ],
//     passengers: [{ type: "adult" }],
//     cabin_class: req.query.cabin_class,
//   });

//   res.json(offerRequest.data.offers);
// });

// app.get("/search-flights-return", async (req, res) => {
//   const offerRequest = await duffel.offerRequests.create({
//     slices: [
//       {
//         origin: req.query.origin,
//         destination: req.query.destination,
//         departure_date: req.query.departure_date,
//       },
//       {
//         origin: req.query.destination,
//         destination: req.query.origin,
//         departure_date: req.query.return_date,
//       },
//     ],
//     passengers: [{ type: "adult" }],
//     cabin_class: req.query.cabin_class,
//   });

//   res.json(offerRequest.data.offers);
// });

// app.get("/search-flights-multi", async (req, res) => {
//   const offerRequest = await duffel.offerRequests.create({
//     slices: [
//       {
//         origin: req.query.origin_0,
//         destination: req.query.departure_0,
//         departure_date: req.query.departure_date_0,
//       },
//       {
//         origin: req.query.departure_0,
//         destination: req.query.departure_1,
//         departure_date: req.query.departure_date_1,
//       },
//       {
//         origin: req.query.departure_1,
//         destination: req.query.departure_2,
//         departure_date: req.query.departure_date_2,
//       },
//     ],
//     passengers: [{ type: "adult" }],
//     cabin_class: req.query.cabin_class,
//   });

//   res.json(offerRequest.data.offers);
// });

// const port = "4000";

// app.listen(port, () => {
//   console.log("SERVER STARTED ON PORT " + port);
// });
