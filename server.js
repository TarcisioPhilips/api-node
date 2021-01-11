const app = require("./app");
const port = process.env.PORT || 3000; //caso haja um env na produção
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
