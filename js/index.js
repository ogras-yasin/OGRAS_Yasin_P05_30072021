main()
function main() {
  getTeddies()
}

function getTeddies() {

  fetch("http://localhost:3000/api/teddies")
    .then((res) => {
      if (res.ok) {
        console.log('could you read me' + (res.ok) +'   aga ? ya A ya Bismil')
        return res.json();
      }
      else {
        console.error('response != ok ')
      }
    })
    .then((teddies) => {
      console.log(teddies)
     
      // .catch((err) => {
      //   console.error('Error', err)
      //   // Une erreur est survenue
      // });

      // createTeddyCard = (teddy) => {
      // get teddied container
      // create teddy card 
      // add somehow teddy.name 


    }

    )
}