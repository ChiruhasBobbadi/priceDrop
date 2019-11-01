const cheerio = require('cheerio');

const request = require('request');

const product='galaxy buds';
const page='1';
const url=`https://www.amazon.in/s?k=${product}&page=${page}`;

request.get(url, function (
    error,
    response,
    data
) {

    const $ = cheerio.load(data);
    let len = 0;
    let products = [];
    $(".s-result-list  .celwidget ").each((i, el) => {

        //console.log($(el).attr("src"));
        len++;
        // image url
        const imageUrl = $(el).find('.s-image').attr('src');


        //current price
        const temp = $(el).find('.a-price .a-price-whole');
        const curr_price = (String(temp).split("</span>")[0]).split('>')[1];

        // actual price
        const ac_price = $(el).find('.a-price .a-offscreen').text();

        const p_name = $(el).find('.s-image').attr('alt');

        products.push({"p_name": p_name, "p_actual_price": ac_price, "p_current_price": curr_price, "image_url": imageUrl});

    len++;

    });

    console.log(products);
    console.log(len);

});