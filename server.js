const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express);

app.listen(port, () => console.log(`server listening on port ${port}`));