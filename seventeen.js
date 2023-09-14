let textarea = document.getElementById('text').value =` 
//**HTML CODE**//

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="gogglehome.css">
  <title>Document</title>
</head>
<body>
  <nav>
    <div class="left-nav">

      <h3>Web</h3>

      <ul>
        <li><a href="">Images</a> </li>
        <li><a href="">Videos</a> </li>
        <li><a href="">Maps</a><li>
        <li><a href="">News</a> <li>
        <li><a href="">Shopping</a></li>
        <li><a href="">Gmail</a> </li>
        <li><a href="">more</a> <li>
      </ul>
    </div>
    <div class="right-nav">
      <li><a href=""> iGoogle</a> </li>
      <li><a href="">Search settings</a> </li>
      <li><a href="">sign in</a> </li>
    </div>
  </nav>

  <main>
    <div class="google-logo">
      <h1> <span class="g">G</span> <span class="o">o</span> <span class="second-o">o</span> <span class="second-g">g</span> <span class="l">l</span> <span class="e          ">e</span>  </h1>
    </div>
    <div class="input-container">
<input type="search" placeholder="search Google or type URL">
<div class="shotlinks">
  <div class="top-links">
    <a href="">Advanced</a>
    <a href="">Search</a>
  </div>
<div class="bottom-links">
  <a href="">Language</a>
  <a href="">Tools</a>
</div>
</div>
    </div>
    <div class="search-button">
<button>Google Search</button>
<button>I'm Feeling Lucky</button>
    </div>
    <div class="footer">
      <div>
        <a href="" >Advertizing Programs</a>
        <a href="">Business Solutions</a>
        <a href="">About Google</a>
      </div>
      <div class="cast">
        <p class="year"><button>c</button> 2023 </p>
        <p>- Privacy</p>
      </div>
    </div>
  </main>
</body>
</html>


//# CSS CODE #//


body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
   }
  
  
   nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
   }
  a{
    color: rgb(13, 22, 144);
  }
   .left-nav{
    display: flex;
   }
  .left-nav h3{
    margin-right: -2rem;
  }
   .left-nav ul{
  display: flex;
  align-items: center;
  gap: .2rem;
   }
  
   .left-nav ul li{
  list-style: none;
   }
  
   .right-nav{
    display: flex;
    align-items: center;
  gap: .2rem;
   }
  
   .right-nav  li {
    list-style: none;
   
   }
  
  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  
  .google-logo{
    font-size: 3rem;
    font-family:'Times New Roman', Times, serif;
  }
   .google-logo .g{
    color: rgb(12, 12, 152);
   }
  
   .google-logo .o{
    color: rgb(195, 14, 20);
   }
   .google-logo .second-o{
    color: rgb(228, 192, 35);
   }
   .google-logo .second-g{
    color: rgb(12, 12, 152);
   }
  
   .google-logo .l{
    color: green;
   }
   .google-logo .e{
    color: rgb(195, 14, 20);
   }
  
   .input-container{
    display: flex;
    gap: 1rem;
   }
  
   .input-container input{
    font-size: 1rem;
    padding: .3rem 1rem;
    width: 25rem;
   }
   .input-container a{
    text-decoration: none;
   }
  
   .search-button{
    display: flex;
    gap: .4rem;
    align-items: center;
    margin-top: 1rem;
    margin-right: 5rem;
   }
  
   .footer{
    margin-top: 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
   }
  
   .footer > div a{
    text-decoration: none;
    font-size: 1rem;
   }
   .cast{
    display: flex;
   }
  .cast .year{
    color: #333;
  }
   .cast p{
    color: rgb(13, 22, 144);
    margin-top: -1rem;
   }
   .footer button{
    color: #333;
    background-color: white;
    border: 1px solid #333;
    border-radius: 50%;
    text-align: center;
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