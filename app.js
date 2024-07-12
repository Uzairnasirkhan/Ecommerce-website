fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then(result => {
        //console.log("result", result)
        uiRender(result)
    })
    .catch(error => {
        console.log("error", error)
    })

const uiRender = (items) =>{
    const cardsParent = document.getElementById("cardsParent")
    for(var product of items){
         // console.log("product",product)
          cardsParent.innerHTML+= `
          
          <div class="card" style="width: 18rem;">
            <img src=${product.image} class="card-img-top" height="200px" width="150px" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.title.slice(0,60)}</h5>
              <p class="card-text">${product.description.slice(0,100)}</p>
              <h5>$ ${product.price}</h5>
              <a href="#" class="btn btn-primary">Buy now</a>
            </div>
          </div>
          
          `
    }

}

