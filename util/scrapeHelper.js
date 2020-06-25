const cheerio = require('cheerio');
// const fs = require('fs');
const request = require('request');
const fetch = require("node-fetch");

const Product = require('../model/products');


exports.amazonProduct = async (prod) => {

    let url = prod.url;
    let flag=false;
   await request.get(url, async (
        error,
        response,
        data
    ) => {
        const $ = await cheerio.load(data);
        let price;

        let isDeal = false;
        const deal = $("#priceblock_dealprice").text();

        price = deal;
        if (!deal) {
            price = $("#priceblock_ourprice").text();
            price = price.substr(2, price.length).replace(/,/g, '');
           //isDeal = true;
        }

        let actualPrice = await $(".priceBlockStrikePriceString").text();
        actualPrice= actualPrice.substr(2, price.length).replace(/,/g, '');

        // let obj = {
        //     "price": price,
        //     "isDeal": isDeal,
        //     "actual_price": actualPrice
        // };



        prod.curr_price = price;
        prod.actual_price = actualPrice;

        console.log({price:price,actualPrice:actualPrice});
        if(price <= 840){
            console.log("price decreased");
            flag=true;
        }


        // prod.flashSale = isDeal;

        await Product.findByIdAndUpdate(prod._id, {curr_price:price});

    });



   // return flag



};






exports.flipkartProduct = (prod) => {

};

exports.myntraProduct = (prod) => {

};