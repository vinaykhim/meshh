const express = require("express");
const { exec } = require("child_process");

const app = express();
const PORT = 4000;

app.post("/rebuild", (req, res) => {
  console.log("🔁 GitHub triggered rebuild");

  exec(
    `
    cd /home/vinay/Desktop/Meshh &&
    git pull origin main &&
    docker build --no-cache -t meshh-image . &&
    docker stop meshh || true &&
    docker rm meshh || true &&
    docker run -d -p 8080:80 --name meshh meshh-image
    `,
    (err, stdout, stderr) => {
      if (err) {
        console.error("🚫 Build Error:", stderr);
        res.status(500).send("Error rebuilding Docker");
      } else {
        console.log("✅ Build Output:", stdout);
        res.send("Docker rebuild complete!");
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`🚀 Listening for rebuilds at http://localhost:${PORT}/rebuild`);
});
