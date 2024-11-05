const express = require('express');

const {getAnnotations, addAnnotation, updateBodiesAnnotation, deleteAnnotation, getAnnotation, updateAnnotation} = require("../db/table/annotations");

const router = express.Router();

router.get('/:id', async (req, res, next) => {
    res.status(200).json({'annotations': await getAnnotations(req.params.id)});
});

router.post('/:id',  async (req, res, next) => {
    const multiSave = req.query.multiSave;

    if (multiSave !== undefined && multiSave) {
        req.body.forEach((async annotation => {
            const tmpAnnotation = await getAnnotation(annotation.id);

            if (tmpAnnotation === null) {
                await addAnnotation(JSON.stringify(annotation), 1);
            } else {
                await updateAnnotation(annotation.id, JSON.stringify(annotation));
            }
        }))
    } else {
        await addAnnotation(JSON.stringify(req.body), 1);
    }

    res.status(200).json({'message': 'Successfully added'});
})

router.put('/:id',  async (req, res, next) => {
    await updateBodiesAnnotation(req.body.id, JSON.stringify(req.body.bodies));

    res.status(200).json({'message': 'Successfully updated'});
})

router.delete('/:id',  async (req, res, next) => {
    await deleteAnnotation(req.body.id);

    res.status(200).json({'message': 'Successfully deleted'});
})

module.exports = router;
