const cheerio = require('cheerio');

const request = require('request');

exports.amazonList = (req, res, next) => {

    const product = req.body.product;
    const page = '1';
    const url = `https://www.amazon.in/s?k=${product}&page=${page}`;

    request.get(url, function (
        error,
        response,
        data
    ) {

        const $ = cheerio.load(data);
        let len = 0;
        let products = [];
        try{
            $(".s-result-list .celwidget ").each((i, el) => {

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
                        "name": p_name,
                        "actual_price": ac_price,
                        "current_price": curr_price,
                        "image_url": imageUrl,
                        "sponsored": sponsored

                    });

                len++;

            });
            return res.status(200).json(products);
        }

        catch (e) {
            res.status(404);
        }





    });

};

exports.flipkartList = (req, res, next) => {


};

exports.myntraList = (req, res, next) => {


};