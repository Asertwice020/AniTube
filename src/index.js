import configEnv from "./configEnv/index.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

console.log(configEnv);

connectDB()
.then((resolve) => {
  app.on("error", (error) => {
    console.error(`MONGODB CONNECTION SUCCESSFUL BUT, EXPRESS SERVER ERROR ::\nERROR:: ${error}`);
  })
  const PORT = configEnv.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(
  (error) =>
    `Have A Problem In Promise Catch Part ::\nERROR:: ${error}`
);
