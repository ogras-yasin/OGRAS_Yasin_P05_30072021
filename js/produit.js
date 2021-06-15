

/* Récupération de l'id du produit sélectionné dans la page précédente */
const getProductId = window.location.search.substr(1);
console.log(getProductId)

/* Récupération du produit avec l'id associé depuis le serveur */

fetch(`http://localhost:3000/api/teddies/${getProductId}`)
  .then((response) => response.json())
  .then(response => {

    let teddiesCardHTML = "";

    // Affichage du produit / personalisation
    teddiesCardHTML +=

      `<div class="container">
        <div class="card mb-3" style="max-width: 2040px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="${response.imageUrl}" alt="..." class="img-fluid"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h2 class="card-title">Ours en peluche : ${response.name}</h2>
                  <p class="card-text">${response.description}</p>
                  <p class="card-text"> prix :  ${(response.price / 100).toFixed(2).replace(".", ",")}€ </p> 
                  <p class="card-text">Choisir la couleur de votre produit :</p>
                  <!-- choix de couleurs  --!>
                  <select class="color__choice" name="colors" id="select__color">
                  </select> <br>
                  <strong>quantité :</strong> 1
                  <a href="./teddy__1.html" class="btn btn-success mx-5 addCart">Ajouter panier</a>
                </div>
              </div>
            </div>
        </div>
    </div> `
 
    document.getElementById("item__Product").innerHTML = teddiesCardHTML;


    //Création d'une function foreach pour afficher mes choix de couleurs
    let choice = document.querySelector(".color__choice");
    response.colors.forEach (function (colors) {
        let option = document.createElement("option");
        // value permet de prendre la valeur que le tbl contient
        option.value = colors;
        option.textContent = colors;
        // on integre l'enfant au parent
        choice.appendChild(option);
    })

    // Évènement "click" : lance la fonction d'ajout du produit au panier

    let cartBtn = document.querySelector(".addCart");

    cartBtn.addEventListener('click', () => {
        let TeddyColorSelected = document.querySelector(".color__choice");
        // enregistrer le choix de la couleur de l'ourson 
        // response.selectColors = TeddyColorSelected.options[TeddyColorSelected.selectedIndex].value;
        addItemCart(response);
         /*puis ajouter ou enregistrer la valeur mais comment ?? */

    })
  })




  // Function ajout des articles au panier.
function addItemCart (item) {

  // variable tableaux
  let cartItem = []

  // stockage dans un objet
  let saveItemCart = {
      _id: item._id,
      imageUrl: item.imageUrl,
      name: item.name,
      price: item.price,
      quantity: 1,
      selectColors: item.selectColors
  }


 
    // Si sessionStorage est vide elle crée un nouveau tableau cartItem et l'enregistre dans le sessionStorage
    if (sessionStorage.getItem('anyItem') === null) {
        cartItem.push(saveItemCart);
        sessionStorage.setItem('anyItem', JSON.stringify(cartItem));
    } 
    // Sinon elle récupère le tableau du sessionStorage, ajoute le nouveau produit, et enregistre le nouveau tableau.
    else { 
    }}











//   function displayProduct (product){
// const templateElt = document.getElementById("templateProduct")
// const cloneElt = document.importNode(templateElt.content, true);


// cloneElt.getElementById("Product__teddy-name").textContent = product.name
// cloneElt.getElementById("Product__description").textContent = product.description
// cloneElt.getElementById("Product__price").textContent = product.price
// cloneElt.getElementById("Product__img").textContent = product.imageUrl


// document.getElementById("main").appendChild(cloneElt)
//   }
//   console.log(displayProduct)
//   console.log(displayProduct(getProductId))
//   displayProduct(getProductId)
