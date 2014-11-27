function foo(){
    return "foo";
}

function FizzBuzz(){
    for (var i = 1; i < 101; i++) {
        FizzOrBuzz(i);
    }
}

function FizzOrBuzz(num){
    var output = "";
    if (!(num % 3)) output += 'Fizz';
    if (!(num % 5)) output += 'Buzz';
    //console.log(output || num);
    return output || num;
}

