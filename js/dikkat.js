
    // const boucleColor = function(color){
    //   for(i=0;i<color.length ;i++){
    //     // on rajoute a l'element select option maybe
    //     // yeah thats it  on rajoute au balise select option de ce fait on peut rajouter une liste 
    //     let opt = document.createElement("option");
    //     opt.textContent = color[i];                         /* ajouter option.value */
    //     // on integre l'enfant au parent
    //     choice.appendChild(opt);
    //   }
    // }
    // boucleColor(response.colors)


    let unTableau = [{ 
        quantity : 0,
        teddyId : getProductId,
        // nom : this.name
      
      }]
      // tbl qui contient tout l'item
      let cartString = JSON.stringify(unTableau)
      localStorage.setItem( "cart" , cartString);
      console.log(localStorage.getItem("cart"))




    let unTableau = [{ 
        quantity : 0,
        teddyId : "123"
      }]
        // let df = "d"
      // let cartItem = {
      // quantity : 0,
      // teddyId : "",/*implenter l'id de  /*
      
      // }
      
      // tbl qui contient tout l'item
      let cartString = JSON.stringify(unTableau)
      localStorage.setItem( "cart" , cartString);
      console.log(localStorage.getItem("cart"))


    //   ajouter panier + choix de couleur

     
	// Évènement "click" : lance la fonction d'ajout du produit au panier

	let cartBtn = document.querySelector('.addCart');

	cartBtn.addEventListener('click', () => {
		// let TeddyColorSelected = document.querySelector(".color__choice");
		// enregistrer le choix de la couleur de l'ourson
		// response.selectColors = TeddyColorSelected.options[TeddyColorSelected.selectedIndex].value;
		addItemCart(response);
		/*puis ajouter ou enregistrer la valeur mais comment ?? */
    })
    
    // onemli 


    let unTableau = [{ 
        quantity : 0,
        teddyId : "123"
      }]
        // let df = "d"
      // let cartItem = {
      // quantity : 0,
      // teddyId : "",/*implenter l'id de  /*
      
      // }
      
      // tbl qui contient tout l'item
      // let cartString = JSON.stringify(unTableau)
      localStorage.setItem( "cart" , JSON.stringify(unTableau));
      console.log(localStorage.getItem("cart"));





    // /   let df = "d"
// let cartItem = {
// quantity : 0,
// teddyId : "",/*implenter l'id de  /*
// let bes = 5
// let incremente = bes++
// }
// const btnInsert = document.getElementById("localstorage")

// localStorage.setItem("nom","albert")
// // console.log(localStorage.getItem("nom"))
// btnInsert.onclick = function(){
//   const showMe = bes
//   console.log(showMe)
// }

// // enregistrer ds le local storage 
// const local = localStorage.setItem( "cart" , JSON.stringify(objectProduct)); /*transformer le tableau en une chaine de charactere*/
// console.log(localStorage.getItem("cart"));

// if(localStorage.getItem("cart") != null){
//   console.log(unTableau.quantity)

  
// itemConfirmation();
// alert("Vôtre produit a été ajouter au panier");
// }




// olecemmmmmmmmmmmmmmm


// enregistrer localstorage puis sauvegarder er reutilisier ces informations 

// d'enregistrer les informations lors du clique du client su btn ajouter panier
// enregistrer l'information localstorgae
// reutilisler l'information( le nombre d'ourson que le client a choisi)
// creer objet 
 
// 92 170

// const getProductId =new  URL(window.location.href).searchParams.get('_id')

// // variable tableaux
// let cartItem = []

// let objectProduct = { 
//   quantity : 0,
//   teddyId : getProductId,
// }
//   // let df = "d"
// // let cartItem = {
// // quantity : 0,
// // teddyId : "",/*implenter l'id de  /*
// let bes = 5
// // let incremente = bes++
// // }
// const btnInsert = document.getElementById("localstorage")

// localStorage.setItem("nom","albert")
// // console.log(localStorage.getItem("nom"))
// btnInsert.onclick = function(){
//   const showMe = bes
//   console.log(showMe)
// }

// // enregistrer ds le local storage 
// const local = localStorage.setItem( "cart" , JSON.stringify(objectProduct)); /*transformer le tableau en une chaine de charactere*/
// console.log(localStorage.getItem("cart"));

// if(localStorage.getItem("cart") != null){
//   console.log(unTableau.quantity)

  
// itemConfirmation();
// alert("Vôtre produit a été ajouter au panier");
// }








/* Récupération de l'id du produit sélectionné dans la page précédente */
const productId = window.location.search.substr(1); 


/* Récupération du produit avec l'id associé depuis le serveur */ 

fetch(`http://localhost:3000/api/teddies/${productId}`)
    .then((response) => response.json())
    .then(response => {
        
    let html="";

    // Affichage du produit / personalisation
    html += `<h1 class="row">${response.name}</h1>
        <p class="row"><img src="${response.imageUrl}" alt="image d'ours en détails" style="width:90%; border-radius:5px;"></p>
        <p class="row">${response.description}</p>
        <p class="row"><b>Prix: ${(response.price/100).toFixed(2).replace(".",",")}€</b></p>
        <!-- Personalisation de la couleur -->
        <label for="select__color">
            <h3>Personnaliser votre ours</h3>
        </label>
            <select class="section__choice" name="colors" id="select__color">
            <!-- Mes choix de couleurs dans la function forEach --!>
            </select>
        <button class="addCart" style="border:0; background-color:#f3e9f1; padding:12px; border-radius:15px; box-shadow: 0px 0px 8px 0px white; margin-left:5px;"><b>Ajouter au panier</b><i class="fas fa-cart-arrow-down"></i></button>`
    document.getElementById("item__details").innerHTML = html;
    
    //Création d'une function foreach pour afficher mes choix de couleurs
    let choice = document.querySelector(".section__choice");
    
    response.colors.forEach (function (colors) {
        let option = document.createElement("option");
        option.value = colors;
        option.textContent = colors;
        choice.appendChild(option);
    })

    //Évènement "click" : lance la fonction d'ajout du produit au panier
    let cartBtn = document.querySelector(".addCart");

    cartBtn.addEventListener('click', () => {
        let select = document.querySelector(".section__choice");
        response.selectColors = select.options[select.selectedIndex].value;
        addItemCart(response);

    })
})
// Message d'erreur
.catch(e => {
    errorMessage();
    console.log(e);
});

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
    let otherItem = true;
    // Si sessionStorage est vide elle crée un nouveau tableau cartItem et l'enregistre dans le sessionStorage
    if (sessionStorage.getItem('anyItem') === null) {
        cartItem.push(saveItemCart);
        sessionStorage.setItem('anyItem', JSON.stringify(cartItem));
    } 
    // Sinon elle récupère le tableau du sessionStorage, ajoute le nouveau produit, et enregistre le nouveau tableau.
    else { 
        cartItem = JSON.parse(sessionStorage.getItem('anyItem'));

        cartItem.forEach((prod) => {
            if (item._id === prod._id && item.selectColors === prod.selectColors) {
                prod.quantity++;
                otherItem = false;
            }
        })
    if (otherItem) cartItem.push(saveItemCart);
    sessionStorage.setItem('anyItem', JSON.stringify(cartItem));
}

itemConfirmation();
alert("Vôtre produit a été ajouter au panier");
}