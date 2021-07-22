const cart = JSON.parse(localStorage.getItem('cart'));
const url = `http://localhost:3000/api/teddies/`;
let totalBasket = 0;

function displayinHTML(cart) {
	for (let product of cart) {
        totalBasket += product.price
		const Product_Id = document.getElementById('productsBasket');
		Product_Id.innerHTML += `<tr class="text-center">
            <td class="w-25">
            <img src="${product.image}" class="img-fluid img-thumbnail" alt="${product.name}">
            </td>
            <td class="w-25">
                 ${product.name}
            </td>
            <td> 
                <span>${product.price/100 +  ` €`}</span>
            </td>
        </tr>
            `;
	}
    const totalPrice = document.getElementById('totalPrice');
	totalPrice.innerHTML = totalBasket/100 +  ` €`;
}
window.onload = displayinHTML(cart);

// ---------------- maniplulation de produit ---------------


//vide le panier
 function buttonClearBASKET() {
	document.getElementById('cartClear');
	buttonClearBASKET.addEventListener('click', () => {
		localStorage.clear();
		location.reload();
	});
};

// calcul du total
// function displayTotalBasket() {
// 	cart.forEach((teddy) => {
// 		// console.log(teddy)
// 		totalBasket = totalBasket + teddy.price * teddy.quantity;
// 	});
// 	return totalBasket;
// }

//affiche le totalBasket
// function totalPrice() {
// 	const totalPrice = document.getElementById('totalPrice');
// 	totalPrice.innerHTML = convertPrice(displayTotalBasket());
// }
//affiche le prix total
// totalPrice();

// convertir le prix
// function convertPrice(productPrice) {
// 	let price = `${productPrice}`;
// 	price = Intl.NumberFormat('fr-FR', {
// 		style: 'currency',
// 		currency: 'EUR',
// 		minimumFractionDigits: 2
// 	}).format(price / 100);
// 	return price;
// }

// rajouter une condition une fois cette page terminer : cache la visibilite si aucun cart present
const emptyBasket = document.getElementById('emptyBasket');
// console.log(emptyBasket)

if (cart == null) {
	const emptyBasket = document.getElementById('emptyBasket');
	emptyBasket.classList.add('visibleBasket');
	console.log(emptyBasket);
}

// ------------------- champ formulaire --------------

inputs = document.querySelectorAll('input');
// variable vide right ?
let prenom, nom, email, adresse, codePostal, ville;

const prenomChecker = (value) => {
	console.log(value);
	if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
		console.log('test');
		errorDisplay('prenom', 'Veuillez fournir un prénom correcte');
		prenom = null;
        return false
	} else {

		prenom = value;
        return true
	}
};
const nomChecker = (value) => {
	console.log(value);
	if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
		console.log('test');
		errorDisplay('nom', 'mettre un nom correcte');
		nom = null;
        return false
	} else {

		nom = value;
        return true
	}
};
const emailChecker = (value) => {
	console.log(value);
	if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		console.log('test');
		errorDisplay('email', 'Veuillez fournir un email correcte');
		email = null;
        return false
	} else {

		email = value;
        return true
	}
};
const adresseChecker = (value) => {
	console.log(value);
	if (!value.match(/^[a-zA-Z0-9_.- ]*$/)) {
		console.log('test');
		// errorDisplay('adresse', 'Veuillez fournir une adresse correcte');
		adresse = null;
        return false
	} else {

		adresse = value;
        return true
	}
};
const codePostalChecker = (value) => {
	console.log(value);
	if (!value.match(/^[\d]*$/)) {
		console.log('test');
		errorDisplay('codePostal', 'code postal invalid');
		codePostal = null;
        return false
	} else {

		codePostal = value;
        return true
	}
};
const villeChecker = (value) => {
	console.log(value);
	if (!value.match(/^[a-zA-Z_.-]*$/)) {
		console.log('test');
		errorDisplay('ville', 'Ville invalide');
		ville = null;
        return false
	} else {
		
		ville = value;
        return true
	}
};

const errorDisplay = (tag, message, valid) => {
	const container = document.querySelector('.' + tag + '-container');
	const errorComment = document.querySelector('.' + tag + '-container > span');
	// console.log(container)
	// console.log(errorComment)
	if (!valid) {
		container.classList.add('error');
		errorComment.textContent = message;
	} else {
		// valid = true
		container.classList.remove('error');
		errorComment.textContent = 'bravo';
		console.log('test4');
	}
};

inputs.forEach(function(input) {
	input.addEventListener('input', (e) => {
		// console.log(e.target.value, e.target.id);
		switch (e.target.id) {
			case 'prenom':
				prenomChecker(e.target.value);
				// errorDisplay('prenom', 'Veuillez fournir un prénom correcte');
				break;
			case 'nom':
				nomChecker(e.target.value);
				break;
			case 'email':
				emailChecker(e.target.value);
				break;
			case 'adresse':
				const addrese = adresseChecker(e.target.value);
                if (addrese = false) {errorDisplay('adresse', 'Veuillez fournir une adresse correcte')};
				break;
			case 'codePostal':
				codePostalChecker(e.target.value);
				break;
			case 'ville':
				villeChecker(e.target.value);
				break;
			default:
				'default value olmus';
				break;
		}
	});
});

const form = document.querySelector('form');

form.addEventListener('submit', function testForm(e) {
	// e.preventDefault()
	console.log(e);
	if (prenom !== null && nom !== null && ville !== null && adresse !== null && email !== null) {
		const products = cart.map((item) => item.id);
		// console.log(product)
		const contact = {
			firstName: prenom,
			lastName: nom,
			city: ville,
			address: adresse,
			email: email
		};
		const data = { contact, products };
		const option = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' }
		};
		fetch(url + 'order', option)
			.then((response) => response.json())
			.then((response) => {
				localStorage.removeItem('cart');
				localStorage.setItem('total', totalBasket);
				localStorage.setItem('orderId', response.orderId);
				localStorage.setItem('contact', JSON.stringify(contact));
				window.location.replace('./order.html');
			})
			.catch((error) => console.error(error));

		console.log(data);
		// console.log()
		alert('Votre formulaire a été enregistrer, nous vous remercions de votre achat');
	} else {
		alert('Vérifier votre formulaire');
	}
});
