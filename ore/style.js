let form = document.querySelector("#myform")
let ora = document.getElementById("user_input_ora")
let min = document.getElementById("user_input_min")
let output = document.querySelector("#output")
let minTrasforming
let second
let millisecond

form.addEventListener("submit", function(e)
{
    e.preventDefault()
    minTrasforming = (ora.value * 60) + min.value
    second = minTrasforming * 60
    millisecond = second * 1000
    output.innerHTML = (`le ore e i minuti sono stati convertiti in ${millisecond} secondi`)

})