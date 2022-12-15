import express from'express';
const user = express.Router();
import {postSignin, postLogin, getUsers} from '../controllers/user.controller.js';



user.post("/signin", postSignin);

user.post("/login", postLogin);

user.get("/", getUsers);

export default user
