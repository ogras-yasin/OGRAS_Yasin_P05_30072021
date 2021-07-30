// recup les donnes de localstorage 

const customer = JSON.parse(localStorage.getItem("contact"))
const idOrder = localStorage.getItem('orderId');
const confirmationPrice = localStorage.getItem('total');
const orderInformation = document.getElementById("orderInformation")

function displayConfirmation (commandInformation ){
orderInformation.innerHTML =  `
<p class="customer"> <strong>${commandInformation.lastName} ${commandInformation.firstName}</strong>, merci pour votre achat sur notre site web </p>
<p class="customer"> Votre facture d'un montant total de ${(confirmationPrice/100.).toFixed(2).replace('.' , ',')} € a été validé
<p class="customer">Votre réference est le : ${idOrder} </p>
`
}

displayConfirmation(customer)
