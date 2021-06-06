function getTeddies() {
    fetch("http://127.0.0.1:3000/api/teddies")
    .then((res) =>{
      if (res.ok) {
        return res.json();
      }
      else {
          console.error('response != ok ')
      }
    })
    .then((teddies) => {
        console.log(teddies)
        console.log("duy sesimi")
    //   document
    //       .getElementById("hello-result")
    //       .innerText = value.queryString.greetings;
    })
    .catch((err) => {
        console.error('Error', err)
      // Une erreur est survenue
    });

    createTeddyCard = (teddy) => {
        // get teddied container
        // create teddy card 
        // add somehow teddy.name 
        <div class="col-12 col-lg-4 my-1 my-md-5">
              <div class="card">
                <img src="images/teddy_1.jpg" alt="certificate" class="card-img-top product-image">
                <div class="card-body card-size">
                  <h5 class="card-title">teddy.name</h5>
    
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.!</p>
                  <a href="./teddy__1.html" class="btn btn-primary ">Voir produit</a>
                </div>
              </div>
            </div>

    }

  }








