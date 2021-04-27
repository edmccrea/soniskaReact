const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

//@route  POST api/upload
//@desc   Display admin dashboard
//@access Private

router.post('/', auth, async (req, res) => {
  const user = await User.findById(req.user);
  const audio = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
    uploadName: req.body.uploadName,
    status: 'Uploaded',
  }));
});
