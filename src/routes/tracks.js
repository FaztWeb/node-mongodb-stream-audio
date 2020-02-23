const { Router } = require("express");
const router = Router();

const { getTrack, uploadTrack } = require('../controllers/tracks.controller')

router.get("/:trackID", getTrack);

router.post('/', uploadTrack);

module.exports = router;
