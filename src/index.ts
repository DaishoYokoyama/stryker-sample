import { app } from "./server/app";

const PORT = 3000;
app.listen(PORT, () => console.log(`Node.js is listening to PORT : ${PORT}`));
