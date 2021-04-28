const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

//@route  GET api/admin
//@desc   Display admin dashboard
//@access Private

//@route  GET api/admin/users
//@desc   Display all users
//@access Private

router.get('/users', auth, async (req, res) => {
  const users = await User.find({});
});

//@route  PUT api/admin/inprogress
//@desc   Update file status to in progress
//@access Private

router.put('/inprogress', auth, async (req, res) => {});

//@route  PUT api/admin/completed
//@desc   Update file status to in progress
//@access Private

router.put('/completed', auth, async (req, res) => {});

module.exports = router;
