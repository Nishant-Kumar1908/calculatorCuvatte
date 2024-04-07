

function calci(value)
{var value1=value.replace("x","*")
    try{
    var a= eval(value1);
    var b=count(a);
    if(b>3)
    {
        a=a.toFixed(3)
    }
    return a
    
}
catch(error)
{
return "invalid input"
}
}

    function count(numb) {
       if (Number.isInteger(numb)) {
          return 0;
       } else {
          return numb.toString().split('.')[1].length;
       }
    }