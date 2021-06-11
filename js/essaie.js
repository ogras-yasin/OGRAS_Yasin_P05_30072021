
fetch('http://localhost:3000/api/teddies')
.then((response) => response.json())
.then((response) => {

  console.log(response);

  //Je créer ma variable que je vais ajouter à mes elements
  let html = "";

  // Boucle pour récupére toutes les variables des produits (Foreach)
  for (let i = 0; i < response.length; i++) {
    console.log(response[i].name);

    //Html pur , Créer les élément, clone prototype
    html += `<li class="item">
    <h2 class="row">${response[i].name}</h2>
    <p class="row"><img src="${response[i].imageUrl}" alt="Images ours" style= "width:28rem; border-radius:5px;"></p>
    <p class="row">${response[i].description}</p>
    <p class="row">${(response[i].price / 100).toFixed(2).replace(".", ",")}€</p>
    <a class="row" href="./produit.html?${response[i]._id}" style= "background-color:#f3e9f1; box-shadow: 0px 0px 12px 0px white; margin:auto; width:100px; border-radius:15px; padding:10px;"><b>Voir l'article</b></a></li>`
  }

  // Ajouter mes element créer dans le HTML pour afficher mes produits
  document.getElementById("bear").innerHTML = html
})

// Message d'erreur
.catch(function(error) {
  alert(error)
})










// main()
// function main() {
//   getTeddies();

// }

// function getTeddies() {

  fetch("http://localhost:3000/api/teddies")
  .then((res) => {
    if (res.ok) {
      // console.log('   ya A')
      return res.json();
    }
    else {
      console.error('response != ok ')
    }
  })

// **************for and while  ***************

var nombre = 0;

while (nombre < 14) {

  nombre += 13
  // console.log(nombre)
}
// for (let i = 0; i< 10 ; i++){
//   console.log(i)
// }

let oyuncu = ["alemdar", "memati", "aslan bey"]

for (let i = 0; i < oyuncu.length; i++) {
  console.log('burasi kurtlar vadisi ' + oyuncu[i])
}


//********** */ utilisation de for dans un tbl tableau  *********
let yoklama = [{
  nom: 'suleyman soylu',
  note: 20
}, {
  nom: "sedat peker ",
  note: 4
}, {
  nom: 'elvis',
  note: 10
}]

// Pour chaque eleve si moyenne < 10 alors afficher nom n'a pas la moyenne
for (let i = 0; i < yoklama.length; i++) {
  let sahis = yoklama[i]
  // console.log(sahis)

  if (sahis.note < 10) {
    console.log(sahis.nom + 'na pas la moyenne')
  } else {
    console.log(sahis.nom + " a la moyenne")
  }
}






// /****************exemple return **********
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// expected output: 12

console.log(getRectArea(-3, 4));
// expected output: 0






let eleve1 = {
  nom: "jean" ,
  note : [15,3,14]
}
let eleve2 = {
  nom: "albert",
  note : [6, 18, 20]
}

let moyenne = function (notes) {
  let somme = 0
 for (let i=0 ; i < notes.length; i++){
   
  somme = somme + notes[i]
 }
 return somme / notes.length
}
// console.log(moyenne (eleve1.note))

let estMeilleur = function (a,b){
  return moyenne(a.note) > moyenne(b.note)
  
}
console.log(estMeilleur(eleve1, eleve2))




// ***** comment fonctione les promesses en JS ******

// declaration

const demarre = new Promise(function (resolve, reject) {

  // ...
  const isRunning = true

  if (isRunning === true) {
    resolve()
  } else {
    reject()
  }
})

// utilisation
demarre.then( function (){
   
  console.log('hi')
})