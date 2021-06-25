// Créer les fonctions JS pour valider le contenue du formulaire [Ko]

// let mousemove = document.querySelector('.mousemove');

// window.addEventListener('mousemove', function(e) {
// 	mousemove.style.left = e.pageX + 'px';
// 	mousemove.style.top = e.pageY + 'px';
// 	// console.log(e.pageX + "px")
// });

const keyPressContainer = document.getElementById('keypress');
const key = document.getElementById('key');
const body = document.querySelector('body')

document.addEventListener('keypress', function(e) {
        // console.log(e.key);
    key.textContent = e.key

    if (e.key == "j") {
    keyPressContainer.style.background = "red"
    }else if (e.key =="r") {
    keyPressContainer.style.background = "teal"
    }else{
    keyPressContainer.style.background = "none"
    }
});

const test = document.getElementById('azz');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const answer = document.querySelector('.response');

test.addEventListener('click', function() {
	//  console.log(btn1,btn2)
	// console.log("j'ai clique")
});

btn1.addEventListener('click', function() {
	answer.classList.add('show');
	answer.style.backgroundColor = 'green';
});

btn2.addEventListener('click', function() {
	answer.classList.add('show');
	answer.style.backgroundColor = 'red';
});


const inputName = document.querySelector('#nom');
const select = document.getElementById("select")
const form = document.querySelector(".formBox")
// const dataForm = document.querySelector('.dataForm')

let pseudo = '';
let language = ""

inputName.addEventListener('input', function(e) {
	pseudo = e.target.value
    console.log(pseudo);
});
select.addEventListener('input', function (e) {
    language = e.target.value
    // console.log(language);
})
form.addEventListener('submit', function (e) {
    e.preventDefault()

    if(cgv.checked){
        document
        .querySelector('.dataForm').innerHTML = `
        <h3>${pseudo}</h3><h4>votre language préférer est : ${language} </h4>
        `
    }else{
        alert("veuillez valider la cgv")
    }
})


// // /----------------------------
// // forEach
// const boxes = document.querySelectorAll(".box")

// // console.log(boxes)

// boxes.forEach(function(eachBox){
//   eachBox.addEventListener("click", function (e) {
//     eachBox = e.target
//     console.log(eachBox)
//   })
// })




// /----------------------------
// forEach
const boxes = document.querySelectorAll(".box")

// console.log(boxes)

boxes.forEach(function(eachBox){
    // eachBox.classList.add("")
  eachBox.addEventListener("click", function (e) {
    e.target.style.transform = "scale(0.9)" 
    // console.log(e.target)
  })
})

const questionContainer = document.getElementById("azz")
const containerLanguage = document.getElementById("containerLanguage")

questionContainer.addEventListener("click", function (e) {
    setTimeout(function () {
        questionContainer.style.borderRadius = "300px"
        // alert("yes son !")
    }, 2000)
})

let interval = setInterval(() => {
    document.body.innerHTML += `<h3> remy lacroix</h3>`
}, 10000);

document.body.addEventListener("click", function(e){
    console.log(e)
clearInterval(interval)
    // (console.log(e))
     
})
// ---------------------------
// setproperty
// const header = document.querySelector("header")
// window.addEventListener("mousemove",function(e) {
//     // console.log(header)
//     header.style.setProperty("--x", e.layerX + "px")
//     header.style.setProperty("--y", e.layerY + "px")
//     console.log(e.layerX);
// })




// consigne de validiter dans un champ input
// regex
// function isValid(value) {
//     return /^e[0-9]{3,}$/.test(value);
// }
