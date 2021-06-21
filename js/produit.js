// ajouter main function ========================================+++++++
/* Récupération de l'id du produit sélectionné dans la page précédente */
// const getProductId = window.location.search.substr(1);
const getProductId = new URL(window.location.href).searchParams.get('_id');
console.log(getProductId);

/* Récupération du produit avec l'id associé depuis le serveur */

fetch(`http://localhost:3000/api/teddies/${getProductId}`).then((response) => response.json()).then((response) => {
	let teddiesCardHTML = '';

	// Affichage du produit / personalisation
	teddiesCardHTML += `<div class="container">
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
                  <p class="card-text"> prix :  ${(response.price / 100).toFixed(2).replace('.', ',')}€ </p> 
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
    </div> `;

	document.getElementById('item__Product').innerHTML = teddiesCardHTML;

	//Création d'une function foreach pour afficher mes choix de couleurs
	let choice = document.querySelector('.color__choice');
	response.colors.forEach(function(colors) {
		let opt = document.createElement('option');
		opt.value = colors;
		opt.textContent = colors;
		// on integre l'enfant au parent
		choice.appendChild(opt);
	});

		addItemCart(response);

});

// d'enregistrer les informations lors du clique du client su btn ajouter panier
// enregistrer l'information localstorgae
// reutilisler l'information( le nombre d'ourson que le client a choisi)
// creer objet
function addItemCart(item){
	let unTableau = [
		{
			quantity: 0,
			teddyId: getProductId,
			nom: item.name,
      prix : (item.price / 100).toFixed(2).replace('.', ','),
      image : item.imageUrl,
      couleur : item.colors
    //   "colors": ["Tan", "Chocolate", "Black", "White"],
    // "_id": "5be9c8541c9d440000665243",
    // "name": "Norbert",
    // "price": 2900,
    // "imageUrl": "teddy_1.jpg",
    
		}
	];

	// tbl qui contient tout l'item
	localStorage.setItem('cart', JSON.stringify(unTableau));
	console.log(localStorage.getItem('cart'));

	console.log(unTableau);
}