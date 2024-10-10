const catchError = require('../utils/catchError');
const { image } = require('../models');

const getAll = catchError(async(req, res) => {
    const results = await image.findAll();
    return res.json(results);
});



module.exports = {
    getAll,
   
}