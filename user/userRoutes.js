import ejValidator from 'express-joi-validation';
import express from 'express';
import userSchema from './userSchema.js';
import { findByUserId, createUser, deleteUserById, updateUserProfile, autoSuggestUsers } from './userService.js';

const router = express.Router();
const validator = ejValidator.createValidator();

router.get('/user/:id', (req, res) => {
  const { id } = req.params;
  const user = findByUserId(id)
  if (user) {
    res.send(user);
  } else {
    res.send('User not found');
  }
});

router.post('/user', validator.body(userSchema), (req, res) => {
  console.log('here', req.body)
  const { body } = req;
  const user = createUser(body)
  res.send(user);
});

router.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  const user = deleteUserById(id);
  res.send(user);
});

router.put('/user/:id', validator.body(userSchema), (req, res) => {
  const { id } = req.params;
  const { body: updatedUserInfo } = req;
  const user = updateUserProfile(id, updatedUserInfo)
  res.send(user);
});

router.get('/getAutoSuggest', (req, res) => {
  const { limit, loginSubString } = req.query
  const user = autoSuggestUsers(loginSubString, limit)
  res.send(user);
});

export default router;