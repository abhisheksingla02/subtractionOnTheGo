const querystring = require('querystring');
const url = require('url');
const Helper = require('../util/Helper')
const subtractionEndpoint = async function (req, res, next) {
    let unescapedurl = querystring.unescape(req.originalUrl);
    let queryparams = url.parse(unescapedurl, true);
    const totalQuestions=queryparams.query.totalQuestions!='' && queryparams.query.totalQuestions!=null?JSON.parse(queryparams.query.totalQuestions):-1;
    const digitsInMinuend=queryparams.query.digitsInMinuend!='' && queryparams.query.digitsInMinuend!=null?JSON.parse(queryparams.query.digitsInMinuend):0;
    const digitsInSubtrahend=queryparams.query.digitsInSubtrahend!='' && queryparams.query.digitsInSubtrahend!=null?JSON.parse(queryparams.query.digitsInSubtrahend):0;
    const isBorrowed=queryparams.query.isBorrowed!='' && queryparams.query.isBorrowed!=null?JSON.parse(queryparams.query.isBorrowed):null;
    let i=totalQuestions;
    let listQuestions = [];
    if(typeof isBorrowed != "boolean" || Helper.checkBadRequest(totalQuestions,digitsInMinuend,digitsInSubtrahend,isBorrowed)){
        res.status=400;
        return res.send("invalid request");
    }

    while(i>0){
        let minuend=Math.floor(Math.random()*9*Math.pow(10,digitsInMinuend-1)) + Math.pow(10,digitsInMinuend-1);
        let subtrahend=Math.floor(Math.random()*9*Math.pow(10,digitsInSubtrahend-1)) + Math.pow(10,digitsInSubtrahend-1);    
        if(digitsInMinuend==digitsInSubtrahend && subtrahend>minuend){
            minuend=minuend+subtrahend;
            subtrahend=minuend-subtrahend;
            minuend=minuend-subtrahend;
        }

        //condition to check if numbers satisfy borrowing
        result=Helper.checkBorrow(minuend,subtrahend);
        if(result==isBorrowed){
            let options = Helper.createOptions(minuend,subtrahend);

            Helper.shuffle(options);
            let questionsObj = {
                minuend: minuend,
                subtrahend: subtrahend,
                correctAnswer:minuend-subtrahend,
                options:options
              }
              listQuestions.push(questionsObj);
              i--;
        }
    }
    return res.send(listQuestions);


}

module.exports = {
    subtractionEndpoint
}