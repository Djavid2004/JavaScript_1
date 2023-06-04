let begin = prompt("Who's there?");
console.log(begin);
if(begin=="admin"){
    let password = prompt("Password?")
    console.log(password)
    if(password=="TheMaster")
    {
        alert("Welcome!")
    }
    else if (password)
    {
        alert("Wrong password")
    }
    else{
        password=false;
        alert("Canceled")
    }
}
else if (begin)
{
    alert("I don't know you");
}
else{
    begin = false;
    alert("Canceled")
}