const express = require('express');

const {getImage} = require("../db/table/images");

const router = express.Router();

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    res.status(200).json(await getImage(id));
});


module.exports = router;
