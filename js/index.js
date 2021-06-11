//////////  Récupération des données ours en peluches avec l'API fetch.

// **** au chargement de la page les oursons sont lances automatiquement *******
main()
function main() {
  getTeddies();
}

function getTeddies() {

  fetch("http://localhost:3000/api/teddies")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      else {
        console.error('response != ok ')
      }
    })

    // get teddied container
    .then((teddies) => {
      console.log(teddies)
    })
    .catch((err) => {
      console.log('error', err)
    })
}


// Boucle pour récupére toutes les variables des produits + (Foreach)
for (let i = 0; i < response.length; i++) {
  console.log(response[i].name);
  let eachElt = response[i]

  // create teddy card 
  const createTeddyCard = (teddy) => {

    // creation des cartes de teddies  , Créer les élément, clone (prototype)
    createTeddyCard += `<li class="item">
          <div class="col-12 col-lg-4 my-1 my-md-5 ">
              <div class="card">
                  <img src="${eachElt.imageUrl}" alt="instructor" class="card-img-top product-image">
                  <div class="card-body ">
                  <h5 class="card-title">${eachElt.name}</h5>
                  <p class="card-text">${eachElt.description}</p>
                  <a href="./produit.html?${eachElt._id}" class="btn btn-primary ">Voir produit</a>
                  <span id="productPrice" class="text-sm font-bold bg-white px-2 py-1 rounded">${(eachElt.price / 100).toFixed(2).replace(".", ",")}</span>
                </div>
              </div>
            </div>
          `
  }
}




// const myfunction =((arg1) => {
//   return arg1
// })

// function myfunction (arg1) {
//   return arg1
// }


