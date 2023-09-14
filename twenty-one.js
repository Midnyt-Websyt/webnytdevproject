let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

//HOME-PAGE HTML CODE//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="ecommerce.css">
  <link rel="stylesheet" href="css/all.min.css">
  <link rel="stylesheet" href="css/fontawesome.min.css">
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
  <title>Document</title>

  </head>

  <body>
     <header>
      <nav>
      <h2 class="logo">WEBNYTDEV</h2>
      <div class="input-container">
        <input type="text">
        <i class="fas fa-search"></i>
      </div>
      <div class="btn">
      <div class="add-to-cart">
        <h3 class="cart-text">Add to Cart</h3>
        <i class="fas fa-cart-shopping"></i>
      </div>
      <div class="fave">
        <h3 class="fave-text">Favorites</h3>
        <i class="fas fa-star"></i>
      </div>
      </div>
      </nav>
     </header>

     <main>
      <div class="container">
      <div class="home-text">
<h4>WEBNYTDEV shopping</h4>
<h2>SHOP FROM HOME <br><span>with</span> EASE </h2>

      </div>
      <div class="home-img">
<img src="image/samsungs5.jfif" alt="">
      </div>
    </div>

    <button><a href="shopping-cate.html">Shop Now</a></button>

     </main>
     <footer>
      <div class="offers">
        <h3>HUGE DISCOUNT</h3>
        <h4>25% discount</h4>
      </div>

      <div class="offers">
        <h3>FAST DELIVERY</h3>
        <h4>to all countries</h4>
      </div>
      <div class="offers">
        <h3>QUALITY PRODUCTS</h3>
        <h4>straight from factory </h4>
      </div>
     </footer>
  </body>




  //HOME-PAGE CSS CODE//

  body{
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(12, 12, 75);
    color: white;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.4);
    padding: 0 .3rem;
    cursor: pointer;
    position: fixed;
    right: 0; left: 0; top: 0;
  }
  .input-container{
   position: relative;
  }
  .input-container input{
    width: 25rem;
    padding: .3rem 4rem .3rem .2rem ;
    font-size: 1.2rem;
    outline: 0;
  
  }
  
  .input-container i{
    background-color:#666;
    color: black;
    padding:.6rem 1rem;
    position: absolute;
    top: 0rem; right: 0rem;
  }
  
  .btn{
    display: flex;
    gap: 2rem;
  }
  .add-to-cart, .fave{
    display: flex;
    align-items: center;
    gap: .3rem;
    border: 2px solid #333;
  background-color: #eee;
  color: black;
  height: 1.5rem;
  padding: .2rem;
  font-size: .9rem;
  }
  main{
    display: flex;
    flex-direction: column;
  }
  .container{
  padding-top: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: black;
  
  
  
  }
  
  .home-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home-text h4{
  color: blue;
  font-size:1.5rem ;
  }
  
  .home-text h2{
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home-text h2 span{
    color: gold;
    font-size: 1.3rem;
  }
  
  
  .home-img img{
  width: 23rem;
  height: 17rem;
  border-radius: 50%;
  }
  a{
    text-decoration: none;
  }
  
  footer{
    display: flex;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0.8);
    justify-content: space-around;
    padding: .6rem;
    background-color: rgb(29, 33, 46);
  }
  
  .offers{
    width: 17rem;
    background-color: #eee;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.5);
    border-radius: 1rem;
  
  }
  
  .offers h3{
    background-color: rgb(12, 12, 75);
    color: white;
    padding: 1rem;
    border-radius: 2rem;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.3);
  }
  
  .offers h4{
    background-color: yellow;
    color: black;
    padding: .5rem 0.7rem;
    border-radius: 2rem;
  }
  
  button{
    background-color: blue;
    border: 1px solid green;
    border-radius: 1rem;
    padding: .5rem;
    align-self: center;
    margin-bottom: .5rem;
    cursor: pointer;
  }
  
  button:hover{
    background-color: slateblue;
  }
  
  button a{
    color:white;
   font-size: 1.1rem;
  }


  //SHOPPING-PAGE HTML CODE//

  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="shopping-cate.css">
  <link rel="stylesheet" href="css/all.min.css">
  <link rel="stylesheet" href="css/fontawesome.min.css">
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
  <title>Document</title>

  </head>

  <body>
    
    <section>
      <h3 class="item-category">FASHION</h3>
<div class="container">

    <div class="products">
<img src="image/louisbelt.jfif" alt="">
<h3>LOUIS VITTON BELT</h3>
<div class="price">
<p class="previous-price">$50</p><p class="current-price">$30</p>
</div>
<div class="actions">
  <button class="cart">CART</button>
  <button class="order">ORDER</button>
  <button class="favorite">FAVORITE</button>
</div>
    </div>

    
    <div class="products">
      <img src="image/gucciishirt.jfif" alt="">
      <h3>GUCCI SHIRT</h3>
      <div class="price">
      <p class="previous-price">$100</p><p class="current-price">$70</p>
      </div>
      <div class="actions">
        <button class="cart">CART</button>
        <button class="order">ORDER</button>
        <button class="favorite">FAVORITE</button>
      </div>
      
          </div>
          
    <div class="products">
      <img src="image/pradasunglasses.jfif" alt="">
      <h3>PRADA SUNGLASSES</h3>
      <div class="price">
      <p class="previous-price">$30</p><p class="current-price">$10</p>
      </div>
      <div class="actions">
        <button class="cart">CART</button>
        <button class="order">ORDER</button>
        <button class="favorite">FAVORITE</button>
      </div>
      
          </div>

          <div class="products">
            <img src="image/poloshoe.jfif" alt="">
            <h3>POLO SHOE</h3>
            <div class="price">
            <p class="previous-price">$80</p><p class="current-price">$50</p>
            </div>
            <div class="actions">
              <button class="cart">CART</button>
              <button class="order">ORDER</button>
              <button class="favorite">FAVORITE</button>
            </div>
            
                </div>
  </div>
    </section>

    <section>
      <h3 class="item-category">ELECTRONIC</h3>
