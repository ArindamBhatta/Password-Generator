const inputSlider = document.getElementById('inputSlider') // Input type range which is sliding
const sliderValue = document.getElementById('sliderValue') //which show the sliding value
const passBox = document.getElementById('passBox') // passBox is the input value type text
const lowercase = document.getElementById('lowercase') //
const uppercase = document.getElementById('uppercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const genBtn = document.getElementById('genBtn') //its generate pasword button
const copyIcon = document.getElementById('copyIcon') //copy icon it sybleing of passbox

//Showing input slider value 

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', function(){
    sliderValue.textContent = inputSlider.value
})

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})


let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

//Function to Generate Password

function generatePassword() {
    let genPasword = '';
    let allChars = '';

    if (lowercase.checked === true){
        allChars = allChars + lowerChars
    } else ''
    if (uppercase.checked === true){
        allChars = allChars + upperChars
    } else''
    if (numbers.checked === true){
        allChars = allChars + allNumbers
    }else''
    if (symbols.checked === true){
        allChars = allChars + allSymbols
    } else''

    if(allChars === '' || allChars === 0) return

    for (let i = 0; i < inputSlider.value; i++) {
        let Randomno = Math.floor(Math.random()*allChars.length + 1)  
        genPasword = genPasword + allChars.charAt(Randomno)
    }
    return genPasword
}

    copyIcon.addEventListener('click', () => {
        if (passBox.value != '' || passBox.value.length >= 1) {
         window.navigator.clipboard.writeText(passBox.value)
         copyIcon.innerText = "check";
        }

        setTimeout(()=>{
            copyIcon.innerHTML = 'content_copy'
        },3000)
})









