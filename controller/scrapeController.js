const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

exports.amazonList = (req,res,next)=>{


    const url = `https://www.amazon.in/MOJOREST-Cervical-Sleeping-Orthopedic-Breathable/dp/B0819K6B8L/ref=sr_1_9?crid=1ITBYAZ0PYKPI&dchild=1&keywords=memory+foam+pillows&qid=1593087379&sprefix=memory+f%2Caps%2C295&sr=8-9`;

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


    });

};

exports.flipkartList = (req,res,next)=>{


};

exports.myntraList = (req,res,next)=>{


};