<div class="container">

    <div class="products">
<img src="image/samsungs5.jfif" alt="">
<h3>SAMSUNG GALAXY S5</h3>
<div class="price">
<p class="previous-price">$350</p><p class="current-price">$270</p>
</div>
<div class="actions">
  <button class="cart">CART</button>
  <button class="order">ORDER</button>
  <button class="favorite">FAVORITE</button>
</div>

    </div>

    
    <div class="products">
      <img src="image/hplaptop.jfif" alt="">
      <h3>HP LAPTOP CORE I7</h3>
      <div class="price">
      <p class="previous-price">$1500</p><p class="current-price">$1200</p>
      </div>
      <div class="actions">
        <button class="cart">CART</button>
        <button class="order">ORDER</button>
        <button class="favorite">FAVORITE</button>
      </div>
      
          </div>
          
    <div class="products">
      <img src="image/epsonprinter.jfif" alt="">
      <h3>EPSON PRINTER</h3>
      <div class="price">
      <p class="previous-price">$1000</p><p class="current-price">$800</p>
      </div>
      <div class="actions">
        <button class="cart">CART</button>
        <button class="order">ORDER</button>
        <button class="favorite">FAVORITE</button>
      </div>
      
          </div>

          <div class="products">
            <img src="image/mine router.jfif" alt="">
            <h3>MID ROUTER</h3>
            <div class="price">
            <p class="previous-price">$800</p><p class="current-price">$650</p>
            </div>
            <div class="actions">
              <button class="cart">CART</button>
              <button class="order">ORDER</button>
              <button class="favorite">FAVORITE</button>
            </div>

            
                </div>
  </div>
    </section>

    
    <section>
      <h3 class="item-category">SPORTS</h3>
<div class="container">

    <div class="products">
<img src="image/basketball.jfif" alt="">
<h3>BASKETBALL</h3>
<div class="price">
<p class="previous-price">$100</p><p class="current-price">$70</p>
</div>
<div class="actions">
  <button class="cart">CART</button>
  <button class="order">ORDER</button>
  <button class="favorite">FAVORITE</button>
</div>

    </div>

    
    <div class="products">
      <img src="image/net.jfif" alt="">
      <h3>SOCCER NET</h3>
      <div class="price">
      <p class="previous-price">$850</p><p class="current-price">$650</p>
      </div>
      <div class="actions">
        <button class="cart">CART</button>
        <button class="order">ORDER</button>
        <button class="favorite">FAVORITE</button>
      </div>
      
          </div>
          
    <div class="products">
      <img src="image/baket.jfif" alt="">
      <h3>BASKETBALL POLE</h3>
      <div class="price">
      <p class="previous-price">$900</p><p class="current-price">$750</p>
      </div>
      <div class="actions">
        <button class="cart">CART</button>
        <button class="order">ORDER</button>
        <button class="favorite">FAVORITE</button>
      </div>
      
          </div>

          <div class="products">
            <img src="image/ball.jfif" alt="">
            <h3>FOOTBALL</h3>
            <div class="price">
            <p class="previous-price">$50</p><p class="current-price">$30</p>
            </div>
            <div class="actions">
              <button class="cart">CART</button>
              <button class="order">ORDER</button>
              <button class="favorite">FAVORITE</button>
            </div>
            
                </div>
  </div>
    </section>
  </body>


  

  //SHOPPING-PAGE CSS CODE//

  body{
    margin: 0;
    padding: 2rem;
    background-color: #eee;
  }
  
  section{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    background-color: #fff;
    padding: 2rem;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.6);
  
  }
  section .item-category{
    align-self: center;
    border-bottom: 3px solid #666;
    padding-bottom: .3rem;
    color: green;
  }
  .container{
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;
  }
  
  .products{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,1);
  color: black;
  background-color: #666;
  padding: 0 0 1rem 0;
  width: 17rem;
  }
  
  .products img{
    width: 100%;
    height: 10rem;
  }
  .products h3{
    margin: 0;
    padding: .3rem 1rem;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
   
  }
  
  .products .price{
    display: flex;
    gap: 1rem;
  align-items: center;
    font-weight: bold;
    border-top: 2px solid #eee;
  
  }
  .previous-price{
    color: rgb(174, 216, 36);
    text-decoration: line-through;
  }
  .current-price{
    font-size: 1.4rem;
  }
  .actions{
    display: flex;
    padding: 0 1rem;
  }
  
  button{
    color: white;
    background-color: blue;
    padding: .3rem 1rem;
  }
  
  .cart{
    background-color: green;
  }
  .favorite{
    background-color: rgb(173, 149, 13);
  }

`




textarea.readOnly = true


let copyButton = document.getElementById("copy")
copyButton.addEventListener("click", function(){
 
  let copiedtext = textarea

  navigator.clipboard.writeText(textarea)
  .then(function(){
    setTimeout(()=>{
      document.getElementById("copy-alert").style.display = "block"
    },0000)

    setTimeout(()=>{
      document.getElementById("copy-alert").style.display = "none"
    },400)
  })

 
})
// GamepadButton.addEventlistener("click", function(){
//   textarea.select()
//   document.execCommand(copy)
//   alert("copied" + textarea)
// })