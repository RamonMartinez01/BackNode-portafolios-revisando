const express = require('express');
const userRouter = require('./usuario.router');
const imageRouter = require('./image.router');
const router = express.Router();

// colocar las rutas aquí
router.use(userRouter)
router.use(imageRouter)


module.exports = router;
