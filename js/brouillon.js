

// const buttonAdd = document.getElementsByClassName('add-icon');
// console.log(buttonAdd);
// for (const add of buttonAdd) {
// 	add.addEventListener('click', addProduct);
// }

// // rajouter une condition une fois cette page terminer : cache la visibilite si aucun cart present
// const emptyBasket = document.getElementById('emptyBasket');
// // console.log(emptyBasket)

// if (cart == null) {
// 	const emptyBasket = document.getElementById('emptyBasket');
// 	emptyBasket.classList.add('visibleBasket');
// 	console.log(emptyBasket);
// }


// **** au chargement de la page les oursons sont lances automatiquement *******
// c'est la meme chose ces 2 methodes 
window.onload = getTeddies();
// main()
// function main() {
//   getTeddies();
// }
// _-----------------------partie produit _----------------------------


const cart = JSON.parse(localStorage.getItem('cart'));
const url = `http://localhost:3000/api/teddies/`;
console.log(cart);


for (let product of cart) {
    
    


	function displayinHTML() {
		// console.log(product)
		const indexProduct = cart.indexOf(product);
		// console.log(indexProduct)
		const Product_Id = document.getElementById('productsBasket');
		Product_Id.innerHTML += `<tr class="text-center">
            <td class="w-25">
            <img src="${product.image}" class="img-fluid img-thumbnail" alt="${product.name}">
            </td>
            <td class="w-25">
                id : ${product.id}
                nom : ${product.name}
            </td>
            <td>
                test indexProduct : ${indexProduct}
            </td>
            <td>
                <button type="button" class="aga add-minus-icon minus-icon" data-index="${indexProduct}"><span class="fas fa-plus-square text-danger" data-index="${indexProduct}">-</span></button>
                <span id="productQuantity" class="data-index=${indexProduct}">${product.quantity}</span>
                <button type="button" class="aga add-minus-icon add-icon"   data-index="${indexProduct}"><span class="fas fa-plus-square text-success" data-index="${indexProduct}">+</span></button>
            </td>
            <td> 
                <span>${convertPrice(product.price)}</span>
            </td>
            <td>
                <span> ${convertPrice(product.price * product.quantity)}</span>
            </td>
        </tr>
            `;
	}
	displayinHTML();
}


// ---------------- maniplulation de produit ---------------
// ajouter produit
const buttonAdd = document.getElementsByClassName('add-icon');
console.log(buttonAdd);
for (const add of buttonAdd) {
	add.addEventListener('click', addProduct);
}
function addProduct(event) {
	const index = event.target.getAttribute('data-index');
	cart[index].quantity++;
	localStorage.setItem('cart', JSON.stringify(cart));
	location.reload();
}

// diminuer produit
const buttonMinus = document.getElementsByClassName('minus-icon');
for (const minus of buttonMinus) {
	minus.addEventListener('click', minusProduct);
}

function minusProduct(event) {
	const index = event.target.getAttribute('data-index');
	cart[index].quantity--;
	localStorage.setItem('cart', JSON.stringify(cart));
	location.reload();
}

//vide le panier
const buttonClearBASKET = document.getElementById('cartClear');
buttonClearBASKET.addEventListener('click', () => {
	localStorage.clear();
	location.reload();
});

let totalBasket = 0;
// calcul du total
function displayTotalBasket() {
	cart.forEach((teddy) => {
		// console.log(teddy)
		totalBasket = totalBasket + teddy.price * teddy.quantity;
	});
	return totalBasket;
}
//affiche le totalBasket
function totalPrice() {
	const totalPrice = document.getElementById('totalPrice');
	totalPrice.innerHTML = convertPrice(displayTotalBasket());
}
//affiche le prix total
totalPrice();

// convertir le prix
function convertPrice(productPrice) {
	let price = `${productPrice}`;
	price = Intl.NumberFormat('fr-FR', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 2
	}).format(price / 100);
	return price;
}

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
        prenom = null
	} else {
        errorDisplay('prenom','', true)
        prenom = value
    }
};
const nomChecker = (value) => {
	console.log(value);
	if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
		console.log('test');
        errorDisplay("nom","mettre un nom correcte")
        nom = null
	} else {
        errorDisplay('nom','', true)
        nom = value
    }
};
const emailChecker = (value) => {
	console.log(value);
    if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		console.log('test');
        errorDisplay("email","Veuillez fournir un email correcte")
        // ds html type="email" 
        email = null
	} else {
        errorDisplay('email','', true)
        email = value
    }
};
const adresseChecker = (value) => {
	console.log(value);
    if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
		console.log('test');
        errorDisplay("adresse","Veuillez fournir une adresse correcte")
        adresse = null
	} else {
        errorDisplay('adresse','', true)
        adresse = value
    }
};
const codePostalChecker = (value) => {
	console.log(value);
    if (!value.match(/^[\d]$/)) {
		console.log('test');
        errorDisplay("codePostal","code postal invalid")
        codePosatl = null
	} else {
        errorDisplay('codePostal','', true)
        codePostal = value
    }
};
const villeChecker = (value) => {
	console.log(value);
    if (!value.match(/^[a-zA-Z_.-]*$/)) {
		console.log('test');
        errorDisplay("ville","Ville invalide")
        ville = null
	} else {
        errorDisplay('ville','', true)
        ville = value
    }
};
// const aga = document.getElementsByClassName("nom-container")
// console.log(aga)
// console.log(document.querySelector(".nom-container > span"))
// document.querySelector(".nom-container > span").textContent="aga"

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
		errorComment.textContent = "bravo";
        console.log('test4')
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
				adresseChecker(e.target.value);
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

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
    if (prenom !== null && nom !== null && ville !== null && adresse !== null && email !== null)  {
        const products = cart.map(item => item.id)
        // console.log(product)
    const contact = {
        firstName : prenom,
        lastName : nom ,
        city : ville,
        address : adresse,
        email : email
        }
        const data = {contact,products}
        const option = 
        {method: "POST" ,
        body : JSON.stringify(data),
        headers : {"Content-Type": "application/json"}
    }
    fetch(url + "order" , option).then((response) => response.json())
    .then((response) => {
        localStorage.removeItem("cart");
        localStorage.setItem("total", totalBasket)
        localStorage.setItem("orderId", response.orderId)
        
    })
    .catch((error) => console.error(error));

        console.log(data)
        alert("Votre formulaire a été enregistrer, nous vous remercions de votre achat")
    } else {
        alert('Vérifier votre formulaire')
    }
    
    
})