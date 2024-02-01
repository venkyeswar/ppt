const express=require('express');
const quoteRoutes=require('./routes/quote.routes');
const db=require('./data/database');
const enableCors=require('./middleware/core');

const app=express();
app.use(enableCors);

app.use(express.json())
 app.use('/quote',quoteRoutes);

 app.use(function(error,req,res,next){
    res.status(500).json({
        message:" Something Went Wrong",
    });
 });

 db.initDb().then(function(){
    app.listen(process.env.PORT);
 }).catch(function(error){
    console.log(' connection failed ');
 }) ;

