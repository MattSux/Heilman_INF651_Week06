function testFunctions()
{
    document.getElementById("h1").innerHTML = helloWorld();
    document.getElementById("h2").innerHTML = greeting("Josh");
    document.getElementById("h3").innerHTML = divisibleByThree(9);
    document.getElementById("h4").innerHTML = averageAge(6,5);
    document.getElementById("h5").innerHTML = leetSpeak("speak");
}
function helloWorld()
{
    return "Hello World!"
}

function greeting(name)
{
    return "Hello, " + name + ".";
}

function divisibleByThree(number)
{
    if (number%3==0)
    {
        return true;
    }
    else{return false;}
}

function averageAge(num1, num2, num3)
{
    if (num3!=null)
    {
        return Math.round((num1+num2+num3)/3);
    }
    else
    {
        return Math.round((num1+num2)/2);
    }
}

function leetSpeak(word)
{
        //for a
        var word = word.replace(/a/g, "4");
        
        //for e
        var word = word.replace(/e/g, "3");

        return word
}