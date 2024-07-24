window.onload = function() {

    fetch('https://fakestoreapi.com/products',{
        method: 'GET'
    })
   
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        var parent = document.getElementById("products");

        for(var i=0; i<data.length; i++){
            var item = data[i]
            var div = `
                <div class="item" >
                    <img src="${item.image}" />
                    <h1>${item.title}</h1>
                    <p>$${item.price}</p>
                    <div class="action" >
                        <button class="buy-btn" >Buy Now</button>
                        <button class="cart-btn" >Add to cart</button>
                    </div>
                </div>
            
            `
           parent.innerHTML += div;
        }
    })
    
    .catch(function(err) {
        console.log(err);
    });


}