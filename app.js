let button = document.querySelector("button");
function bmr(height,weight,age){
    let total = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    return total;
};
button.addEventListener('click', ()=> {
    let bodyWeight = document.querySelector('#bodyweight').value;
    let height = document.querySelector('#height').value;
    let age = document.querySelector('#age').value;
    let activityLevel = document.querySelector('select').value;
    let personBmr = bmr(height,bodyWeight,age);
    let h2Tdee = document.querySelector('#tdee');
    let h2 = document.querySelector('h2').innerHTML = `Your BMR is ${personBmr.toFixed(2)}.`
    if (activityLevel == "Sedentary"){
        let tdee = personBmr * 1.2;
        h2Tdee.innerHTML = `Your TDEE calorie intake is ${tdee.toFixed(2)}.`;
    };
    
    if (activityLevel == "low"){
        let tdee = personBmr * 1.375;
        h2Tdee.innerHTML = `Your TDEE calorie intake is ${tdee.toFixed(2)}.`;
        
    };

    if (activityLevel == "medium"){
        let tdee = personBmr * 1.55;
        h2Tdee.innerHTML = `Your TDEE calorie intake is ${tdee.toFixed(2)}.`;
    };

    if (activityLevel == "high"){
        let tdee = personBmr * 1.725;
        h2Tdee.innerHTML = `Your TDEE calorie intake is ${tdee.toFixed(2)}.`;
    };

});

