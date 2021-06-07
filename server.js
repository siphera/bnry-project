const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json({ extended: false }));
app.use(cors())

app.use('/api/articles', require('./routes/top_articles'))
app.use('/api/search', require('./routes/search') )

app.listen(port, () => console.log(`server listening on port ${port}`));