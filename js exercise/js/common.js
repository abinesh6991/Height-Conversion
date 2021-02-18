function convertCM(ft, inch) {
    let cm = (ft * 12) + parseInt(inch);
    document.getElementById("result").textContent = `${cm}cm`;
}
function validateAndConvertHeight() {
    let newstring = "Please provide a \n" + "value";
    let feet = document.getElementById("feet").value;
    let inches = document.getElementById("inch").value;
    if (feet < 0 || feet === NaN || feet === '') {
        document.getElementById("result").textContent = `Please provide a valid number`;
    } else if (inches >= 12 || inches < 0 || inches === NaN || inches === '') {
        document.getElementById("result").textContent = `Please provide a value between 0 to 12`;
    } else {
        convertCM(feet, inches);
    }
}