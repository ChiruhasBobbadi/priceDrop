const cron = require('node-cron');
const products = require('../model/products');
const util = require('../util/scrapeHelper');

products.find({}).then(products => {

    if (products) {

        products.forEach((el)=>{
            if(el.source==='amazon')
                util.amazonProduct(el);
            else if(el.source==='flipkart')
                util.flipkartProduct(el);
            else if(el.source==='myntra')
                util.myntraProduct(el);
        })

    }
}).catch(error => {
    console.log(error);
});


