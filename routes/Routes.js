const express=require('express');
const loginUser = require('../Functions/Login');
const userRegistration = require('../Functions/Signup');
const addFiles = require('../Functions/Addfile');
const getFile = require('../Functions/getList');
const deleteFile = require('../Functions/deletefile');

const Routes=express.Router()
Routes.route('/login').post(loginUser);
Routes.route('/signup').post(userRegistration);
Routes.route('/addfile').post(addFiles);
Routes.route('/getlist').get(getFile);
Routes.route('/deletefile/:id').delete(deleteFile);


module.exports=Routes;