const calculateur = document.querySelector('#calculateur')
const age = document.querySelector('input[name="calc-age"]')
const height = document.querySelector('input[name="calc-taille"]')
const weight = document.querySelector('input[name="calc-poids"]')
const sex = document.querySelector('select[name="calc-sex"]')
const activity = document.querySelector('select[name="calc-niveau"]')
const goal = document.querySelector('select[name="calc-objectif"]')
const btnCalc = document.querySelector('#calc-btn')
const results = document.querySelector('#calculateur-results')
const blockErr = document.querySelector('#err-msg')

const coefActivity = {
    min : 1.2,
    low : 1.375,
    middle : 1.55,
    hight: 1.725,
    top: 1.9
}

const coef = {
    masculin: [88.36, 13.4, 4.8, 5.7],
    feminin: [447.6, 9.2, 3.1, 4.3],
}


let formCheck = true

btnCalc.addEventListener('click', calculating)
    
function calculating(event) {
    event.preventDefault()
    results.innerHTML = ''
    if (weight.value > 0 && height.value > 0 && age.value > 0) {
        blockErr.classList.add('p-hide')
        let gender = sex.value
        let result = coefActivity[activity.value] 
            * (coef[gender][0]
            + coef[gender][1] * weight.value
            + coef[gender][2] * height.value
            - coef[gender][3] * age.value
            )
        result = Math.round(result / 100) * 100
        showResult(result)
    } 
    else {
        formCheck = false
        if (!(weight.value > 0)) {
            errInput(weight)
        }
        if (!(height.value > 0)) {
            errInput(height)
        }
        if (!(age.value > 0)) {
            errInput(age)
        }
        blockErr.classList.remove('p-hide')
    }



}

calculateur.addEventListener('keypress', (e) => {
    e.target.classList.remove('error-input')
})


function errInput(nameInput) {
    nameInput.classList.add('error-input')
}

function showResult(result) {
result = result.toFixed(0)
console.log(result);
    let  rightMenu = result
    console.log(goal);
if (goal.value === 'perdre') {
    rightMenu = Math.round(result / 100) * 100 - 300
} else if (goal.value === 'prendre') {
    rightMenu = Math.round(result / 100) * 100 + 300
} 

let text = ''

if (rightMenu < 1400 || rightMenu > 3500) {
    text = `
    <p class="result-wrong"><span class="result-wrong-title">Oops !</span> <br> Il semble que nous n'avons pas encore de menu pour vous, mais on travaille là-déssus ! Revenez nous voir ultérieurement</p>

    `
} else {
    text = `
    <p class="text-result">Votre besoin calorique journalier est <br>
    <span class="text--green">${result} calories</span></p>
    <p class="text-result">Voici le menu parfait pour atteindre votre objectif:</p>
    <div class="col-12 col-lg-10 result-banner">
    <div class="result-banner__img">
        <img class="banner__img" src="src/img/calculatrice/Banner_Menu.jpg" alt="Banner ">
    </div>
    <article class="result-banner__text">
        <h3 class="calculateur-title-result">Menu ${rightMenu} calories</h3>
        <a class="btn-link btn-results" href="menu.html?${rightMenu}">Decouvrir</a>
    </article>

    </div>
    `
}


results.insertAdjacentHTML('afterbegin', text)

}





