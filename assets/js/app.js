

const Units = {'0': 'гривень', '1': 'одна гривня', '2': 'дві гривні', '3': 'три гривні', '4': 'чотири гривні', '5': "п'ять гривень", '6': 'шість гривень', '7': 'сім гривень', '8': 'вісім гривень', '9': "дев'ять гривень"};
const Tens = {'1': 'десять', '2': 'двадцать', '3': 'тридцять', '4': 'сорок', '5': "п'ятдесят", '6': 'шістдесят', '7': 'сімдесят', '8': 'вісімдесят', '9': "дев'яносто"};
const Teens = {'1': 'одинадцять гривень', '2': 'дванадцять гривень', '3': 'тринадцять гривень', '4': 'чотирнадцять гривень', '5': "п'ятнадцять гривень", '6': 'шістнадцять гривень', '7': 'сімнадцять гривень', '8': 'вісімнадцять гривень', '9': "дев'ятнадцять гривень"};
const Hundreds = {'1': 'сто', '2': 'двісті', '3': 'триста', '4': 'чотириста', '5': "п'ятсот", '6': 'шістсот', '7': 'сімсот', '8': 'вісімсот', '9': "дев'ятсот"};

let inputNumber = prompt('Введіть число від 1 до 999');

console.log(`Ваше число: ${inputNumber}.`);
let arrNumber = [...inputNumber];
console.log(arrNumber);

let result1 = 0;
let result2 = 0;
let result3 = 0;
let result4 = 0;


if(arrNumber.length == 1){
    result1 = Units[arrNumber[0]];
    console.log(`Ваше число прописом: ${result1}.`);
}else if(arrNumber.length == 2){
    if(arrNumber[0] == 1){
        result1 = Teens[arrNumber[1]];
        console.log(`Ваше число прописом: ${result1}.`);
    }else{
        result2 = Tens[arrNumber[0]];
        result3 = Units[arrNumber[1]];
        result1 = result2 + " " + result3;
        console.log(`Ваше число прописом: ${result1}.`);
    }
    
}else if(arrNumber.length == 3){
    result2 = Hundreds[arrNumber[0]];
    if(arrNumber[1] == 1){
        result3 = Teens[arrNumber[2]];
        result1 = result2 + " " + result3;
        console.log(`Ваше число прописом: ${result1}.`);
    }else{
        result3 = Tens[arrNumber[1]];
        result4 = Units[arrNumber[2]];
    }if(arrNumber[1] == 0){
        result1 = result2 + " " + result4;
        console.log(`Ваше число прописом: ${result1}.`);
    }else
    result1 = result2 + " " + result3 + " " + result4;
    console.log(`Ваше число прописом: ${result1}.`);
}                   
