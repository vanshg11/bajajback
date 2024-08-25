const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors()); // Add this line to enable CORS
app.use(express.json());
app.use(bodyParser.json());

// POST Endpoint
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const highestLowercase =
    alphabets
      .filter((char) => char === char.toLowerCase())
      .sort()
      .pop() || "";

  res.json({
    is_success: true,
    user_id: "vansh_gupta_11112003",
    email: "vansh.gupta2021@vitstudent.ac.in",
    roll_number: "21BCE0027",
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
  });
});

// GET Endpoint
app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
