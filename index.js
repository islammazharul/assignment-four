function mindGame(number){
    if(typeof number !== 'number'){
        return "Provide a number";
    }
    if(number > 0){
        let multiply = number*3;
        let add = multiply + 10;
        let divided = add / 2;
        let subtract = divided - 5;
        return subtract;
    }
    else{
        return "Provide a positive number";
    }
}
let result = mindGame(33);
// console.log(result);





function evenOdd(name){
    if(typeof name !== 'string'){
        return "Provide a string";
    }
    if(name.length % 2 === 0){
        return "even";
    }
    else{
        return "odd";
    }
}
let name = '44444';
let count = evenOdd(name);
// console.log(count);



function isLGSeven(number){
    let total = number - 7;
    if(typeof number !== 'number'){
        return "Provide a Number"
    }
    if(total >= 7){
        return number*2
    }
    else{
        return total;
    }
}
let result1 = isLGSeven(15);
// console.log(result1);




function findingBadData(numbers){
    let badData = 0;
    for (let i = 0; i < numbers.length; i++){
        const age = numbers[i];
        if(age < 0){
            badData = badData + 1;
        }
    }
    return badData;
}
let numbers = [-4, -9, -5, -33, -55];
let result2 = findingBadData(numbers);
console.log(result2);



function gemsToDiamond(number1, number2, number3){
    const gems1stFriend = number1*21;
    const gems2ndFriend = number2*32;
    const gems3rdFriend = number3*43;
    const total = gems1stFriend + gems2ndFriend + gems3rdFriend;
    if(typeof number1 !== 'number' || typeof number2 !== 'number' || typeof number3 !== 'number'){
        return "Provide a Number";
    }
    if(total >= 2000){
        const subTotal = total -2000;
        return subTotal;
    }
    else{
        return total;
    }
}
const result5 = gemsToDiamond(100,5,1);
// console.log(result5);