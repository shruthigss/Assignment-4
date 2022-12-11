const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 4000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

//--------------------$$$$$$$$$$$$ INSTALL EXPRESS NODE MODULES BEFORE STARTING $$$$$$$$$$$$$$$$$---------------

//BELOW DATA IS USED FOR THE GET METHOD
app.get("/add", (req, res) => {
  let n1 = 43;
  let n2 = 3;
  let sum = n1 + n2;
  res.send(`sum is ${sum}`);
});

//FOR ADDITION ---------------------------------------------------------------------
app.post("/add", (req, res) => {
  if (isNaN(req.body.num1)) {
    return res.json({
      status: "Failure",
    });
  }

  if (typeof req.body.num1 === "string" && typeof req.body.num2 === "string") {
    return res.json({
      status: "Invalid data types",
    });
  }

  if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000) {
    return res.json({
      status: "Overflow",
    });
  }

  if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000) {
    return res.json({
      status: "Underflow",
    });
  }

  let sum = Number(req.body.num1) + Number(req.body.num2);
  res.json({
    status: "success",
    message: `the sum of given two numbers , ${sum}`,
  });
});

//FOR SUBTRACTION ------------------------------------------------------------------
app.post("/sub", (req, res) => {
  if (isNaN(req.body.num1)) {
    return res.json({
      status: "Failure",
    });
  }
  if (typeof req.body.num1 === "string" && typeof req.body.num2 === "string") {
    return res.json({
      status: "Invalid data types",
    });
  }

  if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000) {
    return res.json({
      status: "Overflow",
    });
  }

  if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000) {
    return res.json({
      status: "Underflow",
    });
  }
  let diff = Number(req.body.num1) - Number(req.body.num2);
  res.json({
    status: "success",
    message: `the difference of given two numbers , ${diff}`,
  });
});

//FOR MUTLIPLICATION -------------------------------------------------------------------------
app.post("/multiply", (req, res) => {
  if (isNaN(req.body.num1)) {
    return res.json({
      status: "Failure",
    });
  }
  if (typeof req.body.num1 === "string" && typeof req.body.num2 === "string") {
    return res.json({
      status: "Invalid data types",
    });
  }

  if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000) {
    return res.json({
      status: "Overflow",
    });
  }

  if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000) {
    return res.json({
      status: "Underflow",
    });
  }

  let multi = Number(req.body.num1) * Number(req.body.num2);
  res.json({
    status: "success",
    message: `the product of given two numbers , ${multi}`,
  });
});

//FOR DIVISION ----------------------------------------------------------------------------
app.post("/divide", (req, res) => {
  if (Number(req.body.num1) && req.body.num2 === 0) {
    return res.json({
      status: "Can't divide by Zero",
    });
  }
  if (typeof req.body.num1 === "string" && typeof req.body.num2 === "string") {
    return res.json({
      status: "Invalid data types",
    });
  }

  if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000) {
    return res.json({
      status: "Overflow",
    });
  }

  if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000) {
    return res.json({
      status: "Underflow",
    });
  }
  let div = Number(req.body.num1) / Number(req.body.num2);
  res.json({
    status: "success",
    message: `the difference of given two numbers , ${div}`,
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
