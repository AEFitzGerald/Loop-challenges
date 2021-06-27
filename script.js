/*
1. PRINT ODDS 1-20
Using a loop write code that will console.log all of the odd values from 1 up to 20.
*/
for (let i = 1; i < 21; i++) {
    if (i % 2 != 0) {
    console.log(i);
}
}


/*
2. DECREASING MULTIPLES OF 3
Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
*/
for (let i = 100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
}
} 

/*
3. PRINT THE SEQUENCE
Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
the number sequence starts at 4 and decreases in value by -1.5, 5 times
I could not get it using floats so I multipled everything by 100 and then divided the total by 100. 
*/

num1 = 550;
num2 = -350;

while ( num1 > num2) {
    num1 = num1 -150;
    console.log(num1/100);
}

/*
4. Sigma
Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
*/

var counterArray = [];
counter = 0;

function addNumbersinAHundred () { 
    for(let i = 0; i < 101; i++) {
        counterArray.push(i); 
        counter += i;
    }
    return counter;
}

getToFiveThousandFifty = addNumbersinAHundred();
console.log(getToFiveThousandFifty); 


/*
5. Factorial
Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * //11 * 12. We should get back 479001600 at the end.
*/

var getResults = 1;

function multiplyOneToTwelve() {
    for (let i = 1; i < 13; i++) {
        getResults = getResults * i;
    }
    return getResults;
}

getNumber = multiplyOneToTwelve();
console.log(getNumber);