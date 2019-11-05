const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');





// const temp = `<span class="a-price-whole">363<span class="a-price-decimal">.</span></span>`;
// const curr_price = (String(temp).split(">")[1]).split('<')[0];
// console.log(curr_price);


/*
// product page
request.get("https://www.amazon.in/Amazon-Brand-Solimo-1000-Watt-Turquoise/dp/B0721K4S3J/ref=sr_1_11_sspa?keywords=sale&qid=1572945692&smid=AT95IG9ONZD7S&sr=8-11-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOFBISTYzSUgzVksyJmVuY3J5cHRlZElkPUEwOTkwMzcySE5GMVFLQU9WSU02JmVuY3J5cHRlZEFkSWQ9QTA3MjM1MDFVUFNENVg1VkxVUEsmd2lkZ2V0TmFtZT1zcF9tdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl", function (
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

    let obj ={
        "price":price,
        "isDeal":isDeal,
        "actual_price":actualPrice
    }
    // write to data base.

});*/
