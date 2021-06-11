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

// const myfunction =((arg1) => {
//   return arg1
// })

// function myfunction (arg1) {
//   return arg1
// }


const createTeddies = (teddies) => {
  teddies.forEach(teddy => {
    createTeddyCard(teddy)
  }
  )
}

// create teddy card 
const createTeddyCard = (teddy) => {

  `   <div class="col-12 col-lg-4 my-1 my-md-5">
        <div class="card">
          <!-- <img src="images/teddy_1.jpg" alt="certificate" class="card-img-top product-image"> -->
          <img id="productImage" class="rounded h-64 w-full object-cover" src="" alt="">
          <div class="card-body card-size">
            <!-- <h5 class="card-title">bobby fisher</h5> -->
            <h2 id="productName" class="font-bold ">${teddy.productName}</h2>
            <!-- <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.!</p> -->
            <p id="productDescription" class=" card-text text-black text-opacity-80 text-sm text-justify">description</p>
            
            <!-- <a href="./teddy__1.html" class="btn btn-primary ">Voir produit</a> -->
            <a id="productLink" class="btn btn-primary" href="">Voir produit</a>
            <!-- bisey yoktu  -->
            <span id="productPrice" class="text-sm font-bold bg-white px-2 py-1 rounded">prix</span>
          </div>
         </div>
        </div>   `
}
// console.log(teddy.Name)







function aga(num) {
  return num * 2
}
let result = aga(5)
console.log('resulat : ' + result)



let yoklama1 = [{
  nom: 'suleyman soylu',
  note: 20
}, {
  nom: "sedat peker ",
  note: 4
}, {
  nom: 'elvis',
  note: 10
}]

let yoklama2 = [{
  nom: 'erbakan',
  note: 20
}, {
  nom: "deniz baykal ",
  note: 4
}, {
  nom: 'ahsen Tv',
  note: 10
}]

// // Pour chaque eleve si moyenne < 10 alors afficher nom n'a pas la moyenne
// for (let i = 0; i < yoklama.length; i++) {
//   let sahis = yoklama[i]
//   // console.log(sahis)

//   if (sahis.note < 10) {
//     console.log(sahis.nom + 'na pas la moyenne')
//   } else {
//     console.log(sahis.nom + " a la moyenne")
//   }
// }

function quiALaMoyenne(eleves) {
  for (let i = 0; i < eleves.length; i++) {
    let eleve = eleves[i]
    if (eleve.note >= 10) {
      console.log(eleve.nom + ' a la moyenne ')
    }

  }

}

quiALaMoyenne(yoklama1)
quiALaMoyenne(yoklama2)



let phrase = "yarin turkiyenin maci var turkiyenin !"

let frequence = function () {

  let mots = phrase.split(" ")
  let compteur = {}
  for (let i = 0; i < mots.length; i++) {
    let mot = mots[i]
    if (compteur[mot] === undefined) {
      // compteur = compteur + 1
      compteur[mot] = 1
    } else {
      compteur[mot]++
    }
  }
  return compteur
}



// ***** comment fonctione les promesses en JS ******

// declaration

const calcul = new Promise(function (resolve, reject) {

  // ...
  const result = 4*10

  if (result) {
    resolve(result)
  } else {
    reject()
  }
})

// utilisation
calcul.then( function (a){
   
  console.log('hi ' + a)
})















