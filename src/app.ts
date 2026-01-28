import router from "./routes/productRoutes.js";
import express from "express";

const port = 4000;
const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(4000, () => {
  console.log(`app listening on port ${port}`);
});

export default app;
