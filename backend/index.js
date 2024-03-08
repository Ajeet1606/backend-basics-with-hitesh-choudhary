import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready!!");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field.",
    },
    {
      id: 2,
      title: "What do you call fake spaghetti?",
      content: "An impasta.",
    },
    {
      id: 3,
      title:
        "Did you hear about the mathematician who’s afraid of negative numbers?",
      content: "He’ll stop at nothing to avoid them.",
    },
    // Add more jokes as needed
  ];

  res.send(jokes);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is listening on ", PORT);
});
