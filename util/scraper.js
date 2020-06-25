const cron = require('node-cron');
const Products = require('../model/products');

const util = require('../util/scrapeHelper');

module.exports.amzn = () => {
    cron.schedule("* * * * *", async () => {
        try {

            const products = await Products.find({});
            if (products)
                await products.forEach(async (el) => {

                    if (el.source === 'AMZN')
                        await util.amazonProduct(el);
                    else if(el.source==='flipkart')
                        util.flipkartProduct(el);
                    else if(el.source==='myntra')
                        util.myntraProduct(el);
                })
        }catch(e){
            console.log(e);
        }},

            {
                timezone: "Asia/Kolkata"
            }
        )
};





