// **** au chargement de la page les oursons sont lances automatiquement *******
main()
function main() {
  getTeddies();
}
//////////  Récupération des données ours en peluches avec l'API fetch.
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

    // get teddies container
    .then((teddies) => {
      // console.log(teddies)
      createTeddiesCard(teddies)
    })
    .catch((err) => {
      console.log('error', err)
    })
//Je créer ma variable que je vais ajouter à mes elements
  let teddiesCardHTML = ""

  // Boucle pour récupére toutes les variables des produits + (Foreach)
  function createTeddiesCard(teddies) {
    for (let i = 0; i < teddies.length; i++) {
      console.log(teddies[i].name);
      let eachElt = teddies[i]

      // creation des cartes de teddies  , Créer les élément, clone (prototype)
      teddiesCardHTML += `<li class="item">
          <div class="col-12 col-lg-4 my-1 my-md-5 ">
          <div class="card">
          <img src="${eachElt.imageUrl}" alt="ourson " class="card-img-top product-image">
          <div class="card-body ">
          <h5 class="card-title">${eachElt.name}</h5>
          <p class="card-text">${eachElt.description}</p>
          <a href="./produit.html?${eachElt._id}" class="btn btn-primary ">Voir produit</a>
          <span id="productPrice" class="text-sm font-bold bg-white px-2 py-1 rounded">${(eachElt.price / 100).toFixed(2).replace(".", ",")}</span>
          </div>
          </div>
          </div>   
          </li>  `
    }
    // Ajouter mes element créer dans le HTML pour afficher mes produits
  document.getElementById('bear').innerHtml = teddiesCardHTML
  } 
}


// Salut je pense qu il faut declarer ta variable teddiesCardHtml 
// dans ta fonction createTeddiesCard et l ajouter au dom après la boucle de la fonction

