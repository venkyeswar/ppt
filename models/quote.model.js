const quoteController = require('../controllers/quote.controller');
const db=require('../data/database');

class Quote{
    static async getRandomQuote(){
        const quotes=await db.getDb().collection('posts');
        console.log(quotes);
        

    }
}

module.exports=Quote;