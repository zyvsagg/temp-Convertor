//get references to the Celsius and ferhenheit input fields
const celsius = document.querySelector("#celsius"),
fahrenheit = document.querySelector("#fahrenheit");

//ser focus to the Celsius input fields when the page  loads
// console.log(celsius, fahrenheit);
window.addEventListener("load", () => celsius.focus());

//convert celsius to fahrenheit when Celsius value changes
celsius.addEventListener("input", () => {
    fahrenheit.value = ((celsius.value *9) / 5 + 32).toFixed(2);

    //clear fahremheit input when celsius is empty
    if(!celsius.value) fehrenheit.value = "";
});

//convert fahrenheit to celcious when fahrenheit value changes
fahrenheit.addEventListener("input", () => {
    celsius.value = (((fahrenheit.value - 32) * 5)/9 ).toFixed(2);
if (!fahrenheit.value) celsius.value = "";
})   