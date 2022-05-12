1.Prime number
primeNumber(1, 100)
function primeNumber(from, to){
    var flag=false;
    for(i = from; i <= to; i++)
    {
    for( j = 2; j < i; j++)
    {
        if(i % j == 0)
        {
            flag = false;
                     break;
        }
        else
        {
          flag = true;
        }
        }
        if(flag)
        {
            console.log(i);
        }
       }
    }

2.Reverse a string
var reverse = function(str) {
    var arr = [];
    
    for (var i = 0, len = str.length; i <= len; i++) {
        arr.push(str.charAt(len - i))
    }

    return arr.join('');
}

console.log(reverse('I want a 🍺'));

3.