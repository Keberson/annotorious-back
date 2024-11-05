const db = require('../db');

const TABLE = 'images';

const getImage = (id) => {
    return db.oneOrNone(`SELECT encode(image, 'base64') AS image FROM ${TABLE} WHERE id=${id}`);
}

module.exports = {
    getImage
}