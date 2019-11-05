const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

const product = 'galaxy buds';
const page = '1';
/*const url = `https://www.amazon.in/s?k=${product}&page=${page}`;

request.get(url, function (
    error,
    response,
    data
) {

    const $ = cheerio.load(data);
    let len = 0;
    let products = [];
    $(".s-result-list .celwidget ").each((i, el) => {


        len++;
        // image url
        const imageUrl = $(el).find('.s-image').attr('src');

        const url = "https://www.amazon.in" + $(el).find('.a-link-normal').attr("href");
        //current price
        const temp = $(el).find('.a-price .a-price-whole');

        const curr_price = (String(temp).split("</span>")[0]).split('>')[1];
        //const curr_price = (String(temp));

        //const  curr_price = (String(temp).split(">")[1]).split('<')[0];


        const sponsored = $(el).find('.a-row .a-color-secondary').text();

        // actual price
        const ac_price = $(el).find(' .a-text-price .a-offscreen').text();
        // todo remove special characters from string.

        const p_name = $(el).find('.s-image').attr('alt');

        if (imageUrl && url && curr_price && ac_price && p_name)
            products.push({
                "url": url,
                "p_name": p_name,
                "p_actual_price": ac_price,
                "p_current_price": curr_price,
                "image_url": imageUrl,
                "sponsored": sponsored

            });

        len++;

    });

    console.log( products);
    console.log(len);
    // fs.writeFile('C:\\Users\\PC\\WebstormProjects\\priceDrop\\temp.json',JSON.stringify(products),err => {
    //     console.log(err);
    // });
    //console.log(response.elapsedTime);

});*/


// const temp = `<span class="a-price-whole">363<span class="a-price-decimal">.</span></span>`;
// const curr_price = (String(temp).split(">")[1]).split('<')[0];
// console.log(curr_price);


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

});