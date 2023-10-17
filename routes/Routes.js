const express=require('express');
const loginUser = require('../Functions/Login');
const userRegistration = require('../Functions/Signup');
const addFiles = require('../Functions/Addfile');

const Routes=express.Router()
Routes.route('/login').post(loginUser);
Routes.route('/signup').post(userRegistration);
Routes.route('/addfile').post(addFiles);

module.exports=Routes;