const express = require('express');
var bodyparser= require('body-parser');
const mongoose = require('mongoose');
const mongodb=require('mongodb');
var alert = require('alert');
const producttypes= require('./model/accounttypeschema');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.json());
var urlencodedParser = bodyparser.urlencoded({ extended: false })
const dburl = 'mongodb+srv://muhayuddin:test1234@cluster0.9qqep.mongodb.net/lab11?retryWrites=true&w=majority';
var froute=require('./routes/index');
app.use('/assets',express.static('assets'));
mongoose.connect(dburl)
.then((result)=> app.listen(8080,() => {
    console.log('server started....')}))
.catch((err)=> console.log(err));
    //add account type
    app.post('/addaccounttype',urlencodedParser,function(req,res){
        const product_type = new producttypes({
            username:req.body.type,
            phone:req.body.title,
        });
        product_type.save()
        .then((result)=>{
            res.redirect("/project/1");
        }
        )
        .catch((err)=>{
            console.log(err);
        })
      
         });
    app.get('/project/:page', function(req, res) {
        const perPage = 2;
        const page = req.params.page || 1;
        producttypes.find({})
          .skip(perPage * page - perPage)
          .limit(perPage)
          .exec(function(err, product) {
            producttypes.count().exec(function(err, count) {
              if (err) return next(err);
              res.render('../view/accounttypes.ejs', {
                data: product,
                current: page,
                pages: Math.ceil(count / perPage)
              });
            });
          });
    });
   app.use('/',froute);

