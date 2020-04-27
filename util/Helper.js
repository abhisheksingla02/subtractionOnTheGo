class Helper {


/**
 * @description To check if borrow is true or false in this case
 * @params {number} minuend
 * @params {number} subtrahend  
 */ 
static checkBorrow(minuend,subtrahend){
    while(subtrahend!=0){
        let unitDigitSubtrahend=subtrahend%10;
        let unitDigitMinuend=minuend%10;
        if(unitDigitSubtrahend>unitDigitMinuend){
            return true;
        }
        subtrahend=Math.floor((subtrahend/10));
        minuend=Math.floor(minuend/10);
    }
    return false;
}

/**
 * @description To create all the options for mcq's
 * @params {number} minuend
 * @params {number} subtrahend  
 */ 
 static createOptions(minuend,subtrahend){
    let j=3,r,value;
    let options =[];
    options.push(minuend-subtrahend);
    if(minuend<10 || subtrahend<10){
        options.push(Math.floor(minuend/subtrahend));
        options.push(Math.floor(minuend-subtrahend+4));
        options.push(Math.floor(minuend/subtrahend+4))
        return options;
    }
    while(j>0){
        r = Math.floor(Math.random()*(subtrahend/2));
        if(r==0)
        continue;
        value = Math.floor(minuend-(subtrahend-subtrahend/r));
  
        if(value>0 && !options.includes(value) && value!=null){
            j--;
            options.push(value);
        }
    }
    return options;
}

/**
 * @description To shuffle the elements of array. So that in mcq's there is always a random option as answer.  
 * @params {object} array
 */ 
static shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  /**
 * @description To check if request is valid or not 
 * @params {number} totalQuestions
 * @params {number} digitsInMinuend
 * @params {number} digitsInSubtrahend
 * @params {isBorrowed} isBorrowed
 */
  static checkBadRequest(totalQuestions,digitsInMinuend,digitsInSubtrahend,isBorrowed){
      if(typeof totalQuestions!="number" || typeof digitsInMinuend!="number" || typeof digitsInSubtrahend!="number" || typeof isBorrowed!= "boolean"){
          return true;
      }
    if(digitsInMinuend <=0 || digitsInSubtrahend <=0 || totalQuestions<0){
        return true;
    }

    if(digitsInSubtrahend==1 && digitsInMinuend ==1 && isBorrowed==true){
        return true;
    }
    if(digitsInSubtrahend>digitsInMinuend){
        return true;
    }
    return false;
}
}


module.exports = Helper