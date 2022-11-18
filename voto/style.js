let form = document.querySelector("#myform")
let voto = document.getElementById("user_input")
let output = document.querySelector("#output")
form.addEventListener("submit", function(e)
{
    e.preventDefault()
    if(voto.value < 6)
    {
         output.innerHTML = (`insufficiente voto: ${voto.value}`)
    }
    else if(voto.value == 6 || voto.value <= 6.9)
    {
         output.innerHTML = (`sufficiente voto: ${voto.value}`)
    }
    else if(voto.value == 7 || voto.value <= 7.9)
    {
         output.innerHTML = (`discreto voto: ${voto.value}`)
    }
    else if(voto.value >= 8)
    {
         output.innerHTML = (`ottimo voto: ${voto.value}`)
    }

})