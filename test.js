const cheerio = require('cheerio');

const request = require('request');



    request.get(`https://www.amazon.in/s?k=lightning+deals+of+the+day&crid=2Z56CTOY0M7SQ&sprefix=ligh%2Caps%2C300&ref=nb_sb_ss_i_1_4`, function(
        error,
        response,
        data
    ) {
        const $ = cheerio.load(data);
        let len=0;
        const text = $(".s-result-list  .celwidget ").each((i,elm)=>{

                len++;
            });
        console.log(len);

        ;

        // if(!text){
        //     console.log("NO Deal ");
        // }
        // else{
           // console.log(text);
        //}

});