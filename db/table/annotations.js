const db = require('../db');

const TABLE = 'annotations';

const getAnnotations = (id) => {
    return db.manyOrNone(`SELECT annotation FROM ${TABLE} WHERE id_image = ${id}`);
}

const getAnnotation = (id) => {
    return db.oneOrNone(`SELECT annotation FROM ${TABLE} WHERE annotation ->> 'id' = '${id}'`);
}

const addAnnotation = (annotation, id) => {
    return db.none(`INSERT INTO ${TABLE} (annotation, id_image) VALUES ('${annotation}', ${id})`);
}

const updateBodiesAnnotation = (id, body) => {
    return db.none(`UPDATE ${TABLE} SET annotation = jsonb_set(annotation, '{bodies}', '${body}') WHERE annotation ->> 'id' = '${id}'`);
}

const updateAnnotation = (id, body) => {
    return db.none(`UPDATE ${TABLE} SET annotation = '${body}' WHERE annotation ->> 'id' = '${id}'`);
}

const deleteAnnotation = (id) => {
    return db.none(`DELETE FROM ${TABLE} WHERE annotation ->> 'id' = '${id}'`);
}

module.exports = {
    getAnnotations,
    getAnnotation,
    addAnnotation,
    updateBodiesAnnotation,
    updateAnnotation,
    deleteAnnotation
}