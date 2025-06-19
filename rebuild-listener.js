const express = require("express");
const { exec } = require("child_process");

const app = express();
const PORT = 4000;

app.post("/rebuild", (req, res) => {
  console.log("🔁 GitHub triggered rebuild");

  exec(
    `
    git pull origin main &&
    docker build -t my-static-site . &&
    docker stop static-web || true &&
    docker rm static-web || true &&
    docker run -d -p 8080:80 --name static-web my-static-site
  `,
    (err, stdout, stderr) => {
      if (err) {
        console.error(stderr);
        res.status(500).send("Error rebuilding Docker");
      } else {
        console.log(stdout);
        res.send("Docker rebuild complete!");
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`🚀 Listening for rebuilds at http://localhost:${PORT}/rebuild`);
});
