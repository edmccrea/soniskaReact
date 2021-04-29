const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

//@route  POST api/upload
//@desc   Upload audio files
//@access Private

router.post('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const audio = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
      uploadName: req.body.uploadName,
      status: 'Uploaded',
    }));
    user.audioFile.push(...audio);
    await user.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//@route  POST api/upload/freetest
//@desc   Upload free test
//@access Private

router.post('/freetest', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    console.log(user);
    user.freeTest = {
      url: req.file.path,
      filename: req.file.filename,
      uploadName: 'Soniska Free Test Master',
      status: 'Uploaded',
    };
    await user.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
