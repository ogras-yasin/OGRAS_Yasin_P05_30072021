// recup les donnes de localstorage 
const cart = JSON.parse(localStorage.getItem('cart'));
const customer = JSON.parse(localStorage.getItem("contact"))
console.log(customer.firstName)
const url = `http://localhost:3000/api/teddies/`;
console.log(cart);
// const idCommande = JSON.parse(localStorage.getItem('orderId'));
const idOrder = localStorage.getItem('orderId');
const confirmationPrice = localStorage.getItem('total');
const orderInformation = document.getElementById("orderInformation")

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
convertPrice(confirmationPrice)
console.log(convertPrice(confirmationPrice))

orderInformation.innerHTML = `
<p class="customer"> <strong>${customer.lastName} ${customer.firstName}</strong>, merci pour votre achat sur notre site web </p>
<p class="customer"> Votre facture d'un montant total de ${convertPrice(confirmationPrice)} a été validé
<p class="customer">Votre réference est le : ${idOrder} </p>

`

const h2 = document.querySelector("h2")
console.log(h2)
console.log(cart)
console.log(idOrder)
// console.log(totalPrice)

function displayConfirmation(){

}