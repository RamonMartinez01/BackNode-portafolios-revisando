const catchError = require('../utils/catchError');
const { image } = require('../models');
const { uploadToCloudinary, deleteFromCloudinary } = require('../utils/cloudinary');

const getAll = catchError(async(req, res) => {
    const results = await image.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const file = req.file;
    const { url } = await uploadToCloudinary(file);
    const imagen = await image.create({ url });
    return res.status(201).json(imagen);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const imagen = await image.findByPk(id);
    if(!image) return res.sendStatus(404);
    await deleteFromCloudinary(imagen.url);
    await imagen.destroy();
    return res.sendStatus(204);
});


module.exports = {
    getAll,
    create,
    remove
   
}