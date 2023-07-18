const errorText = document.querySelector(".error-text")
const answer = document.querySelector(".answer span")
const bmiStatus = document.querySelector(".status span")

document.querySelector("button:nth-of-type(1)").addEventListener("click", ()=> {
    const weight = document.querySelector(".weight").value
    const height = document.querySelector(".height").value

    if(weight.length <= 0 || height.length <= 0){
        errorText.style.display = "block"
        errorText.textContent = "Please Fill in the fields"
        setTimeout(() => {
            errorText.style.display = "none"
        }, 3000)
        return
    }else if(!Number(weight) || !Number(height)){
        errorText.style.display = "block"
        errorText.textContent = "Please both fields should be numbers"
        setTimeout(() => {
            errorText.style.display = "none"
        }, 3000)
        return
    }

    const heightInMeters = height / 10

    const bmiValue = ((weight / (heightInMeters*heightInMeters)) * 100).toFixed(2)
    answer.style.padding = "2px 8px"
    answer.textContent = `${bmiValue}`

    if(Number(bmiValue) < 18.5){
        bmiStatus.textContent = "You are Under Weight"
    }else if(Number(bmiValue) >= 18.5 && Number(bmiValue) <= 24.9){
        bmiStatus.textContent = "You are Healthy Weight"
    }else if(Number(bmiValue) >= 25 && Number(bmiValue) <= 29.9){
        bmiStatus.textContent = "You are Over Weight"
    }else if(Number(bmiValue) >= 30){
        bmiStatus.textContent = "You are Obese"
    }
})

document.querySelector("button:nth-of-type(2)").addEventListener("click", ()=> {
    document.querySelector(".weight").value = ""
    document.querySelector(".height").value = ""
    errorText.textContent = ""
    bmiStatus.textContent = ""
    answer.textContent = ""
    answer.style.padding = "0"
})

// If your BMI is less than 18.5, it falls within the underweight range. 

// If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. 

// If your BMI is 25.0 to 29.9, it falls within the overweight range. 

// If your BMI is 30.0 or higher, it falls within the obese range.