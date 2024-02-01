// const Quote=require("../models/quote.model");

async function getRandomQuote(req,res,next){

    let randomQuote="WORK HARD & SMART";
    res.json({
        quote:randomQuote,
    });
}

module.exports={
    getRandomQuote:getRandomQuote,
}