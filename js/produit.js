// **** au chargement de la page l'ourson est lancee automatiquement *******
let getProductId = '';

window.onload = getTeddies();
// // main();
// function main() {
// 	getTeddies();
// }

function getTeddies() {
	/* Récupération du produit avec l'id associé depuis le serveur */
	getProductId = new URLSearchParams(window.location.search).get('_id');
	console.log(getProductId);

	fetch(`http://localhost:3000/api/teddies/` + getProductId)
		.then((response) => response.json())
		.then((response) => {
			let teddiesCardHTML = '';
			console.log(response)

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
                  <button class="btn btn-success mx-5 addCart">Ajouter panier</button>
                </div>
              </div>
            </div>
        </div>
    </div> `;

			document.getElementById('item__Product').innerHTML = teddiesCardHTML;

			//Création d'une function pour afficher mes choix de couleurs
			let choice = document.querySelector('.color__choice');

			response.colors.forEach(function(colors) {
				let opt = document.createElement('option');
				opt.value = colors;
				opt.textContent = colors;
				// on integre l'enfant au parent
				choice.appendChild(opt);
			});
			document.querySelector('.addCart').addEventListener('click', function() {
				let cart = JSON.parse(localStorage.getItem('cart'));
				if (cart == null) {
					cart = [];
				}
// j'aimerais verifier l'id de mon getProductId. si l'id existe deja alors incrementer la  quantite
// sinon creer un object 
	let isAlreadyPresent = false
	let productindex =""

	// verifie si l'id correspond parmi tous les objects dans le tbl 
		for (let i = 0; i < cart.length; i++) {
			if (cart[i].id == getProductId ) {
				isAlreadyPresent = true;
				productindex= cart[i]
				}
			}
			// si le produit n'est pas present alors cree l'Object produit 
		if (isAlreadyPresent == false) cart.push( 
			{id : getProductId,
			name :response.name,
			price : response.price,
			description : response.description,
			image : response.imageUrl,
			quantity : 1
			}) ;
			// si le produit est present alors incrementer la quantite 
			else{
				console.log("yayyyyyyyyyyy : " + productindex.quantity)
				productindex.quantity++
			}

			console.log(response.name)
			console.log("t'as reussi : " + getProductId);

			document.getElementById('quantite-elt-panier').textContent = `(${cart.length})`;
			localStorage.setItem('cart', JSON.stringify(cart));
			});
			// addItemCart(response);
		})
		.catch((error) => console.error(error));
}


				// let isAlreadyPresent = false;
				// 	for (let i = 0; i < cart.length; i++) {
				// 		// verifie si l'id correspond parmi tous les objects dans le tbl 
				// 		if (cart[i].id == getProductId ) {
				// 			// cart[i].quantity++
				// 			console.log('aga')
				// 			console.log(cart[i])
				// 			isAlreadyPresent = true;
				// 			console.log(isAlreadyPresent)
				// 		}
				// 			}
				// 			// else{
				// 				// console.log(isAlreadyPresent)
				// 	if (isAlreadyPresent = true){
				// 		console.log("iiiiiiiiiiiiii")


// document.querySelector('.addCart').addEventListener('click', function() {
// 	let cart = JSON.parse(localStorage.getItem('cart'));
// 	if (cart == null) {
// 		cart = [];
// 	}
// 	cart.forEach(element => {
// 		console.log(element)
// 	});
// 	// for (let i = 0; i < cart.length; i++) {
// 	// 	// verifie si l'id correspond parmi tous les objects dans le tbl 
// 	// 	if (cart[i].id == getProductId ) {
// 	// 		cart[i].quantity++
// 	// 	} 
// 			// }
// 		else{

// 			cart.push( 
// 			{id : getProductId,
// 			name :response.name,
// 			price : response.price,
// 			description : response.description,
// 			image : response.imageUrl,
// 			quantity : 0
// 			});

// 		console.log(response.name)
// 		console.log("t'as reussi : " + getProductId);

		
	

// 	}
// 		document.getElementById('quantite-elt-panier').textContent = `(${cart.length})`;
// 		localStorage.setItem('cart', JSON.stringify(cart));
		
// 	});
// // addItemCart(response);
// })
// .catch((error) => console.error(error));
// }


// ------------------------
// let aga = document.getElementById("aga")
// aga.addEventListener("click", (e) => {
// 	// if(e.target.id == "javascript"){
// 	// 	document.getElementById('javascript').style.background = "red"
// 	// }
// 	switch (e.target.id) {
// 		case "javascript":
// 		document.getElementById('aga').style.background = "red";
// 		break;
// 		case "python":
// 		document.getElementById('aga').style.background = "purple";
// 		break;
// 		case "php":
// 		document.getElementById('aga').style.background = "cyan";
// 		break;
// 		default:
// 			null;
// 	}
// })
// const target = document.getElementById('target');
// let array = [ 'développeur', 'pilote de drone', 'créatif' ];
// let wordIndex = 0;
// let letterIndex = 0;

// const createLetter = () => {
// 	const letter = document.createElement('span');
// 	target.appendChild(letter);
// 	letter.textContent = array[wordIndex][letterIndex];
// 	// console.log(target.appendChild(letter));
// };
// createLetter();




// // "pierre" est une variable qui contient un objet. Par abus de langage,
// //  *on dira que notre variable EST un objet*/
// let pierre = {
//     //nom, age et mail sont des propriétés de l'objet "pierre"
//     nom : ['Pierre', 'Giraud'],
//     age : 29,
//     mail : 'pierre.giraud@edhec.com',

//     //Bonjour est une méthode de l'objet pierre
//     bonjour: function(){
//         alert('Bonjour, je suis ' + pierre.nom[0] + ' et mon nom de famille est : ' + pierre.nom[1] + ', j\'ai ' + this.age + ' ans');
//     }
// };

// refProduct = [{
// 	quantity: 0,
// 	teddyId: getProductId,
// }]

// var family = {
//     pere : "zekeriya",
// 	mere : "gulsum",
// 	soeur : false ,
// 	frere : ["oguzhan","gokturk"],
// 	cousin : ["omer","oguz","talha"]
// };

// //----------------------------
// // refProduct[0].quantity = refProduct[0].quantity + 1;
// 			// console.log(refProduct[0].quantity);
// 			// localStorage.setItem('cart', JSON.stringify(refProduct));
// 			// // panier modif
// // )
