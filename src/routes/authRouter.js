import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

// const router = express.Router();
const router = express.Router();

router.get('/', async (req, res) => {
  res.json();
});

router.post('/registration', async (req, res) => {
  const {
    fName, lName, login, pass,
  } = req.body;
  console.log(req.body);
  const hashedPass = await bcrypt.hash(pass, 10);
  const newUser = await User.create({
    f_name: fName, l_name: lName, login, pass: hashedPass,
  });
  req.session.userId = newUser.id;
  req.session.userFirstName = newUser.f_name;
  req.session.userLastName = newUser.l_name;
  req.session.userLogin = newUser.login;
  // res.json();
  res.sendStatus(200);
});

export default router;
