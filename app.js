const express = require('express');
const cors = require('cors');
const {readFileSync, writeFileSync} = require("node:fs");

const annotationsRouter = require('./routes/annotations');
const imagesRouter = require('./routes/images');

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/annotations', annotationsRouter);
app.use('/api/images', imagesRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
