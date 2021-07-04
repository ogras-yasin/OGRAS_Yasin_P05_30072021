const cart = JSON.parse(localStorage.getItem("cart")) 
console.log(cart)
// console.log(cart[2])

const emptyBasket = document.getElementById('emptyBasket')
    console.log(emptyBasket)

if (cart == null) {
    const emptyBasket = document.getElementById('emptyBasket')
    console.log(emptyBasket)
}

// on lit tous les objects a l'interieur du tableau cart 
for (let product of cart) {
    function displayinHTML(){
        // console.log(product)
        const Product_Id = document.getElementById("productsBasket")
        Product_Id.innerHTML += 
        `<tr class="text-center">
            <td class="w-25">
            <img src="${product.image}" class="img-fluid img-thumbnail" alt="${product.name}">
            </td>
            <td class="w-25">
                id : ${product.id}
            </td>
            <td>
                test 
            </td>
            <td>
                quantité : how to add quantity here
            </td>
            <td>
                <span>${convertPrice(product.price)}</span>
            </td>
            <td>
                sous total :
            </td>
        </tr>
            `
    }
displayinHTML()
}

// convertir le prix
function convertPrice(productPrice) {
    let price = `${productPrice}`;
    price = Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(price / 100);
    return price;
}



// supprimer le Panier
function clearBasket() {
    localStorage.clear();
}

//vide le panier
const buttonClearBASKET = document.getElementById("cartClear");
buttonClearBASKET.addEventListener("click", () => {
    clearBasket();
    location.reload();
});


//ajoute le tableau de commande
function displayProductListTable(product) {
    // const indexProduct = basket.indexOf(product);
    const productList = document.getElementById("productsBasket");
    productList.innerHTML += `
    <tr class="text-center">
        <td class="w-25">
            <img src="${product.imgurl}" class="img-fluid img-thumbnail" alt="${product.name}">
        </td>
        <td class="align-middle">
            <span>${product.name}</span>
        </td>

        
        <td class="align-middle">
            <span>${convertPrice(product.price)}</span>
        </td>
        <td class="align-middle bg-light">
            <span>${convertPrice(product.quantity * product.price)}</span>
        </td>
    </tr>`;
}
// console.log (displayProductListTable) 

// for (product of basket) {
//     displayProductListTable(product);
//     console.log(basket)
// }
// console.log(productList)

{/* <td class="align-middle">
<span>${product.option}</span>
</td> */}
{/* <td class="align-middle productQuantity">
            <button type="button" class="rounded minus data-toggle="modal" data-target="#exampleModal" data-index="${indexProduct}"><span class="fas fa-minus-square text-danger" data-index="${indexProduct}"></span></button>
            <span class="mx-0 mx-lg-3"> ${product.quantity}</span>
            <button type="button" class="rounded plus" data-toggle="modal" data-target="#exampleModal" data-index="${indexProduct}"><span class="fas fa-plus-square text-success" data-index="${indexProduct}"></span></button>
        </td> */}






// note  

// Créer les fonctions JS pour valider le contenue du formulaire [Ko]
// Créer la fonction JS qui envoie le formulaire au serveur avec les produits [KO]


//  comment disposer les elements de localStorage 
//  et presenter

// ----------------exercice----------------------
// Créer les fonctions JS pour valider le contenue du formulaire

// const keyPressContainer = document.getElementById('keypress');
// const key = document.getElementById('key');
// const body = document.querySelector('body')

// document.addEventListener('keypress', function(e) {
//         // console.log(e.key);
//     key.textContent = e.key

//     if (e.key == "j") {
//     keyPressContainer.style.background = "red"
//     }else if (e.key =="r") {
//     keyPressContainer.style.background = "teal"
//     }else{
//     keyPressContainer.style.background = "none"
//     }
// });

// const test = document.getElementById('azz');
// const btn1 = document.getElementById('btn-1');
// const btn2 = document.getElementById('btn-2');
// const answer = document.querySelector('.response');

// test.addEventListener('click', function() {
// 	//  console.log(btn1,btn2)
// 	// console.log("j'ai clique")
// });

// btn1.addEventListener('click', function() {
// 	answer.classList.add('show');
// 	answer.style.backgroundColor = 'green';
// });

// btn2.addEventListener('click', function() {
// 	answer.classList.add('show');
// 	answer.style.backgroundColor = 'red';
// });


// const inputName = document.querySelector('#nom');
// const select = document.getElementById("select")
// const form = document.querySelector(".formBox")
// // const dataForm = document.querySelector('.dataForm')

// let pseudo = '';
// let language = ""

// inputName.addEventListener('input', function(e) {
// 	pseudo = e.target.value
//     console.log(pseudo);
// });
// select.addEventListener('input', function (e) {
//     language = e.target.value
//     // console.log(language);
// })
// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     if(cgv.checked){
//         document
//         .querySelector('.dataForm').innerHTML = `
//         <h3>${pseudo}</h3><h4>votre language préférer est : ${language} </h4>
//         `
//     }else{
//         alert("veuillez valider la cgv")
//     }
// })


// // // /----------------------------
// // // forEach
// // const boxes = document.querySelectorAll(".box")

// // // console.log(boxes)

// // boxes.forEach(function(eachBox){
// //   eachBox.addEventListener("click", function (e) {
// //     eachBox = e.target
// //     console.log(eachBox)
// //   })
// // })




// // /----------------------------
// // forEach
// const boxes = document.querySelectorAll(".box")

// // console.log(boxes)

// boxes.forEach(function(eachBox){
//     // eachBox.classList.add("")
//   eachBox.addEventListener("click", function (e) {
//     e.target.style.transform = "scale(0.9)" 
//     // console.log(e.target)
//   })
// })

// const questionContainer = document.getElementById("azz")
// const containerLanguage = document.getElementById("containerLanguage")

// questionContainer.addEventListener("click", function (e) {
//     setTimeout(function () {
//         questionContainer.style.borderRadius = "300px"
//         // alert("yes son !")
//     }, 2000)
// })

// let interval = setInterval(() => {
//     document.body.innerHTML += `<h3> remy lacroix</h3>`
// }, 10000);

// document.body.addEventListener("click", function(e){
//     console.log(e)
// clearInterval(interval)
//     // (console.log(e))
     
// })
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
