const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const path =require('path');
const fs = require('fs');

const { eAdmin } = require("../../../../helpers/eAdmin");
// const { eAdmin } = require("../../helpers/eAdmin")
const flash = require('connect-flash');
const console = require('console');

// 7768
router.get('/',(req,res)=>{
   console.log('');
   console.log('______________________________________');
   console.log(' ');
   console.log(' [ 1800 ]');
   console.log(' origem views :quando usuário digita a URL "rotaes.com.br" ');
   console.log(' origem route : _admin/admin-central/home.js/get("/")');
   console.log(' obs : página do site HOME');
   console.log('');
   console.log(' destino :site/smart/index.handlebars :: layout:"site/smart/indexHtml.handlebars"');
   console.log('');
   console.log('');
   //res.render("site/home/grid-home",{ layout:'site/home/home.handlebars'});
   res.render("site/smart/index",{ layout:'site/smart/indexHtml.html'});
})
  
module.exports=router