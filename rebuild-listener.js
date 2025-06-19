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
    docker run -d -p 20089:80 --name meshh meshh-image
    `,
    (err, stdout, stderr) => {
      const express = require("express");
      const { exec } = require("child_process");

      const app = express();
      const PORT = 4000;

      app.post("/rebuild", (req, res) => {
        console.log("🔁 GitHub triggered rebuild");

        exec(
          `
    set -e
    cd /home/vinay/Desktop/Meshh &&
    echo "✅ Pulling latest changes..." &&
    git pull origin main || true &&
    echo "✅ Building new Docker image..." &&
    docker build --no-cache -t meshh-image . &&
    echo "✅ Removing old container (if exists)..." &&
    docker rm -f meshh || true &&
    echo "✅ Starting new container..." &&
    docker run -d -p 20089:80 --name meshh meshh-image
    `,
          (err, stdout, stderr) => {
            console.log("==== STDOUT ====\n", stdout);
            console.error("==== STDERR ====\n", stderr);

            if (err) {
              console.error("🚫 Build Error:", err);
              res.status(500).send("Error rebuilding Docker");
            } else {
              console.log("✅ Build Output:", stdout);
              res.send("Docker rebuild complete!");
            }
          }
        );
      });

      app.listen(PORT, () => {
        console.log(
          `🚀 Listening for rebuilds at http://localhost:${PORT}/rebuild`
        );
      });

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
