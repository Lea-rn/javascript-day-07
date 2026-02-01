///// challange correction ::

///1-

// const bills = [22,295,176,440,37,105,10,1100,52,86]
////2-
// const tips = []
// const totals = []

// //// 3 -

// const calcTip = function(bill){
//     return bill>= 50 && bill<=300 ? bill*0.15 : bill*0.20
// }

// const bills = [22,295,176,440,37,105,10,1100,52,86]

// for (let i=0 ; i<bills.length ; i++){
// const result = calcTip(bills[i])  /// 4.4
// tips.push(result)
// totals.push(result+bills[i])
// }

// console.log(bills , tips)

//// bonus :::

// const calcAverage = function (arr) {
//   let sum = 0; ////0 ==> (5) ; (7) ; (11)
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i]; ///// {itiration one : 0 = 0 + 5} ; {itiration two : 5 = 5 + 2 }; {itiration 3 : 7 = 7 +4}

//     sum += arr[i]
//   }

//  return sum/arr.length
// };

// console.log(calcAverage([5, 2, 8]))


////// while loops :

let dice = Math.trunc(Math.random()*6+1)  /// 5


while (dice!== 6){
    console.log(`you rolled a ${dice}`)
    dice = Math.trunc(Math.random()*6+1)

}
