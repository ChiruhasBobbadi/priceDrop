const cheerio = require('cheerio');
// const fs = require('fs');
const request = require('request');


exports.amazonProduct = (prod) => {

    url = prod.url;

    request.get(url, function (
        error,
        response,
        data
    ) {

        const $ = cheerio.load(data);
        let price;
        let isDeal = false;
        const deal = $("#priceblock_dealprice").text();

        price = deal;
        if (!deal) {
            price = $("#priceblock_ourprice").text();
            isDeal = true;
        }

        const actualPrice = $(".priceBlockStrikePriceString").text();

        let obj = {
            "price": price,
            "isDeal": isDeal,
            "actual_price": actualPrice
        };

        if(curr_price <= prod.tar_price){
            // notify user..
        }


        prod.flashSale = isDeal;
        prod.curr_price = price;
        prod.actual_price = actualPrice;


    });

    prod.save().then(res=>{

    }).catch(err=>{
        console.log(err);
    })


};

exports.flipkartProduct = (prod) => {

};

exports.myntraProduct = (prod) => {

};