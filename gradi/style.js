let form = document.querySelector("#myform")
let gradiF = document.getElementById("user_input")
let output = document.querySelector("#output")
let formula
let gradi

form.addEventListener("submit", function(e)
{
    e.preventDefault()
    formula = 5/9
    gradi = (gradiF.value - 32) * formula
    output.innerHTML = (`i gradi Fahreneheit che hai inserito corrispondo a ${gradi} °`)
})