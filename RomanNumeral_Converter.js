//Roman Numeral Converter
//only works up to 4000
function convertToRoman(num){
    //create roman numeral lookup table
    const lookupTable = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
      };
    //create roman numeral accumulator
    let accumulator = '';
    //loop through lookup table
    for(const key in lookupTable){
        const numberValue = lookupTable[key]; //this calls to they key and returns the value to this const
        while (numberValue <= num){ //while numberValue is less than num
            num -= numberValue; //subtract the value from num
            accumulator += key; //add the key to the accumulator
        }
    }
    //return accumulator
    return accumulator;
}