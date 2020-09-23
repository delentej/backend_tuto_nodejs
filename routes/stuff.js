const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');

//route
router.post('/', stuffCtrl.createThing);

router.put('/:id', stuffCtrl.modifyThing);

router.delete('/:id', stuffCtrl.deleteThing);

router.get('/:id', stuffCtrl.showThing);

router.get('', stuffCtrl.showEveryThings);

module.exports = router;