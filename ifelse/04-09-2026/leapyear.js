let a = 100;

// check if its a leap year if yes print "Its a leap year" otherwise print " Not leap Year"

// if its a leap year and is divisible by 10 print " Its divisible by 10" otherwise print " and if its leap year and  not divisible by 10 print "Not divisible by 10"

// check is a is even number or odd number and print "even or Odd"


if (a / 4 == 0){
    if (a / 100 != 0){
        console.log("it's not a leap year");
    }else if (a / 400 == 0){
        console.log("it is a leap year")
    }
}else{
    console.log("not a leap year")
}

if (a / 2 == 0){
    console.log("the year is a even year")
    
}else{
    console.log("the year is an even year ")
}

let b;