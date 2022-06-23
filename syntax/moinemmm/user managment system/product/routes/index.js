const express=require('express');
const { route } = require('express/lib/application');

const {errorView} = require('../controller/routecontroller');
const router=express.Router();
router.use(errorView);
module.exports = router;
