const cart = JSON.parse(localStorage.getItem('cart'));
const url = `http://localhost:3000/api/teddies/`;
let totalBasket = 0;
const emptyBasket = document.getElementById('emptyBasket');
const table = document.getElementById("table")
const form = document.querySelector("form")
const cartClear = document.getElementById("cartClear")

console.log(form)


if (cart != null){
	function displayinHTML(cart) {
		
		for (let product of cart) {
			
			totalBasket += product.price // prixtotal
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
}

// cacher visibilite tableau et du champ
if (cart == null) {
	emptyBasket.classList.add('visibleBasket');
	table.style.visibility = "hidden" 
	form.style.visibility = "hidden" 
	cartClear.style.visibility = "hidden" 
}
// ---------------- manipulation de produit ---------------


// vide le panier  
document.getElementById('cartClear').addEventListener('click', function cartClear(e) {
	localStorage.clear();
	location.reload();
	console.log(e)
});


// ------------------- champ formulaire --------------

inputs = document.querySelectorAll('input');
// variable vide 
let prenom, nom, email, adresse, codePostal, ville;

const prenomChecker = (value) => {
	if (!value.match(/^[a-zA-Z_.-]*$/)) {
        return false
	} else {
		return true
	}
};
const nomChecker = (value) => {
	if (!value.match(/^[a-zA-Z_.-]*$/)) {
        return false
	} else {
        return true
	}
};
const emailChecker = (value) => {
	if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return false
	} else {
        return true
	}
};
const adresseChecker = (value) => {
	if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        return false
	} else {
        return true
	}
};
const codePostalChecker = (value) => {
	if (!value.match(/^[\d]*$/)) {
        return false
	} else {
        return true
	}
};
const villeChecker = (value) => {
	if (!value.match(/^[a-zA-Z_.-]*$/)) {
        return false
	} else {
        return true
	}
};

const errorDisplay = (tag, message, valid) => {
	const container = document.querySelector('.' + tag + '-container');
	const errorComment = document.querySelector('.' + tag + '-container > span');
	if (!valid) {
		console.log("pas valide")
		container.classList.add('error');
		errorComment.textContent = message;
	} else {
		console.log("valide")
		container.classList.remove('error');
		errorComment.textContent = message
	}
};

inputs.forEach(function(input) {
	input.addEventListener('input', (e) => {

		switch (e.target.id) {
			case 'prenom':
				// si prenomChecker invalide (non conforme au regex) alors message d'erreur + bloquer  l'envoie du formulaire 
				const prenomVerify = prenomChecker(e.target.value);
				if (prenomVerify == false) { errorDisplay('prenom', 'Veuillez fournir un prénom correcte');
				prenom = null
				} else { // recuperation de la valeur du champ 
					prenom = e.target.value
					errorDisplay('prenom', '', true)
				}
				break;
				// la même méthodologie pour tous les autre champs
			case 'nom':
				const nomVerify = nomChecker(e.target.value);
				if (nomVerify == false){errorDisplay('nom', 'mettre un nom correcte')
				nom = null;
				} else {
					nom = e.target.value
					errorDisplay('nom', '', true)
				}
				break;
			case 'email':
				const emailVerify = emailChecker(e.target.value);
				if (emailVerify == false) {errorDisplay('email', 'Veuillez fournir un email correcte')
				email = null
				} else {
					email = e.target.value
					errorDisplay('email', '' , true)
				}
				break;
			case 'adresse':
				const addrese = adresseChecker(e.target.value);
				if (addrese == false) {errorDisplay('adresse', 'Veuillez fournir une adresse correcte')
				adresse = null
				} else{  
					adresse = e.target.value
					errorDisplay('adresse', 'Ve', true);
				}

				break;
			case 'codePostal':
				 const codePostalVerify = codePostalChecker(e.target.value);
				 if (codePostalVerify == false ) {errorDisplay('codePostal', 'cest faux')
				codePostal = null
				} else {
					codePostal = e.target.value
					errorDisplay('codePostal', '', true);
				}
				break;
			case 'ville':
				const villeVerify = villeChecker(e.target.value);
				if (villeVerify == false) { errorDisplay('ville', 'Ville invalide')
				ville = null 
				} else {
					ville = e.target.value
					errorDisplay('ville', ' s', true)
				}
				break;
			default:
				'default value ';
				break;
		}
	});
});



form.addEventListener('submit', function testForm(e) {
	e.preventDefault()
	console.log(e);
	if (prenom !== null && nom !== null && ville !== null && adresse !== null && email !== null) {
		// recuperation de l'id 
		const products = cart.map((item) => item.id);
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
				console.log(response)
				localStorage.setItem('orderId', response.orderId);
				localStorage.setItem('contact', JSON.stringify(contact));
				console.log(response)
				window.location.replace('./order.html');
			})
			.catch((error) => console.error(error));

		alert('Votre formulaire a été enregistrer, nous vous remercions de votre achat');
	} else {
		alert('Vérifier votre formulaire');
	}
});
